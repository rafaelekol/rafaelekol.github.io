// Import the exercise database
import exerciseDatabase from './exercises.js';
import { 
    speechRecognitionActive,
    recognitionInstance,
    speakText,
    cancelSpeech,
    showNotification,
    initSpeechRecognition,
    toggleSpeechRecognition,
    announceCurrentExercise,
    handleSpeechVisibilityChange
} from './audioCommands.js';

// Global variables for workout state
let workoutExercises = [];
let currentExerciseIndex = -1;
let youtubePlayer = null;
let workoutActive = false;
let workoutPaused = false;

// These will be attached to the window object
window.restTimer = null;
window.exerciseTimer = null;
window.currentLoopTimer = null;

// Add these global variables to store timer state
let savedExerciseTimeRemaining = 0;
let savedRestTimeRemaining = 0;
let currentExerciseTimeRemaining = 0;
let currentRestTimeRemaining = 0;
let initialExerciseDuration = 0;

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
        }, 1000);
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
    console.log(`Playing video for exercise ${index}, autoStart: ${autoStart}`);
    
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
        
        // Announce the exercise with its duration or repetition count
        let startAnnouncement;
        if (exercise.durationType === 'seconds') {
            startAnnouncement = `Starting ${exercise.title} for ${exercise.duration} seconds`;
        } else {
            startAnnouncement = `Starting ${exercise.title} for ${exercise.duration} repetitions`;
        }
        
        // Add a countdown before starting the exercise if autoStart is true
        // Cancel any previous speech before announcing
        if (autoStart) {
            speakText(startAnnouncement + ". Ready, set, go!");
        } else {
            speakText(startAnnouncement);
        }
        
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
            
            // Get timer element
            const timerElement = document.getElementById('timer');
            const timerValueElement = document.getElementById('timer-value');
            
            // Reset timer
            if (timerValueElement) {
                timerValueElement.textContent = "00:00";
            }
            
            // Set up exercise timer for time-based exercises
            if (exercise.durationType === 'seconds') {
                // For timed exercises, show the timer and start the countdown
                startExerciseTimer(exercise.duration);
                
                // Show pause button, hide checkmark
                document.getElementById('pause-button').classList.remove('hide');
                document.getElementById('checkmark-button').classList.add('hide');
            } else {
                // For rep-based exercises, hide the timer
                timerElement.classList.add('hide');
                timerElement.classList.remove('show');
                
                // For rep-based exercises, show checkmark button, hide pause
                document.getElementById('pause-button').classList.add('hide');
                document.getElementById('checkmark-button').classList.remove('hide');
            }
        }
    }
}

/**
 * Start the exercise timer
 * @param {number} duration - Duration in seconds
 */
function startExerciseTimer(duration) {
    // Cancel any active speech synthesis
    cancelSpeech();
    
    // Clear any existing exercise timer
    if (window.exerciseTimer) {
        clearInterval(window.exerciseTimer);
        window.exerciseTimer = null;
    }
    
    // Debug logging
    console.log(`Starting exercise timer for ${duration} seconds`);
    
    // Store initial duration for the resume functionality
    currentExerciseTimeRemaining = duration;
    initialExerciseDuration = duration;
    
    // Get and show timer element
    const timerElement = document.getElementById('timer');
    const timerValueElement = document.getElementById('timer-value');
    
    timerElement.classList.remove('hide');
    timerElement.classList.add('show');
    
    // Flag to track if we're in the final countdown
    let lastAnnouncedTime = -1;
    
    // Set up countdown
    window.exerciseTimer = setInterval(() => {
        // Skip updating if workout is paused
        if (workoutPaused) return;
        
        currentExerciseTimeRemaining--;
        
        // Update timer display
        timerValueElement.textContent = formatTime(currentExerciseTimeRemaining);
        
        // Announce halfway point for longer exercises (over 20 seconds)
        const halfwayPoint = Math.floor(initialExerciseDuration / 2);
        if (currentExerciseTimeRemaining === halfwayPoint && initialExerciseDuration > 20) {
            speakText("Halfway point");
        }
        
        // Announce countdown for the last 5 seconds with improved timing
        if (currentExerciseTimeRemaining <= 5 && currentExerciseTimeRemaining > 0) {
            // Only announce if we haven't announced this number yet
            if (currentExerciseTimeRemaining !== lastAnnouncedTime) {
                lastAnnouncedTime = currentExerciseTimeRemaining;
                // Cancel any previous speech before announcing the countdown
                speakText(currentExerciseTimeRemaining.toString());
            }
        }
        
        // When timer reaches zero
        if (currentExerciseTimeRemaining <= 0) {
            clearInterval(window.exerciseTimer);
            window.exerciseTimer = null;
            
            // Complete the exercise
            completeExercise();
        }
    }, 1000);
}

