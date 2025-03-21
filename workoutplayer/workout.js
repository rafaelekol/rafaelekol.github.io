// Import the exercise database
import exerciseDatabase from './exercises.js';
import { 
    speechRecognitionActive,
    recognitionInstance,
    speakText,
    cancelSpeech,
    showNotification,
    initSpeechRecognition,
    toggleSpeechRecognition
} from './audioCommands.js';

// Global variables for workout state
let workoutExercises = [];
let currentExerciseIndex = -1;
let youtubePlayer = null;
let workoutActive = false;
let workoutPaused = false;
let restTimer = null;
let restTimeRemaining = 0;
let exerciseTimer = null;

/**
 * ExerciseRoutine class represents an exercise with duration and type
 */
class ExerciseRoutine {
    constructor(exerciseId, duration, durationType) {
        this.exerciseId = exerciseId;
        this.duration = duration;
        this.durationType = durationType;
    }
}

/**
 * Parse query parameters from URL and convert to ExerciseRoutine objects
 * Expected format: exercise0=pushUps:30:seconds&exercise1=squats:15:reps
 */
function parseQueryParameters() {
    const queryParams = new URLSearchParams(window.location.search);
    const exercises = [];
    
    // Loop through all possible exercise parameters
    for (let i = 0; ; i++) {
        const exerciseParam = queryParams.get(`exercise${i}`);
        if (!exerciseParam) {
            break; // No more exercise parameters
        }
        
        // Split the parameter value by colon
        const [exerciseId, duration, durationType] = exerciseParam.split(':');
        
        if (exerciseId && duration && durationType) {
            exercises.push(new ExerciseRoutine(exerciseId, parseInt(duration), durationType));
        }
    }
    
    return exercises;
}

/**
 * Filter exercise database based on the exercise IDs from query parameters
 */
function filterExercises(exerciseRoutines) {
    const workoutExercises = [];
    
    for (const routine of exerciseRoutines) {
        const exercise = exerciseDatabase.find(ex => ex.uniqueId === routine.exerciseId);
        
        if (exercise) {
            workoutExercises.push({
                ...exercise,
                duration: routine.duration,
                durationType: routine.durationType
            });
        }
    }
    
    return workoutExercises;
}

/**
 * Display workout exercises on the page
 */
function displayWorkout(exercises) {
    const workoutListElement = document.getElementById('workout-list');
    workoutListElement.innerHTML = '';
    
    if (exercises.length === 0) {
        document.getElementById('no-workout').classList.add('show');
        document.getElementById('workout-container').classList.add('hide');
        document.getElementById('auto-play-button').classList.add('hide');
        return;
    }
    
    document.getElementById('no-workout').classList.remove('show');
    document.getElementById('workout-container').classList.remove('hide');
    
    exercises.forEach((exercise, index) => {
        const exerciseElement = document.createElement('div');
        exerciseElement.className = 'exercise-item';
        exerciseElement.id = `exercise-${index}`;
        
        const durationText = `${exercise.duration} ${exercise.durationType}`;
        
        exerciseElement.innerHTML = `
            <div class="exercise-item-content">
                <div class="exercise-title">${index + 1}. ${exercise.title}</div>
                <div class="exercise-details">${durationText}</div>
            </div>
            <button class="play-button" onclick="playVideoForExercise(${index})" title="Play video">
                <img src="assets/play_36dp.svg" alt="Play" width="20" height="20">
            </button>
        `;
        
        workoutListElement.appendChild(exerciseElement);
    });
}

/**
 * Play YouTube video for an exercise
 */
function playVideo(youtubeLink, startSeconds, endSeconds, autoStart = false) {
    const videoContainer = document.getElementById('video-container');
    
    // Extract YouTube video ID
    const videoId = extractYouTubeVideoId(youtubeLink);
    
    if (!videoId) {
        videoContainer.innerHTML = '<div class="youtube-error"><p>Error: Invalid YouTube link</p></div>';
        return;
    }
    
    // Clear any existing loop timer
    if (window.currentLoopTimer) {
        clearInterval(window.currentLoopTimer);
        window.currentLoopTimer = null;
    }
    
    // Calculate video duration
    const videoDuration = endSeconds - startSeconds;
    
    // Create YouTube player with time parameters and API
    const embedUrl = `https://www.youtube.com/embed/${videoId}?start=${startSeconds}&autoplay=1&enablejsapi=1&mute=1&controls=1&rel=0`;
    
    videoContainer.innerHTML = `
        <div class="youtube-wrapper">
            <div class="youtube-container">
                <iframe 
                    id="youtube-player"
                    class="youtube-iframe"
                    src="${embedUrl}" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    `;
    
    // Create a script to load the YouTube API if not already loaded
    if (!window.YT) {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
        // Set up a callback for when the API is ready
        window.onYouTubeIframeAPIReady = function() {
            setupYouTubePlayer(videoId, startSeconds, endSeconds, autoStart);
        };
    } else {
        // YouTube API already loaded, set up player directly
        setupYouTubePlayer(videoId, startSeconds, endSeconds, autoStart);
    }
}

