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

// Add this to the global variables section at the top of the file
let countdownTimeout = null;

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
 * Play GIF animation or video for an exercise
 */
function playVideo(videoPath, autoStart = false) {
    const videoContainer = document.getElementById('video-container');
    
    // Clear any existing loop timer
    if (window.currentLoopTimer) {
        clearInterval(window.currentLoopTimer);
        window.currentLoopTimer = null;
    }
    
    // Destroy any existing YouTube player if it exists
    if (window.player) {
        window.player.destroy();
        window.player = null;
    }
    
    // Clean up any existing video player
    if (window.videoPlayer) {
        try {
            // For video element, pause it
            if (window.videoPlayer.pause) {
                window.videoPlayer.pause();
            }
            
            // Remove the element
            const oldElement = window.videoPlayer;
            if (oldElement.parentNode) {
                oldElement.parentNode.removeChild(oldElement);
            }
            window.videoPlayer = null;
        } catch (e) {
            console.error("Error cleaning up video/image player:", e);
        }
    }
    
    // Ensure we have a video-wrapper
    let videoWrapper = videoContainer.querySelector('.video-wrapper');
    if (!videoWrapper) {
        videoContainer.innerHTML = `
            <div class="video-wrapper">
                <!-- Placeholder to maintain size while loading -->
            </div>
        `;
        videoWrapper = videoContainer.querySelector('.video-wrapper');
    }
    
    // Check if the path is a GIF file
    if (videoPath.toLowerCase().endsWith('.gif')) {
        if (videoWrapper) {
            // Create a new image element
            const img = new Image();
            
            // Set up load event handler
            img.onload = () => {
                // Once loaded, insert into the wrapper (but keep the wrapper itself)
                videoWrapper.innerHTML = ''; // Clear any previous content
                img.id = 'exercise-video';
                img.className = 'exercise-video';
                img.alt = 'Exercise demonstration';
                videoWrapper.appendChild(img);
                
                // Store reference to the image element
                window.videoPlayer = img;
            };
            
            // Set up error handler
            img.onerror = () => {
                console.error('Error loading GIF:', videoPath);
                videoWrapper.innerHTML = `
                    <div class="video-error">
                        <p>Error: Could not load file.</p>
                        <p>Path: ${videoPath}</p>
                    </div>
                `;
            };
            
            // Start loading the image
            img.src = videoPath;
        }
    } else {
        // For video files, create HTML5 video player
        if (videoWrapper) {
            videoWrapper.innerHTML = `
                <video id="exercise-video" class="exercise-video" ${autoStart ? 'autoplay' : ''} loop controls>
                    <source src="${videoPath}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
            
            // Get reference to the video element
            window.videoPlayer = document.getElementById('exercise-video');
            
            // Add event listeners for the video
            if (window.videoPlayer) {
                // Play the video when it's loaded if autoStart is true
                window.videoPlayer.addEventListener('loadedmetadata', () => {
                    if (autoStart) {
                        window.videoPlayer.play().catch(error => {
                            console.error('Error autostarting video:', error);
                            showNotification('Video autoplay failed. Click play to start.', 'warning');
                        });
                    }
                });
                
                // Error handling
                window.videoPlayer.addEventListener('error', () => {
                    console.error('Error loading video:', videoPath);
                    videoWrapper.innerHTML = `
                        <div class="video-error">
                            <p>Error: Could not load file.</p>
                            <p>Path: ${videoPath}</p>
                        </div>
                    `;
                });
            }
        }
    }
}

/**
 * Play video for a specific exercise index
 */
function playVideoForExercise(index, autoStart = false) {
    console.log(`Playing video for exercise ${index}, autoStart: ${autoStart}, workoutPaused: ${workoutPaused}`);
    
    // Always ensure workout is unpaused when playing a new exercise
    if (workoutPaused) {
        console.log("Resetting paused state while playing new exercise");
        workoutPaused = false;
        
        // Update the pause button text
        const pauseButton = document.getElementById('pause-button');
        if (pauseButton) {
            pauseButton.textContent = 'Pause';
            console.log("Updated pause button text to 'Pause'");
        } else {
            console.log("Could not find pause button to update text");
        }
    }
    
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
        
        playVideo(exercise.videoPath, autoStart);
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
        
        // Announce countdown for the last 3 seconds with improved timing
        if (currentExerciseTimeRemaining <= 3 && currentExerciseTimeRemaining > 0) {
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
    console.log(`Starting rest period. Workout active: ${workoutActive}, Current exercise index: ${currentExerciseIndex}, workoutPaused: ${workoutPaused}`);
    
    // Ensure workout is still active
    if (!workoutActive) {
        console.log("Workout not active, skipping rest period");
        return;
    }
    
    // IMPORTANT: Always ensure we're unpaused when starting a rest period
    if (workoutPaused) {
        console.log("Workout was paused, resetting state to unpaused");
        workoutPaused = false;
        
        // Update the pause button text explicitly
        const pauseButton = document.getElementById('pause-button');
        if (pauseButton) {
            pauseButton.textContent = 'Pause';
            console.log("Updated pause button text to 'Pause'");
        } else {
            console.log("WARNING: Could not find pause button to update text");
        }
    }
    
    // Cancel any active speech synthesis
    cancelSpeech();
    
    // Clear any existing timer
    if (window.restTimer) {
        clearInterval(window.restTimer);
        window.restTimer = null;
        console.log("Cleared rest timer");
    }
    
    // IMPORTANT: First deal with the video container and player
    // before doing any other operations
    const videoContainer = document.getElementById('video-container');
    
    // First, remove the video/image player from the global context
    if (window.videoPlayer) {
        try {
            // Pause video if it's a video element
            if (window.videoPlayer.pause) {
                window.videoPlayer.pause();
            }
            
            // Remove event listeners by cloning and replacing the element
            const oldElement = window.videoPlayer;
            if (oldElement.parentNode) {
                // Instead of replacing with clone, just remove the element
                // This keeps the wrapper intact
                oldElement.parentNode.removeChild(oldElement);
            }
            window.videoPlayer = null;
            console.log("Successfully cleaned up video/image player");
        } catch (e) {
            console.error("Error cleaning up video/image player:", e);
        }
    }
    
    // Keep the video-wrapper for consistent dimensions, but update its content
    const videoWrapper = videoContainer.querySelector('.video-wrapper');
    if (videoWrapper) {
        videoWrapper.innerHTML = `
            <div class="rest-placeholder">
                <div>
                    <h2>Rest Time</h2>
                    <p>Next exercise in <span id="rest-countdown">00:00</span></p>
                </div>
            </div>
        `;
    } else {
        // If no wrapper exists, create it with the rest placeholder
        videoContainer.innerHTML = `
            <div class="video-wrapper">
                <div class="rest-placeholder">
                    <div>
                        <h2>Rest Time</h2>
                        <p>Next exercise in <span id="rest-countdown">00:00</span></p>
                    </div>
                </div>
            </div>
        `;
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
    
    // Update the rest countdown display with the correct time
    const restCountdown = document.getElementById('rest-countdown');
    if (restCountdown) {
        restCountdown.textContent = formatTime(currentRestTimeRemaining);
    }
    
    // Ensure control buttons are visible
    document.getElementById('control-buttons').classList.add('show');
    
    // Show pause button, hide checkmark button during rest
    document.getElementById('pause-button').classList.remove('hide');
    document.getElementById('checkmark-button').classList.add('hide');
    
    // Double-check pause button text to be absolutely certain
    const pauseButton = document.getElementById('pause-button');
    if (pauseButton && pauseButton.textContent !== 'Pause') {
        pauseButton.textContent = 'Pause';
        console.log("Had to fix pause button text in startRestPeriod");
    }
    
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
        if (workoutPaused) {
            console.log("Rest timer paused, skipping update");
            return;
        }
        
        currentRestTimeRemaining--;
        
        // Debug rest timer state
        if (currentRestTimeRemaining % 5 === 0 || currentRestTimeRemaining <= 3) {
            console.log(`Rest timer update: ${currentRestTimeRemaining} seconds remaining`);
        }
        
        // Update UI
        timerValueElement.textContent = formatTime(currentRestTimeRemaining);
        const restCountdown = document.getElementById('rest-countdown');
        if (restCountdown) {
            restCountdown.textContent = formatTime(currentRestTimeRemaining);
        }
        
        // Announce countdown for the last 3 seconds with improved timing
        if (currentRestTimeRemaining <= 3 && currentRestTimeRemaining > 0) {
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
                // Ensure we're still unpaused before moving to the next exercise
                if (workoutPaused) {
                    console.log("WARNING: workoutPaused was set to true before next exercise - forcing to false");
                    workoutPaused = false;
                }
                
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
    // Add detailed logging to debug the issue
    console.log(`Skipping exercise: current index=${currentExerciseIndex}`);
    console.log(`Workout active: ${workoutActive}, Workout paused: ${workoutPaused}`);
    
    // Ensure workout is active
    if (!workoutActive) {
        console.log("Cannot skip: workout not active");
        return;
    }
    
    // Always ensure workout is unpaused when skipping
    if (workoutPaused) {
        console.log("Resetting paused state while skipping");
        workoutPaused = false;
        
        // Update the pause button text
        const pauseButton = document.getElementById('pause-button');
        if (pauseButton) {
            pauseButton.textContent = 'Pause';
            console.log("Updated pause button text to 'Pause'");
        } else {
            console.log("Could not find pause button to update text");
        }
    }
    
    // Cancel any active speech synthesis
    cancelSpeech();
    
    // Clear any active exercise timer
    if (window.exerciseTimer) {
        clearInterval(window.exerciseTimer);
        window.exerciseTimer = null;
        console.log("Cleared exercise timer");
    }

    // Clear any active speech timeout
    if (window.speechTimeout) {
        clearTimeout(window.speechTimeout);
        window.speechTimeout = null;
        console.log("Cleared speech timeout");
    }
    
    // Clear any active countdown timeout
    if (window.countdownTimeout) {
        clearTimeout(window.countdownTimeout);
        window.countdownTimeout = null;
        console.log("Cleared countdown timeout");
    }
    
    // Clean up the video/image player to prevent errors
    if (window.videoPlayer) {
        try {
            // For video element, pause it
            if (window.videoPlayer.pause) {
                window.videoPlayer.pause();
            }
            
            // Remove the element
            const oldElement = window.videoPlayer;
            if (oldElement.parentNode) {
                // Instead of replacing with clone, just remove the element
                // This keeps the wrapper intact
                oldElement.parentNode.removeChild(oldElement);
            }
            window.videoPlayer = null;
            console.log("Successfully cleaned up video/image player");
        } catch (e) {
            console.error("Error cleaning up video/image player:", e);
        }
    }
    
    // Check if there are more exercises to play
    if (currentExerciseIndex < workoutExercises.length - 1) {
        console.log(`Moving to next exercise: ${currentExerciseIndex + 1}`);
        // Skip rest period and go directly to next exercise
        playVideoForExercise(currentExerciseIndex + 1, true);
    } else {
        console.log("Reached end of workout, ending workout");
        // End workout if we're on the last exercise
        endWorkout();
    }
}

/**
 * Called when user completes a rep-based exercise or when a timed exercise finishes
 */
function completeExercise() {
    // Add detailed logging to debug the issue
    console.log(`Completing exercise: current index=${currentExerciseIndex}`);
    console.log(`Workout active: ${workoutActive}, Workout paused: ${workoutPaused}`);
    
    // Ensure workout is active
    if (!workoutActive) {
        console.log("Cannot complete: workout not active");
        return;
    }
    
    // Always ensure workout is unpaused when completing
    if (workoutPaused) {
        console.log("Resetting paused state while completing exercise");
        workoutPaused = false;
        
        // Update the pause button text
        const pauseButton = document.getElementById('pause-button');
        if (pauseButton) {
            pauseButton.textContent = 'Pause';
            console.log("Updated pause button text to 'Pause'");
        } else {
            console.log("Could not find pause button to update text");
        }
    }
    
    // Cancel any active speech synthesis
    cancelSpeech();
    
    // Clear any active exercise timer
    if (window.exerciseTimer) {
        clearInterval(window.exerciseTimer);
        window.exerciseTimer = null;
        console.log("Cleared exercise timer");
    }
    
    // Clear any active speech timeout
    if (window.speechTimeout) {
        clearTimeout(window.speechTimeout);
        window.speechTimeout = null;
        console.log("Cleared speech timeout");
    }
    
    // Clear any active countdown timeout
    if (window.countdownTimeout) {
        clearTimeout(window.countdownTimeout);
        window.countdownTimeout = null;
        console.log("Cleared countdown timeout");
    }
    
    // Clean up the video/image player to prevent errors
    if (window.videoPlayer) {
        try {
            // For video element, pause it
            if (window.videoPlayer.pause) {
                window.videoPlayer.pause();
            }
            
            // Remove the element
            const oldElement = window.videoPlayer;
            if (oldElement.parentNode) {
                // Instead of replacing with clone, just remove the element
                // This keeps the wrapper intact
                oldElement.parentNode.removeChild(oldElement);
            }
            window.videoPlayer = null;
            console.log("Successfully cleaned up video/image player");
        } catch (e) {
            console.error("Error cleaning up video/image player:", e);
        }
    }
    
    // Reset timer display immediately
    const timerElement = document.getElementById('timer');
    timerElement.classList.add('hide');
    timerElement.classList.remove('show');
    
    // Check if there are more exercises to play
    if (currentExerciseIndex < workoutExercises.length - 1) {
        console.log(`Moving to next exercise: ${currentExerciseIndex + 1}`);
        // Start rest period before next exercise
        if (isRestEnabled()) {
            startRestPeriod();
        } else {
            // Skip rest period and go directly to next exercise
            playVideoForExercise(currentExerciseIndex + 1, true);
        }
    } else {
        console.log("Reached end of workout, ending workout");
        // End workout if we're on the last exercise
        endWorkout();
    }
}

/**
 * Pause/unpause the workout
 */
function pauseWorkout() {
    const pauseButton = document.getElementById('pause-button');
    
    // Add debugging
    console.log(`pauseWorkout called. Current state: workoutPaused=${workoutPaused}, workoutActive=${workoutActive}`);
    console.log(`Current timers: exerciseTimer=${window.exerciseTimer !== null}, restTimer=${window.restTimer !== null}, countdownActive=${countdownTimeout !== null}`);
    
    // Check if the pause button exists - this is critical
    if (!pauseButton) {
        console.error("Pause button not found in the DOM! This could be why pause isn't working.");
        return; // Exit early to prevent errors
    }
    
    if (workoutPaused) {
        // Resuming from pause
        console.log("Resuming workout from pause");
        workoutPaused = false;
        pauseButton.textContent = 'Pause';
        
        // Cancel any speech and announce resuming
        cancelSpeech();
        speakText("Resuming workout");
        
        // Check if we're in the initial countdown phase
        const startCountdownElement = document.getElementById('start-countdown');
        if (startCountdownElement && document.querySelector('.player-placeholder')) {
            console.log("Resuming initial countdown");
            
            // Extract the current countdown value
            let currentCountValue = parseInt(startCountdownElement.textContent) || 0;
            console.log("Current countdown value:", currentCountValue);
            
            // Create a recursive countdown function that properly decrements
            const continueCountdown = () => {
                // If workout is paused again, don't continue
                if (workoutPaused) {
                    console.log("Countdown paused at", currentCountValue);
                    return;
                }
                
                // Announce current number
                speakText(currentCountValue.toString());
                
                // Update the display
                startCountdownElement.textContent = currentCountValue;
                
                // Check if we should continue or finish
                if (currentCountValue > 1) {
                    // Decrement the counter for the next iteration
                    currentCountValue--;
                    
                    // Schedule the next number announcement
                    countdownTimeout = setTimeout(() => {
                        continueCountdown();
                    }, 1500);
                } else {
                    // Countdown finished after "1", start the exercise without announcing "0"
                    countdownTimeout = setTimeout(() => {
                        playVideoForExercise(0, true);
                    }, 1000);
                }
            };
            
            // Start the continued countdown
            continueCountdown();
            return;
        }
        
        // Resume appropriate timer based on workout state
        if (window.exerciseTimer === null && window.restTimer === null) {
            // If both timers are null, determine which one to restart
            if (document.querySelector('.rest-placeholder')) {
                // We're in a rest period
                console.log("Resuming rest timer after pause");
                resumeRestTimer();
            } else {
                // We're in an exercise
                console.log("Resuming exercise timer after pause");
                resumeExerciseTimer();
            }
        } else {
            console.log("Timers already active, no need to resume");
        }
        
        // Resume HTML5 video player if it exists and is a video element
        if (window.videoPlayer && window.videoPlayer.play) {
            window.videoPlayer.play().catch(error => {
                console.error('Error resuming video:', error);
            });
        }
    } else {
        // Pausing
        console.log("Pausing workout");
        workoutPaused = true;
        pauseButton.textContent = 'Resume';
        
        // Cancel any speech and announce pause
        cancelSpeech();
        speakText("Workout paused");
        
        // If we're in the initial countdown, clear the timeout
        if (countdownTimeout) {
            console.log("Pausing initial countdown");
            clearTimeout(countdownTimeout);
        }
        
        // Pause HTML5 video player if it exists and is a video element
        if (window.videoPlayer && window.videoPlayer.pause) {
            window.videoPlayer.pause();
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
        
        // Announce countdown for the last 3 seconds with improved timing
        if (currentExerciseTimeRemaining <= 3 && currentExerciseTimeRemaining > 0) {
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
    
    // Ensure control buttons are visible
    document.getElementById('control-buttons').classList.add('show');
    
    // Show pause button, hide checkmark button during rest
    document.getElementById('pause-button').classList.remove('hide');
    document.getElementById('checkmark-button').classList.add('hide');
    
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
        
        // Announce countdown for the last 3 seconds with improved timing
        if (currentRestTimeRemaining <= 3 && currentRestTimeRemaining > 0) {
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
    
    // Clear any countdown timeout
    if (countdownTimeout) {
        clearTimeout(countdownTimeout);
        countdownTimeout = null;
    }
    
    // Clean up the video/image player to prevent errors
    if (window.videoPlayer) {
        try {
            // Pause video if it's a video element
            if (window.videoPlayer.pause) {
                window.videoPlayer.pause();
            }
            
            // Remove the element without replacing it, to keep the wrapper intact
            const oldElement = window.videoPlayer;
            if (oldElement.parentNode) {
                oldElement.parentNode.removeChild(oldElement);
            }
            window.videoPlayer = null;
        } catch (e) {
            console.error("Error cleaning up video/image player:", e);
        }
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
    const videoWrapper = videoContainer.querySelector('.video-wrapper');
    
    if (videoWrapper) {
        // Keep the wrapper, just update its content
        videoWrapper.innerHTML = `
            <div class="player-placeholder">
                <div>
                    <h2>WORKOUT COMPLETE!</h2>
                    <p>Great job!</p>
                </div>
            </div>
        `;
    } else {
        // If no wrapper exists, create a new one
        videoContainer.innerHTML = `
            <div class="video-wrapper">
                <div class="player-placeholder">
                    <div>
                        <h2>WORKOUT COMPLETE!</h2>
                        <p>Great job!</p>
                    </div>
                </div>
            </div>
        `;
    }
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
    }
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
        
        // Show pause button, hide checkmark button during countdown
        document.getElementById('pause-button').classList.remove('hide');
        document.getElementById('checkmark-button').classList.add('hide');
        
        // Reset any existing timers
        if (window.exerciseTimer) {
            clearInterval(window.exerciseTimer);
            window.exerciseTimer = null;
        }
        
        if (window.restTimer) {
            clearInterval(window.restTimer);
            window.restTimer = null;
        }
        
        // Clear any existing countdown timeout
        if (countdownTimeout) {
            clearTimeout(countdownTimeout);
            countdownTimeout = null;
        }
        
        // Clean up any existing video player
        if (window.videoPlayer) {
            try {
                // Pause video if it's a video element
                if (window.videoPlayer.pause) {
                    window.videoPlayer.pause();
                }
                
                // Remove the element without replacing
                if (window.videoPlayer.parentNode) {
                    window.videoPlayer.parentNode.removeChild(window.videoPlayer);
                }
                window.videoPlayer = null;
            } catch (e) {
                console.error("Error cleaning up existing video player:", e);
            }
        }
        
        // Announce workout beginning with countdown
        speakText("Starting workout");
        
        // Show countdown in the video container
        const videoContainer = document.getElementById('video-container');
        const videoWrapper = videoContainer.querySelector('.video-wrapper');
        
        if (videoWrapper) {
            // Keep the wrapper, just update its content
            videoWrapper.innerHTML = `
                <div class="player-placeholder">
                    <div>
                        <h2>GET READY!</h2>
                        <div id="start-countdown" class="rest-countdown">5</div>
                    </div>
                </div>
            `;
        } else {
            // If no wrapper exists, create a new one
            videoContainer.innerHTML = `
                <div class="video-wrapper">
                    <div class="player-placeholder">
                        <div>
                            <h2>GET READY!</h2>
                            <div id="start-countdown" class="rest-countdown">5</div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        // Create a countdown before starting the first exercise with longer duration
        let countdownValue = 5; // Start from 5 instead of 3
        
        // Update the countdown display initially
        const countdownElement = document.getElementById('start-countdown');
        if (countdownElement) {
            countdownElement.textContent = countdownValue;
        }
        
        const announceNextNumber = () => {
            // If workout is paused, don't continue the countdown
            if (workoutPaused) {
                console.log("Countdown paused at", countdownValue);
                return;
            }
            
            // Announce current number
            speakText(countdownValue.toString());
            
            // Update the countdown display
            if (countdownElement) {
                countdownElement.textContent = countdownValue;
            }
            
            // Check if we should continue counting down or start the workout
            if (countdownValue > 1) {
                // Decrement counter for next iteration
                countdownValue--;
                
                // Schedule next announcement with sufficient delay for speech to complete
                // Wait 1.5 seconds between announcements to ensure speech completes
                countdownTimeout = setTimeout(announceNextNumber, 1500);
            } else {
                // Start first exercise after announcing "1" - no need to announce "0"
                countdownTimeout = setTimeout(() => {
                    playVideoForExercise(0, true);
                }, 1000);
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
 * Check if rest periods are enabled for the workout
 * @returns {boolean} True if rest periods are enabled
 */
function isRestEnabled() {
    // Get the rest duration element
    const restDurationElement = document.getElementById('rest-duration');
    
    // If the element exists and has a positive value, rest is enabled
    if (restDurationElement) {
        const restDuration = parseInt(restDurationElement.value) || 0;
        return restDuration > 0;
    }
    
    // Default to enabled if no element is found
    return true;
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
        
        // Clear any countdown timeout when navigating away
        if (countdownTimeout) {
            clearTimeout(countdownTimeout);
            countdownTimeout = null;
            console.log('Cleared countdown timeout due to page visibility change');
        }
        
        // Pause workout if it's active and not already paused
        if (workoutActive && !workoutPaused) {
            // Don't announce the pause since we're in background
            workoutPaused = true;
            
            // Update pause button text for when user returns
            const pauseButton = document.getElementById('pause-button');
            if (pauseButton) {
                pauseButton.textContent = 'Resume';
            }
            
            // Pause video player if it exists
            if (window.videoPlayer) {
                window.videoPlayer.pause();
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
window.isRestEnabled = isRestEnabled;
window.toggleSpeechRecognition = function() {
    // Import the isMobileDevice function from audioCommands.js
    const { isMobileDevice } = window.audioCommands || {};
    
    // Check if this is a mobile device - if so, don't allow toggling
    if (isMobileDevice && isMobileDevice()) {
        console.log("Mobile device detected - voice commands not available");
        // Use the imported showNotification if available
        if (window.audioCommands && window.audioCommands.showNotification) {
            window.audioCommands.showNotification('Voice commands are not available on mobile devices', 'info');
        }
        return;
    }
    
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