/**
 * Start rest period between exercises
 */
function startRestPeriod() {
    // Debug logging
    console.log(`Starting rest period. Workout active: ${workoutActive}, Current exercise index: ${currentExerciseIndex}`);
    
    // Ensure workout is still active
    if (!workoutActive) {
        console.log("Workout not active, skipping rest period");
        return;
    }
    
    // Cancel any active speech synthesis
    cancelSpeech();
    
    // Clear any existing timer
    if (window.restTimer) {
        clearInterval(window.restTimer);
        window.restTimer = null;
    }
    
    // Get the rest period duration
    let restDuration = 10; // Default to 10 seconds
    const restDurationElement = document.getElementById('rest-duration');
    if (restDurationElement) {
        restDuration = parseInt(restDurationElement.value) || 10;
    }
    console.log(`Rest duration: ${restDuration} seconds`);
    
    currentRestTimeRemaining = restDuration;
    
    // Get next exercise
    const nextExerciseIndex = currentExerciseIndex + 1;
    const hasNextExercise = nextExerciseIndex < workoutExercises.length;
    
    // Update status message
    const statusMessage = document.getElementById('status-message');
    statusMessage.textContent = `Rest period: ${restDuration} seconds`;
    statusMessage.classList.add('show');
    
    if (hasNextExercise) {
        const nextExercise = workoutExercises[nextExerciseIndex];
        statusMessage.textContent += ` | Next: ${nextExercise.title}`;
        
        // Announce rest period and next exercise - after canceling any previous speech
        if (restDuration >= 10) {
            // Only announce next exercise if rest period is long enough
            speakText(`Rest for ${restDuration} seconds. Coming up next: ${nextExercise.title}`);
        } else {
            speakText(`Rest for ${restDuration} seconds`);
        }
    } else {
        speakText(`Rest for ${restDuration} seconds. This is the last exercise.`);
    }
    
    // Show rest image or message in video container
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = `
        <div class="rest-placeholder">
            <div>
                <h2>Rest Time</h2>
                <p>Next exercise in <span id="rest-countdown">${formatTime(currentRestTimeRemaining)}</span></p>
            </div>
        </div>
    `;
    
    // Get and show timer element
    const timerElement = document.getElementById('timer');
    const timerValueElement = document.getElementById('timer-value');
    
    // Update timer label for rest period
    const timerLabelElement = timerElement.querySelector('.timer-label');
    if (timerLabelElement) {
        timerLabelElement.textContent = 'Rest Time: ';
    }
    
    timerElement.classList.remove('hide');
    timerElement.classList.add('show');
    timerValueElement.textContent = formatTime(currentRestTimeRemaining);
    
    // Flag to track if we're in the final countdown
    let inFinalCountdown = false;
    let lastAnnouncedTime = -1;
    
    // Set up countdown
    window.restTimer = setInterval(() => {
        // Skip updating if workout is paused
        if (workoutPaused) return;
        
        currentRestTimeRemaining--;
        
        // Update UI
        timerValueElement.textContent = formatTime(currentRestTimeRemaining);
        const restCountdown = document.getElementById('rest-countdown');
        if (restCountdown) {
            restCountdown.textContent = formatTime(currentRestTimeRemaining);
        }
        
        // Announce countdown for the last 5 seconds with improved timing
        if (currentRestTimeRemaining <= 5 && currentRestTimeRemaining > 0) {
            // Only announce if we haven't announced this number yet
            // This prevents duplicate announcements if speech is slow
            if (currentRestTimeRemaining !== lastAnnouncedTime) {
                lastAnnouncedTime = currentRestTimeRemaining;
                // Cancel any previous speech before announcing the countdown
                speakText(currentRestTimeRemaining.toString());
            }
        }
        
        // When rest period ends
        if (currentRestTimeRemaining <= 0) {
            clearInterval(window.restTimer);
            window.restTimer = null;
            
            // Hide timer
            timerElement.classList.add('hide');
            timerElement.classList.remove('show');
            
            // Reset timer label
            if (timerLabelElement) {
                timerLabelElement.textContent = 'Time Remaining: ';
            }
            
            // If there's a next exercise, play it
            if (hasNextExercise) {
                // Cancel any previous speech before announcing the rest completion
                // speakText("Rest complete. Starting next exercise.");
                playVideoForExercise(nextExerciseIndex, true);
            } else {
                // Otherwise, end the workout
                endWorkout();
            }
        }
    }, 1000);
}