/**
 * Set up YouTube player with API controls for proper looping
 */
function setupYouTubePlayer(videoId, startSeconds, endSeconds, autoStart) {
    // If there's an existing player, destroy it
    if (window.player) {
        window.player.destroy();
    }
    
    // Clear any existing loop timer
    if (window.currentLoopTimer) {
        clearInterval(window.currentLoopTimer);
        window.currentLoopTimer = null;
    }
    
    // Replace the iframe with a div that the YouTube API can target
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = `
        <div class="youtube-wrapper">
            <div class="youtube-container">
                <div id="youtube-api-player" class="youtube-api-player"></div>
            </div>
        </div>
    `;
    
    // Create a new YouTube player
    window.player = new YT.Player('youtube-api-player', {
        videoId: videoId,
        playerVars: {
            'autoplay': 1,
            'mute': 1,
            'start': startSeconds,
            'controls': 1,
            'rel': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    
    function onPlayerReady(event) {
        event.target.playVideo();
        event.target.seekTo(startSeconds);
        
        // Set up interval to check video progress and loop if needed
        window.currentLoopTimer = setInterval(() => {
            if (window.player && window.player.getCurrentTime) {
                const currentTime = window.player.getCurrentTime();
                
                // If video has reached or exceeded the end point, loop back to start point
                if (currentTime >= endSeconds) {
                    window.player.seekTo(startSeconds);
                }
                
                // If the video has ended, restart it
                if (window.player.getPlayerState() === YT.PlayerState.ENDED) {
                    window.player.seekTo(startSeconds);
                    window.player.playVideo();
                }
            }
        }, 1000); // Check every second
    }
    
    function onPlayerStateChange(event) {
        // If the video has ended, restart it from the startSeconds point
        if (event.data === YT.PlayerState.ENDED) {
            window.player.seekTo(startSeconds);
            window.player.playVideo();
        }
    }
}

/**
 * Play YouTube video for a specific exercise index
 */
function playVideoForExercise(index, autoStart = false) {
    // Clear any existing loop timer
    if (window.currentLoopTimer) {
        clearInterval(window.currentLoopTimer);
        window.currentLoopTimer = null;
    }
    
    // Cancel any active speech synthesis
    cancelSpeech();
    
    if (index >= 0 && index < workoutExercises.length) {
        // Update current exercise highlighting
        updateCurrentExerciseHighlight(index);
        
        const exercise = workoutExercises[index];
        
        // Always announce the start of the exercise, whether in auto-play or manual mode
        const startAnnouncement = `Start now! ${exercise.title}`;
        speakText(startAnnouncement);
        
        playVideo(exercise.youtubeLink, exercise.startSeconds, exercise.endSeconds, autoStart);
        currentExerciseIndex = index;
        
        // If this is part of auto-play sequence, setup timers and voice commands
        if (autoStart && workoutActive) {
            // Update status message
            const statusMessage = document.getElementById('status-message');
            if (exercise.durationType === 'seconds') {
                statusMessage.textContent = `Current: ${exercise.title} - ${exercise.duration} seconds`;
            } else {
                statusMessage.textContent = `Current: ${exercise.title} - ${exercise.duration} reps`;
            }
            statusMessage.classList.add('show');
            
            // Clear any previous timer display
            const timerElement = document.getElementById('timer');
            if (exercise.durationType !== 'seconds') {
                timerElement.classList.add('hide');
            }

            // Set up exercise timer for time-based exercises
            if (exercise.durationType === 'seconds') {
                startExerciseTimer(exercise.duration);
                
                // Show pause button, hide checkmark
                document.getElementById('pause-button').classList.remove('hide');
                document.getElementById('checkmark-button').classList.add('hide');
            } else {
                // For rep-based exercises, show checkmark button, hide pause
                document.getElementById('pause-button').classList.add('hide');
                document.getElementById('checkmark-button').classList.remove('hide');
            }
        }
    }
}

/**
 * Start exercise timer display
 */
function startExerciseTimer(duration) {
    const timerElement = document.getElementById('timer');
    timerElement.classList.remove('hide');
    
    let timeRemaining = duration;
    
    // Clear any existing timer
    if (exerciseTimer) {
        clearInterval(exerciseTimer);
    }
    
    // Update timer display immediately
    timerElement.textContent = `${timeRemaining} seconds`;
    
    // Set up countdown
    exerciseTimer = setInterval(() => {
        if (!workoutPaused) {
            timeRemaining--;
            timerElement.textContent = `${timeRemaining} seconds`;
            
            if (timeRemaining <= 0) {
                clearInterval(exerciseTimer);
                exerciseTimer = null;
                
                // Exercise is complete, move to rest period
                startRestPeriod();
            }
        }
    }, 1000);
}

/**
 * Start rest period between exercises
 */
function startRestPeriod() {
    // Cancel any active speech first
    cancelSpeech();
    
    // Clear any existing loop timer
    if (window.currentLoopTimer) {
        clearInterval(window.currentLoopTimer);
        window.currentLoopTimer = null;
    }
    
    // Destroy YouTube player if it exists
    if (window.player) {
        window.player.destroy();
        window.player = null;
    }
    
    // Stop current video playback and show rest placeholder
    const videoContainer = document.getElementById('video-container');
    const nextExerciseIndex = currentExerciseIndex + 1;
    const hasNextExercise = nextExerciseIndex < workoutExercises.length;
    const nextExercise = hasNextExercise ? workoutExercises[nextExerciseIndex] : null;
    
    if (hasNextExercise) {
        const nextExerciseDetails = nextExercise.durationType === 'seconds'
            ? `${nextExercise.title} - ${nextExercise.duration} seconds`
            : `${nextExercise.title} - ${nextExercise.duration} reps`;
            
        videoContainer.innerHTML = `
            <div class="rest-placeholder">
                <div>
                    <h2>REST TIME</h2>
                    <p>Next exercise: ${nextExerciseDetails}</p>
                    <div id="rest-countdown" class="rest-countdown">10</div>
                </div>
            </div>
        `;
    } else {
        videoContainer.innerHTML = `
            <div class="player-placeholder">
                <div>
                    <h2>WORKOUT COMPLETE!</h2>
                    <p>Great job!</p>
                </div>
            </div>
        `;
    }
    
    // Show rest timer
    const timerElement = document.getElementById('timer');
    const statusMessage = document.getElementById('status-message');
    
    // Make sure any existing timers are cleared
    if (exerciseTimer) {
        clearInterval(exerciseTimer);
        exerciseTimer = null;
    }
    
    if (restTimer) {
        clearInterval(restTimer);
        restTimer = null;
    }
    
    // Announce rest period with voice
    if (hasNextExercise) {
        // Announce rest period with voice
        speakText(`Rest time. Next up: ${nextExercise.title}`);
        
        // Update status message with exercise details
        const nextExerciseDetails = nextExercise.durationType === 'seconds'
            ? `REST - Next: ${nextExercise.title} - ${nextExercise.duration} seconds`
            : `REST - Next: ${nextExercise.title} - ${nextExercise.duration} reps`;
        
        statusMessage.textContent = nextExerciseDetails;
        
        // Show status and timer
        statusMessage.classList.add('show');
        timerElement.classList.add('show');
        
        // Set rest time (10 seconds)
        restTimeRemaining = 10;
        timerElement.textContent = `Rest: ${restTimeRemaining} seconds`;
        
        // Set up countdown
        restTimer = setInterval(() => {
            if (!workoutPaused) {
                restTimeRemaining--;
                timerElement.textContent = `Rest: ${restTimeRemaining} seconds`;
                
                // Update the countdown in the rest placeholder as well
                const restCountdown = document.getElementById('rest-countdown');
                if (restCountdown) {
                    restCountdown.textContent = restTimeRemaining;
                }
                
                if (restTimeRemaining <= 0) {
                    clearInterval(restTimer);
                    restTimer = null;
                    
                    // Move to next exercise
                    playVideoForExercise(nextExerciseIndex, true);
                }
            }
        }, 1000);
    } else {
        // This is the last exercise, so end the workout
        speakText("Workout complete! Great job!");
        statusMessage.textContent = "Workout Complete!";
        statusMessage.classList.add('show');
        timerElement.classList.add('hide'); // Hide timer immediately
        endWorkout();
    }
}

/**
 * Skip to next exercise
 */
function skipExercise() {
    // Cancel any active speech synthesis
    cancelSpeech();
    
    // Clear any existing loop timer
    if (window.currentLoopTimer) {
        clearInterval(window.currentLoopTimer);
        window.currentLoopTimer = null;
    }
    
    // Destroy YouTube player if it exists
    if (window.player) {
        window.player.destroy();
        window.player = null;
    }
    
    // Clear any active timers
    if (exerciseTimer) {
        clearInterval(exerciseTimer);
        exerciseTimer = null;
    }
    
    if (restTimer) {
        clearInterval(restTimer);
        restTimer = null;
    }
    
    // Reset timer display
    const timerElement = document.getElementById('timer');
    timerElement.classList.add('hide');
    
    // Move to next exercise or end workout
    const nextExerciseIndex = currentExerciseIndex + 1;
    if (nextExerciseIndex < workoutExercises.length) {
        playVideoForExercise(nextExerciseIndex, true);
    } else {
        endWorkout();
    }
}

/**
 * Called when user completes a rep-based exercise
 */
function completeExercise() {
    // Cancel any active speech synthesis
    cancelSpeech();
    
    // Clear any active timers first
    if (exerciseTimer) {
        clearInterval(exerciseTimer);
        exerciseTimer = null;
    }
    
    if (restTimer) {
        clearInterval(restTimer);
        restTimer = null;
    }
    
    // Clear any looping timer
    if (window.currentLoopTimer) {
        clearInterval(window.currentLoopTimer);
        window.currentLoopTimer = null;
    }
    
    // Destroy YouTube player if it exists
    if (window.player) {
        window.player.destroy();
        window.player = null;
    }
    
    // Reset timer display immediately
    const timerElement = document.getElementById('timer');
    timerElement.classList.add('hide');
    
    // For rep-based exercises, move to rest period immediately
    startRestPeriod();
}

/**
 * Pause or resume the workout
 */
function pauseWorkout() {
    workoutPaused = !workoutPaused;
    
    const pauseButton = document.getElementById('pause-button');
    pauseButton.textContent = workoutPaused ? 'Resume' : 'Pause';
    
    // Handle speech synthesis
    if (workoutPaused) {
        // Pause any ongoing speech
        if ('speechSynthesis' in window) {
            window.speechSynthesis.pause();
        }
    } else {
        // Resume any paused speech
        if ('speechSynthesis' in window) {
            window.speechSynthesis.resume();
        }
    }
    
    // Handle YouTube player pause/resume
    if (window.player) {
        if (workoutPaused) {
            window.player.pauseVideo();
            
            // If we're pausing, pause the loop timer (by clearing it)
            if (window.currentLoopTimer) {
                clearInterval(window.currentLoopTimer);
                window.currentLoopTimer = null;
            }
        } else {
            window.player.playVideo();
            
            // If we're resuming, restart the loop checking
            if (currentExerciseIndex !== -1) {
                const currentExercise = workoutExercises[currentExerciseIndex];
                if (currentExercise) {
                    // Get the current startSeconds and endSeconds
                    const startSeconds = currentExercise.startSeconds;
                    const endSeconds = currentExercise.endSeconds;
                    
                    // Restart the loop timer
                    window.currentLoopTimer = setInterval(() => {
                        if (window.player && window.player.getCurrentTime && !workoutPaused) {
                            const currentTime = window.player.getCurrentTime();
                            
                            // If video has reached or exceeded the end point, loop back to start point
                            if (currentTime >= endSeconds) {
                                window.player.seekTo(startSeconds);
                            }
                        }
                    }, 1000);
                }
            }
        }
    }
}

/**
 * End the workout and reset UI
 */
function endWorkout() {
    // Cancel any active speech synthesis
    cancelSpeech();
    
    workoutActive = false;
    currentExerciseIndex = -1;
    
    // Clear any looping timer
    if (window.currentLoopTimer) {
        clearInterval(window.currentLoopTimer);
        window.currentLoopTimer = null;
    }
    
    // Destroy YouTube player if it exists
    if (window.player) {
        window.player.destroy();
        window.player = null;
    }
    
    // Clear any active timers
    if (exerciseTimer) {
        clearInterval(exerciseTimer);
        exerciseTimer = null;
    }
    
    if (restTimer) {
        clearInterval(restTimer);
        restTimer = null;
    }
    
    // Reset UI
    document.getElementById('auto-play-button').classList.remove('hide');
    document.getElementById('control-buttons').classList.remove('show');
    document.getElementById('timer').classList.add('hide');
    
    const statusMessage = document.getElementById('status-message');
    statusMessage.textContent = "Workout Complete!";
    statusMessage.classList.add('show');
    
    // Remove highlighting from exercises
    for (let i = 0; i < workoutExercises.length; i++) {
        const exerciseElement = document.getElementById(`exercise-${i}`);
        if (exerciseElement) {
            exerciseElement.classList.remove('current-exercise');
        }
    }
    
    // Show completion placeholder in video container
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = `
        <div class="player-placeholder">
            <div>
                <h2>WORKOUT COMPLETE!</h2>
                <p>Great job!</p>
            </div>
        </div>
    `;
}

/**
 * Highlight the current exercise in the list
 */
function updateCurrentExerciseHighlight(index) {
    // Remove highlighting from all exercises
    for (let i = 0; i < workoutExercises.length; i++) {
        const exerciseElement = document.getElementById(`exercise-${i}`);
        if (exerciseElement) {
            exerciseElement.classList.remove('current-exercise');
        }
    }
    
    // Add highlighting to current exercise
    const currentElement = document.getElementById(`exercise-${index}`);
    if (currentElement) {
        currentElement.classList.add('current-exercise');
        
        // Scroll to the current exercise
        currentElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

/**
 * Extract YouTube video ID from various URL formats
 */
function extractYouTubeVideoId(url) {
    // If the URL is already an embed URL, extract the video ID
    if (url.includes('/embed/')) {
        const parts = url.split('/embed/');
        return parts[1].split('?')[0];
    }
    
    // Handle regular YouTube URLs
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11)
        ? match[2]
        : null;
}

/**
 * Start the workout from the first exercise
 */
function startWorkout() {
    if (workoutExercises.length > 0) {
        // Cancel any active speech first
        cancelSpeech();
        
        // Set workout as active
        workoutActive = true;
        workoutPaused = false;
        
        // Hide auto play button, show control buttons
        document.getElementById('auto-play-button').classList.add('hide');
        document.getElementById('control-buttons').classList.add('show');
        
        // Reset any existing timers
        if (exerciseTimer) {
            clearInterval(exerciseTimer);
        }
        
        if (restTimer) {
            clearInterval(restTimer);
        }
        
        // Start with first exercise
        playVideoForExercise(0, true);
    }
}

/**
 * Initialize the application
 */
function init() {
    const exerciseRoutines = parseQueryParameters();
    workoutExercises = filterExercises(exerciseRoutines);
    displayWorkout(workoutExercises);
    
    // If there are no exercises, hide the auto-play button
    if (workoutExercises.length === 0) {
        document.getElementById('auto-play-button').classList.add('hide');
    }
    
    // Initialize speech recognition for voice commands with workout callbacks
    const workoutCallbacks = {
        // Use getter functions to ensure we always have the current values
        get workoutActive() { return workoutActive; },
        get workoutPaused() { return workoutPaused; },
        get currentExerciseIndex() { return currentExerciseIndex; },
        get workoutExercises() { return workoutExercises; },
        // Function references
        startWorkout,
        skipExercise, 
        pauseWorkout,
        completeExercise,
        endWorkout
    };
    
    initSpeechRecognition(workoutCallbacks);
}

// Make functions globally available
window.playVideo = playVideo;
window.playVideoForExercise = playVideoForExercise;
window.startWorkout = startWorkout;
window.pauseWorkout = pauseWorkout;
window.skipExercise = skipExercise;
window.completeExercise = completeExercise;
window.setupYouTubePlayer = setupYouTubePlayer;
window.toggleSpeechRecognition = function() {
    // Create a fresh workout callbacks object with current state
    const workoutCallbacks = {
        // Use getter functions to ensure we always have the current values
        get workoutActive() { return workoutActive; },
        get workoutPaused() { return workoutPaused; },
        get currentExerciseIndex() { return currentExerciseIndex; },
        get workoutExercises() { return workoutExercises; },
        // Function references
        startWorkout,
        skipExercise, 
        pauseWorkout,
        completeExercise,
        endWorkout
    };
    
    // Call the imported toggleSpeechRecognition with workout callbacks
    toggleSpeechRecognition(workoutCallbacks);
};

// Initialize the app when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init); 