/**
 * Skip to the next exercise in the workout
 */
function skipExercise() {
    // Cancel any active speech synthesis
    cancelSpeech();
    
    // Clear any active timers
    if (window.exerciseTimer) {
        clearInterval(window.exerciseTimer);
        window.exerciseTimer = null;
    }
    
    if (window.restTimer) {
        clearInterval(window.restTimer);
        window.restTimer = null;
    }
    
    // Reset saved timer values
    savedExerciseTimeRemaining = 0;
    savedRestTimeRemaining = 0;
    currentExerciseTimeRemaining = 0;
    currentRestTimeRemaining = 0;
    
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
    
    // Check if there are more exercises to play
    if (currentExerciseIndex < workoutExercises.length - 1) {
        // Play the next exercise (announcement will be made in playVideoForExercise)
        playVideoForExercise(currentExerciseIndex + 1, workoutActive);
    } else {
        // This was the last exercise, end the workout
        // Ensure any previous speech is cancelled
        cancelSpeech();
        speakText('Workout complete!');
        endWorkout();
    }
}

/**
 * Called when user completes a rep-based exercise or when a timed exercise finishes
 */
function completeExercise() {
    // Cancel any active speech synthesis
    cancelSpeech();
    
    // Clear any active timers first
    if (window.exerciseTimer) {
        clearInterval(window.exerciseTimer);
        window.exerciseTimer = null;
    }
    
    if (window.restTimer) {
        clearInterval(window.restTimer);
        window.restTimer = null;
    }
    
    // Reset saved timer values
    savedExerciseTimeRemaining = 0;
    currentExerciseTimeRemaining = 0;
    
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
    timerElement.classList.remove('show'); // Remove the 'show' class to hide the timer
    
    // Only start rest period if workout is active
    if (workoutActive) {
        // Check if this was the last exercise
        if (currentExerciseIndex >= workoutExercises.length - 1) {
            // This was the last exercise, end the workout
            speakText('Workout complete!');
            endWorkout();
        } else {
            // Start rest period before next exercise
            console.log("Starting rest period...");
            startRestPeriod();
        }
    }
}

/**
 * Pause/unpause the workout
 */
function pauseWorkout() {
    const pauseButton = document.getElementById('pause-button');
    
    if (workoutPaused) {
        // Resuming from pause
        workoutPaused = false;
        pauseButton.textContent = 'Pause';
        
        // Cancel any speech and announce resuming
        cancelSpeech();
        speakText("Resuming workout");
        
        // Resume appropriate timer based on workout state
        if (window.exerciseTimer === null && window.restTimer === null) {
            // If both timers are null, determine which one to restart
            if (document.querySelector('.rest-placeholder')) {
                // We're in a rest period
                resumeRestTimer();
            } else {
                // We're in an exercise
                resumeExerciseTimer();
            }
        } else {
            console.log("Timers already active, no need to resume");
        }
        
        // Resume YouTube player if it exists
        if (window.player && typeof window.player.playVideo === 'function') {
            window.player.playVideo();
            
            // Restart loop checking if we have a current exercise
            if (currentExerciseIndex !== -1) {
                const currentExercise = workoutExercises[currentExerciseIndex];
                if (currentExercise) {
                    // Get the current startSeconds and endSeconds
                    const startSeconds = currentExercise.startSeconds || 0;
                    const endSeconds = currentExercise.endSeconds;
                    
                    if (endSeconds) {
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
    } else {
        // Pausing
        workoutPaused = true;
        pauseButton.textContent = 'Resume';
        
        // Cancel any speech and announce pause
        cancelSpeech();
        speakText("Workout paused");
        
        // Pause YouTube player
        if (window.player && typeof window.player.pauseVideo === 'function') {
            window.player.pauseVideo();
        }
        
        // Clear the loop timer if it exists
        if (window.currentLoopTimer) {
            clearInterval(window.currentLoopTimer);
            window.currentLoopTimer = null;
        }
        
        // Note: We don't clear the exercise/rest timers here because they check the workoutPaused flag
        // and skip updates when paused. This preserves the timer values.
        // The timer display will remain static until unpaused.
    }
}

/**
 * Resume the exercise timer after a pause
 */
function resumeExerciseTimer() {
    // Debug log
    console.log(`Resuming exercise timer with ${currentExerciseTimeRemaining} seconds remaining`);
    
    // Get timer elements
    const timerElement = document.getElementById('timer');
    const timerValueElement = document.getElementById('timer-value');
    
    // Show timer and update value
    timerElement.classList.remove('hide');
    timerElement.classList.add('show');
    timerValueElement.textContent = formatTime(currentExerciseTimeRemaining);
    
    // Flag to track if we're in the final countdown
    let lastAnnouncedTime = -1;
    
    // Create a new timer
    window.exerciseTimer = setInterval(() => {
        // Skip updating if workout is paused
        if (workoutPaused) return;
        
        currentExerciseTimeRemaining--;
        
        // Update timer display
        timerValueElement.textContent = formatTime(currentExerciseTimeRemaining);
        
        // Announce halfway point for longer exercises (over 20 seconds)
        const halfwayPoint = Math.floor(initialExerciseDuration / 2);
        if (currentExerciseTimeRemaining === halfwayPoint && initialExerciseDuration > 20) {
            speakText("Halfway point");
        }
        
        // Announce countdown for the last 5 seconds with improved timing
        if (currentExerciseTimeRemaining <= 5 && currentExerciseTimeRemaining > 0) {
            // Only announce if we haven't announced this number yet
            if (currentExerciseTimeRemaining !== lastAnnouncedTime) {
                lastAnnouncedTime = currentExerciseTimeRemaining;
                // Cancel any previous speech before announcing the countdown
                speakText(currentExerciseTimeRemaining.toString());
            }
        }
        
        // When timer reaches zero
        if (currentExerciseTimeRemaining <= 0) {
            clearInterval(window.exerciseTimer);
            window.exerciseTimer = null;
            
            // Complete the exercise
            completeExercise();
        }
    }, 1000);
}

/**
 * Resume the rest timer after a pause
 */
function resumeRestTimer() {
    // Debug log
    console.log(`Resuming rest timer with ${currentRestTimeRemaining} seconds remaining`);
    
    // Get and show timer element
    const timerElement = document.getElementById('timer');
    const timerValueElement = document.getElementById('timer-value');
    
    // Show timer
    timerElement.classList.remove('hide');
    timerElement.classList.add('show');
    timerValueElement.textContent = formatTime(currentRestTimeRemaining);
    
    // Update rest countdown in UI
    const restCountdown = document.getElementById('rest-countdown');
    if (restCountdown) {
        restCountdown.textContent = formatTime(currentRestTimeRemaining);
    }
    
    // Flag to track if we're in the final countdown
    let lastAnnouncedTime = -1;
    
    // Get next exercise for announcements
    const nextExerciseIndex = currentExerciseIndex + 1;
    const hasNextExercise = nextExerciseIndex < workoutExercises.length;
    
    // Set up countdown
    window.restTimer = setInterval(() => {
        // Skip updating if workout is paused
        if (workoutPaused) return;
        
        currentRestTimeRemaining--;
        
        // Update UI
        timerValueElement.textContent = formatTime(currentRestTimeRemaining);
        if (restCountdown) {
            restCountdown.textContent = formatTime(currentRestTimeRemaining);
        }
        
        // Announce countdown for the last 5 seconds with improved timing
        if (currentRestTimeRemaining <= 5 && currentRestTimeRemaining > 0) {
            // Only announce if we haven't announced this number yet
            if (currentRestTimeRemaining !== lastAnnouncedTime) {
                lastAnnouncedTime = currentRestTimeRemaining;
                // Cancel any previous speech before announcing the countdown
                speakText(currentRestTimeRemaining.toString());
            }
        }
        
        // When rest period ends
        if (currentRestTimeRemaining <= 0) {
            clearInterval(window.restTimer);
            window.restTimer = null;
            
            // Hide timer
            timerElement.classList.add('hide');
            timerElement.classList.remove('show');
            
            // Reset timer label
            const timerLabelElement = timerElement.querySelector('.timer-label');
            if (timerLabelElement) {
                timerLabelElement.textContent = 'Time Remaining: ';
            }
            
            // If there's a next exercise, play it
            if (hasNextExercise) {
                // Cancel any previous speech before announcing the rest completion
                // speakText("Rest complete. Starting next exercise.");
                playVideoForExercise(nextExerciseIndex, true);
            } else {
                // Otherwise, end the workout
                endWorkout();
            }
        }
    }, 1000);
}

/**
 * End the workout and reset UI
 */
function endWorkout() {
    // Cancel any active speech synthesis
    cancelSpeech();
    
    workoutActive = false;
    currentExerciseIndex = -1;
    
    // Reset all timer values
    savedExerciseTimeRemaining = 0;
    savedRestTimeRemaining = 0;
    currentExerciseTimeRemaining = 0;
    currentRestTimeRemaining = 0;
    
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
    if (window.exerciseTimer) {
        clearInterval(window.exerciseTimer);
        window.exerciseTimer = null;
    }
    
    if (window.restTimer) {
        clearInterval(window.restTimer);
        window.restTimer = null;
    }
    
    // Reset UI
    document.getElementById('auto-play-button').classList.remove('hide');
    document.getElementById('control-buttons').classList.remove('show');
    
    // Hide timer explicitly
    const timerElement = document.getElementById('timer');
    timerElement.classList.add('hide');
    timerElement.classList.remove('show');
    
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
        if (window.exerciseTimer) {
            clearInterval(window.exerciseTimer);
            window.exerciseTimer = null;
        }
        
        if (window.restTimer) {
            clearInterval(window.restTimer);
            window.restTimer = null;
        }
        
        // Announce workout beginning with countdown
        speakText("Starting workout");
        
        // Show countdown in the video container
        const videoContainer = document.getElementById('video-container');
        videoContainer.innerHTML = `
            <div class="player-placeholder">
                <div>
                    <h2>GET READY!</h2>
                    <div id="start-countdown" class="rest-countdown">5</div>
                </div>
            </div>
        `;
        
        // Create a countdown before starting the first exercise with longer duration
        let countdownValue = 5; // Start from 5 instead of 3
        const announceNextNumber = () => {
            // Update visual countdown
            const countdownElement = document.getElementById('start-countdown');
            if (countdownElement) {
                countdownElement.textContent = countdownValue;
            }
            
            // Announce countdown with proper cancellation of previous speech
            if (countdownValue > 0) {
                // Cancel any previous speech before announcing the countdown
                speakText(countdownValue.toString());
                
                // Decrement counter after announcement
                countdownValue--;
                
                // Schedule next announcement with sufficient delay for speech to complete
                // Wait 1.5 seconds between announcements to ensure speech completes
                setTimeout(announceNextNumber, 1500);
            } else {
                // Start first exercise after countdown completes
                playVideoForExercise(0, true);
            }
        };
        
        // Start the countdown process
        announceNextNumber();
    }
}

/**
 * Initialize the application
 */
function init() {
    // Clear any existing timers (in case of page refresh)
    if (window.exerciseTimer) {
        clearInterval(window.exerciseTimer);
        window.exerciseTimer = null;
    }
    
    if (window.restTimer) {
        clearInterval(window.restTimer);
        window.restTimer = null;
    }
    
    if (window.currentLoopTimer) {
        clearInterval(window.currentLoopTimer);
        window.currentLoopTimer = null;
    }
    
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
        endWorkout,
        // Add callback for exercise changes
        onExerciseChange: (index) => {
            console.log(`Exercise changed to index ${index}`);
            // We'll let the announceCurrentExercise function handle the announcement
        }
    };
    
    initSpeechRecognition(workoutCallbacks);
    
    // Hide the timer initially
    const timerElement = document.getElementById('timer');
    timerElement.classList.add('hide');
    timerElement.classList.remove('show');
}

/**
 * Formats a time in seconds to minutes:seconds display (00:00)
 */
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Initialize the app when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

// Add event listeners for page visibility changes to handle speech synthesis
document.addEventListener('visibilitychange', handleVisibilityChange);

// Add iOS-specific event listeners for when the app goes to background
window.addEventListener('pagehide', () => handleVisibilityChange(true));
window.addEventListener('pageshow', () => handleVisibilityChange(false));

// Handle blur/focus events as a fallback for older browsers
window.addEventListener('blur', () => handleVisibilityChange(true));
window.addEventListener('focus', () => handleVisibilityChange(false));

/**
 * Handle page visibility changes to control speech synthesis
 * This ensures speech is stopped when user navigates away and can be resumed when they return
 * @param {boolean} [forceHidden] - Force the hidden state for event handlers that don't rely on document.hidden
 */
function handleVisibilityChange(forceHidden) {
    // Use the forced value if provided, otherwise check document.hidden
    const isHidden = forceHidden !== undefined ? forceHidden : document.hidden;
    
    if (isHidden) {
        // User has navigated away from the page
        console.log('Page is now hidden - stopping speech synthesis');
        
        // Handle speech and recognition via the audio commands module
        handleSpeechVisibilityChange(true);
        
        // Pause workout if it's active and not already paused
        if (workoutActive && !workoutPaused) {
            // Don't announce the pause since we're in background
            workoutPaused = true;
            
            // Update pause button text for when user returns
            const pauseButton = document.getElementById('pause-button');
            if (pauseButton) {
                pauseButton.textContent = 'Resume';
            }
            
            // Pause YouTube player if it exists
            if (window.player && typeof window.player.pauseVideo === 'function') {
                window.player.pauseVideo();
            }
            
            // Clear the loop timer if it exists
            if (window.currentLoopTimer) {
                clearInterval(window.currentLoopTimer);
                window.currentLoopTimer = null;
            }
        }
    } else {
        // User has returned to the page
        console.log('Page is now visible again');
        
        // Handle speech and recognition via the audio commands module
        handleSpeechVisibilityChange(false);
        
        // We don't automatically resume the workout or speech synthesis here
        // because the user might not want it to resume immediately
        
        // Display a notification to inform the user that the workout was paused
        if (workoutActive && workoutPaused) {
            showNotification('Workout was paused while you were away. Press Resume to continue.', 'info');
        }
    }
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
        endWorkout,
        // Add callback for exercise changes
        onExerciseChange: (index) => {
            console.log(`Exercise changed to index ${index}`);
            // Let the announceCurrentExercise function handle the announcement
        }
    };
    
    // Call the imported toggleSpeechRecognition with workout callbacks
    toggleSpeechRecognition(workoutCallbacks);
};