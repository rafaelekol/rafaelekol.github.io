// audioCommands.js - Voice commands and speech recognition functionality

// Global state variables for speech recognition
let speechRecognitionActive = false;
let recognitionInstance = null;

/**
 * Speech synthesis for voice commands
 */
const speakText = (text) => {
    if ('speechSynthesis' in window) {
        // Always cancel previous speech first
        window.speechSynthesis.cancel();
        
        // Create a small delay to ensure the cancel has taken effect
        setTimeout(() => {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 1.0;
            utterance.pitch = 1.0;
            utterance.voice = window.speechSynthesis.getVoices()[1];
            
            // Store the utterance in window object to keep track of speaking state
            window.currentUtterance = utterance;
            
            // Add event listener to track when speech ends
            utterance.onend = function() {
                window.isSpeaking = false;
            };
            
            // Set speaking state to true
            window.isSpeaking = true;
            
            window.speechSynthesis.speak(utterance);
        }, 50);
    } else {
        console.warn("Speech synthesis not supported in this browser");
    }
};

/**
 * Cancel any active speech synthesis
 */
const cancelSpeech = () => {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        window.isSpeaking = false;
    }
};

/**
 * Process voice commands
 */
function processVoiceCommand(command, workoutCallbacks) {
    console.log('Processing voice command:', command);
    
    const { 
        workoutActive, workoutPaused, currentExerciseIndex, workoutExercises,
        startWorkout, skipExercise, pauseWorkout, completeExercise, endWorkout
    } = workoutCallbacks;
    
    // Start workout commands
    if ((command.includes('start workout') || 
         command.includes('begin workout') ||
         command.includes('let\'s go') ||
         command.includes('let\'s start') ||
         command.includes('begin exercise') ||
         command.includes('start exercises')) && !workoutActive) {
        startWorkout();
        speakText('Starting workout');
        showNotification('Command: Start workout', 'voice');
        return true;
    }
    
    // Skip commands
    if (command.includes('skip') || 
        command.includes('next') || 
        command.includes('next exercise')) {
        skipExercise();
        
        // Announce the new exercise with duration/reps after a short delay
        setTimeout(() => {
            announceCurrentExercise(workoutExercises, currentExerciseIndex + 1); // +1 because we just skipped
        }, 1000);
        
        speakText('Skipping to next exercise');
        showNotification('Command: Skip exercise', 'voice');
        return true;
    }
    
    // Pause commands
    if ((command.includes('pause') || 
         command.includes('stop') || 
         command.includes('wait') ||
         command.includes('hold on')) && !workoutPaused) {
        pauseWorkout();
        speakText('Workout paused');
        showNotification('Command: Pause workout', 'voice');
        return true;
    }
    
    // Resume commands
    if ((command.includes('resume') || 
         command.includes('play') || 
         command.includes('start') ||
         command.includes('continue') ||
         command.includes('go')) && workoutPaused) {
        pauseWorkout(); // This toggles the pause state
        speakText('Resuming workout');
        showNotification('Command: Resume workout', 'voice');
        return true;
    }
    
    // Complete commands (for rep-based exercises)
    if (command.includes('done') || 
        command.includes('complete') || 
        command.includes('finished') ||
        command.includes('completed')) {
        if (workoutActive && currentExerciseIndex >= 0) {
            const exercise = workoutExercises[currentExerciseIndex];
            if (exercise && exercise.durationType !== 'seconds') {
                completeExercise();
                speakText('Exercise completed');
                
                // Announce the next exercise after a brief delay
                setTimeout(() => {
                    announceCurrentExercise(workoutExercises, currentExerciseIndex + 1); // +1 because we just completed one
                }, 1000);
                
                showNotification('Command: Complete exercise', 'voice');
                return true;
            } else {
                speakText('Cannot complete timed exercise, use skip instead');
                showNotification('Cannot complete timed exercise', 'warning');
                return true;
            }
        }
        return false;
    }
    
    // End workout commands
    if (command.includes('end workout') || 
        command.includes('finish workout') ||
        command.includes('stop workout') ||
        command.includes('quit workout')) {
        endWorkout();
        speakText('Ending workout');
        showNotification('Command: End workout', 'voice');
        return true;
    }
    
    // Help command
    if (command.includes('help') || 
        command.includes('commands') || 
        command.includes('what can I say')) {
        speakText('Available commands: start workout, skip, pause, resume, done, end workout, and help');
        showNotification('Showing available commands', 'voice');
        toggleCommandList();
        return true;
    }
    
    // No valid command found
    showNotification(`Command not recognized: "${command}"`, 'warning');
    return false;
}

/**
 * Announce current exercise with duration or repetition details
 */
function announceCurrentExercise(exercises, index) {
    // Check if the index is valid
    if (exercises && index >= 0 && index < exercises.length) {
        const exercise = exercises[index];
        let announcement = '';
        
        if (exercise.durationType === 'seconds') {
            announcement = `${exercise.title}, ${exercise.duration} seconds. You'll hear a countdown for the last 5 seconds.`;
        } else {
            announcement = `${exercise.title}, ${exercise.duration} repetitions. Complete at your own pace.`;
        }
        
        speakText(announcement);
        showNotification(`Now: ${exercise.title} (${exercise.duration} ${exercise.durationType})`, 'voice');
    }
}

/**
 * Setup speech recognition for voice commands
 */
function setupSpeechRecognition(workoutCallbacks) {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        console.warn("Speech recognition not supported in this browser");
        showNotification("Speech recognition not supported in this browser", "error");
        return null;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    // Create a modified callbacks object with wrapped functions to handle announcements
    const wrappedCallbacks = { ...workoutCallbacks };
    
    // Wrap the startWorkout function to announce the first exercise
    const originalStartWorkout = workoutCallbacks.startWorkout;
    wrappedCallbacks.startWorkout = function() {
        originalStartWorkout();
        
        // Announce the first exercise after a brief delay
        setTimeout(() => {
            announceCurrentExercise(workoutCallbacks.workoutExercises, 0); // Start with the first exercise
        }, 1000);
    };
    
    // Configure recognition settings
    recognition.continuous = true;
    recognition.interimResults = true; // Changed to true to get feedback sooner
    recognition.lang = 'en-US';
    recognition.maxAlternatives = 3; // Get multiple possible interpretations
    
    // Attempt to access microphone and show level indicator
    tryAccessMicrophone();
    
    recognition.onstart = function() {
        console.log("Voice recognition started. Try speaking a command.");
        speechRecognitionActive = true;
        updateVoiceIndicator(true);
        showNotification("Voice recognition listening...", "voice-active");
        
        // Start audio level visualization if we have microphone access
        startAudioLevelVisualization();
    };
    
    recognition.onresult = function(event) {
        const last = event.results.length - 1;
        
        // Check if this is a final result
        if (event.results[last].isFinal) {
            const command = event.results[last][0].transcript.trim().toLowerCase();
            console.log('Voice command recognized:', command);
            
            // Process the command using wrapped callbacks
            const commandProcessed = processVoiceCommand(command, wrappedCallbacks);
            
            if (!commandProcessed) {
                console.log('Command not recognized:', command);
            }
        } else {
            // Show intermediate results
            const interimTranscript = event.results[last][0].transcript.trim().toLowerCase();
            updateInterimTranscript(interimTranscript);
        }
    };
    
    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
        speechRecognitionActive = false;
        updateVoiceIndicator(false);
        
        // Show error notification
        if (event.error === 'no-speech') {
            showNotification("No speech detected - check your microphone", "warning");
            // Try automatic microphone check
            checkMicrophoneStatus();
        } else if (event.error === 'audio-capture') {
            showNotification("No microphone detected - enable your microphone", "error");
            showMicrophoneInstructions();
        } else if (event.error === 'not-allowed') {
            showNotification("Microphone access denied - check permissions", "error");
            showMicrophoneInstructions();
        } else if (event.error === 'network') {
            showNotification("Network error with speech recognition", "error");
        } else if (event.error === 'aborted') {
            showNotification("Speech recognition aborted", "warning");
        } else {
            showNotification(`Speech recognition error: ${event.error}`, "error");
        }
        
        // Try to restart recognition after error
        setTimeout(() => {
            if (!speechRecognitionActive && recognitionInstance === recognition) {
                try {
                    recognition.start();
                } catch (e) {
                    console.error('Failed to restart speech recognition:', e);
                }
            }
        }, 2000); // Increased delay to give more time
    };
    
    recognition.onend = function() {
        console.log("Voice recognition ended");
        speechRecognitionActive = false;
        updateVoiceIndicator(false);
        
        // Clear any interim transcript
        clearInterimTranscript();
        
        // Stop audio level visualization
        stopAudioLevelVisualization();
        
        // Restart recognition if it ends unexpectedly while workout is active
        if ((workoutCallbacks.workoutActive || document.querySelector('.voice-toggle-btn.active')) && recognitionInstance === recognition) {
            setTimeout(() => {
                if (!speechRecognitionActive) {
                    try {
                        recognition.start();
                        console.log("Voice recognition restarted automatically");
                    } catch (e) {
                        console.error('Failed to restart speech recognition:', e);
                        showNotification("Failed to restart voice recognition", "error");
                    }
                }
            }, 1000);
        }
    };
    
    // Start recognition
    try {
        recognition.start();
    } catch (e) {
        console.error('Failed to start speech recognition:', e);
        showNotification("Failed to start voice recognition", "error");
        return null;
    }
    
    // Add voice command indicator to UI
    addVoiceCommandIndicator();
    
    return recognition;
}

/**
 * Show a temporary notification
 */
function showNotification(message, type = 'info') {
    // Create notification container if it doesn't exist
    let notificationContainer = document.getElementById('notification-container');
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.id = 'notification-container';
        document.body.appendChild(notificationContainer);
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    // Add icon based on type
    let iconSrc = 'assets/notification_36dp.svg';
    if (type === 'success') iconSrc = 'assets/success_36dp.svg';
    if (type === 'warning') iconSrc = 'assets/warning_36dp.svg';
    if (type === 'error') iconSrc = 'assets/error_36dp.svg';
    if (type === 'voice' || type === 'voice-active') iconSrc = 'assets/mic_simple_36dp.svg';
    
    notification.innerHTML = `
        <div class="notification-icon">
            <img src="${iconSrc}" alt="${type}" width="20" height="20">
        </div>
        <div class="notification-message">${message}</div>
    `;
    
    // Add to container
    notificationContainer.appendChild(notification);
    
    // Show with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Determine display duration based on notification type
    const displayDuration = type === 'voice-active' ? 1500 : 3000;
    
    // Remove after delay
    setTimeout(() => {
        notification.classList.remove('show');
        
        // Remove element after animation
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, displayDuration);
}

/**
 * Try to access the microphone to ensure permissions are granted
 */
function tryAccessMicrophone() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function(stream) {
                console.log("Microphone access granted");
                window.microphoneStream = stream;
                
                // Start audio level visualization
                startAudioLevelVisualization();
                
                // Add a small indicator to show microphone is working
                addMicrophoneLevelIndicator();
            })
            .catch(function(err) {
                console.error("Error accessing microphone:", err);
                showNotification("Microphone access error - check browser settings", "error");
                showMicrophoneInstructions();
            });
    } else {
        console.warn("getUserMedia not supported in this browser");
        showNotification("Microphone access not supported in this browser", "error");
    }
}

/**
 * Add a microphone level indicator to show audio input activity
 */
function addMicrophoneLevelIndicator() {
    const voiceIndicator = document.getElementById('voice-indicator');
    if (voiceIndicator) {
        // Check if level indicator already exists
        if (!document.getElementById('mic-level-indicator')) {
            const levelContainer = document.createElement('div');
            levelContainer.id = 'mic-level-container';
            levelContainer.className = 'mic-level-container';
            
            const levelIndicator = document.createElement('div');
            levelIndicator.id = 'mic-level-indicator';
            levelIndicator.className = 'mic-level-indicator';
            
            levelContainer.appendChild(levelIndicator);
            voiceIndicator.appendChild(levelContainer);
        }
    }
}

/**
 * Start audio level visualization
 */
function startAudioLevelVisualization() {
    // If we already have a running visualization, stop it first
    stopAudioLevelVisualization();
    
    if (!window.microphoneStream) return;
    
    // Create audio context
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    
    // Connect microphone stream to analyser
    const source = audioContext.createMediaStreamSource(window.microphoneStream);
    source.connect(analyser);
    
    // Create data array for analyser
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    
    // Store references for cleanup
    window.audioAnalyser = {
        context: audioContext,
        analyser: analyser,
        source: source,
        dataArray: dataArray,
        animationFrame: null
    };
    
    // Start visualization loop
    updateMicrophoneLevel();
}

/**
 * Update microphone level indicator
 */
function updateMicrophoneLevel() {
    if (!window.audioAnalyser) return;
    
    const { analyser, dataArray } = window.audioAnalyser;
    analyser.getByteFrequencyData(dataArray);
    
    // Calculate average level
    let sum = 0;
    for (let i = 0; i < dataArray.length; i++) {
        sum += dataArray[i];
    }
    const average = sum / dataArray.length;
    
    // Normalize to 0-100%
    const level = Math.min(100, average * 2); // Multiply by 2 to make it more visible
    
    // Update level indicator
    const levelIndicator = document.getElementById('mic-level-indicator');
    if (levelIndicator) {
        levelIndicator.style.width = `${level}%`;
        
        // Change color based on level
        if (level < 10) {
            levelIndicator.style.backgroundColor = '#dc3545'; // Red for very low
        } else if (level < 30) {
            levelIndicator.style.backgroundColor = '#ffc107'; // Yellow for low
        } else {
            levelIndicator.style.backgroundColor = '#28a745'; // Green for good
        }
    }
    
    // Continue animation loop
    window.audioAnalyser.animationFrame = requestAnimationFrame(updateMicrophoneLevel);
}

/**
 * Stop audio level visualization
 */
function stopAudioLevelVisualization() {
    if (window.audioAnalyser) {
        if (window.audioAnalyser.animationFrame) {
            cancelAnimationFrame(window.audioAnalyser.animationFrame);
        }
        if (window.audioAnalyser.source) {
            window.audioAnalyser.source.disconnect();
        }
        if (window.audioAnalyser.context && window.audioAnalyser.context.state !== 'closed') {
            window.audioAnalyser.context.close();
        }
        window.audioAnalyser = null;
    }
}

/**
 * Show instructions for enabling microphone access
 */
function showMicrophoneInstructions() {
    // Create and show a modal with instructions
    const modal = document.createElement('div');
    modal.className = 'mic-instructions-modal';
    modal.innerHTML = `
        <div class="mic-instructions-content">
            <h3>Microphone Access Required</h3>
            <p>Voice commands require microphone access. Please follow these steps:</p>
            <ol>
                <li>Click the lock or site settings icon in your browser's address bar</li>
                <li>Ensure microphone access is set to "Allow"</li>
                <li>Refresh the page after changing permissions</li>
            </ol>
            <p>If you continue to have issues:</p>
            <ul>
                <li>Make sure your microphone is properly connected</li>
                <li>Check that no other application is using your microphone</li>
                <li>Try using Chrome or Edge browsers for best compatibility</li>
            </ul>
            <button id="close-mic-instructions">Close</button>
            <button id="refresh-page">Refresh Page</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners for buttons
    document.getElementById('close-mic-instructions').addEventListener('click', function() {
        modal.remove();
    });
    
    document.getElementById('refresh-page').addEventListener('click', function() {
        window.location.reload();
    });
}

/**
 * Check microphone status and try to recover
 */
function checkMicrophoneStatus() {
    // If we don't have access to the stream, try to get it again
    if (!window.microphoneStream) {
        tryAccessMicrophone();
        return;
    }
    
    // Check if the microphone is active and has tracks
    const audioTracks = window.microphoneStream.getAudioTracks();
    if (audioTracks.length === 0) {
        console.warn("No audio tracks found in microphone stream");
        showNotification("No microphone tracks detected", "error");
        return;
    }
    
    // Check if the main audio track is enabled and active
    const audioTrack = audioTracks[0];
    if (!audioTrack.enabled) {
        console.warn("Audio track is disabled");
        audioTrack.enabled = true;
    }
    
    if (!audioTrack.readyState === 'live') {
        console.warn("Audio track is not live");
    }
    
    // Try restarting the audio level visualization
    startAudioLevelVisualization();
}

/**
 * Update the interim transcript display 
 */
function updateInterimTranscript(text) {
    let interimElement = document.getElementById('interim-transcript');
    
    if (!interimElement) {
        // Create interim transcript element if it doesn't exist
        interimElement = document.createElement('div');
        interimElement.id = 'interim-transcript';
        interimElement.className = 'interim-transcript';
        
        document.body.appendChild(interimElement);
    }
    
    if (text) {
        interimElement.textContent = `Listening: ${text}`;
        interimElement.classList.add('visible');
        
        // Auto-hide after 3 seconds of no updates
        clearTimeout(window.interimTimeout);
        window.interimTimeout = setTimeout(() => {
            clearInterimTranscript();
        }, 3000);
    }
}

/**
 * Clear the interim transcript display
 */
function clearInterimTranscript() {
    const interimElement = document.getElementById('interim-transcript');
    if (interimElement) {
        interimElement.classList.remove('visible');
    }
    clearTimeout(window.interimTimeout);
}

/**
 * Add voice command indicator to UI
 */
function addVoiceCommandIndicator() {
    const container = document.querySelector('.container');
    
    // Create the voice indicator if it doesn't exist
    if (!document.getElementById('voice-indicator')) {
        const indicator = document.createElement('div');
        indicator.id = 'voice-indicator';
        indicator.className = 'voice-indicator collapsed';
        
        // Create mobile-only icon container
        const iconContainer = document.createElement('div');
        iconContainer.className = 'voice-icon-container';
        
        // Create mic icon element with SVG icon instead of emoji
        const micIcon = document.createElement('div');
        micIcon.className = 'voice-icon';
        micIcon.innerHTML = `<img src="assets/mic_simple_36dp.svg" alt="Microphone" width="24" height="24">`;
        iconContainer.appendChild(micIcon);
        
        // Create status label (for mobile view)
        const statusLabel = document.createElement('div');
        statusLabel.className = 'voice-status-label';
        statusLabel.textContent = 'Tap to expand';
        iconContainer.appendChild(statusLabel);
        
        // Add mic level container directly to the icon container for better layout
        const micLevelContainer = document.createElement('div');
        micLevelContainer.className = 'mic-level-container';
        
        const micLevelIndicator = document.createElement('div');
        micLevelIndicator.id = 'mic-level-indicator';
        micLevelIndicator.className = 'mic-level-indicator';
        
        micLevelContainer.appendChild(micLevelIndicator);
        iconContainer.appendChild(micLevelContainer);
        
        // Create toggle button
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Voice Commands: Off';
        toggleButton.className = 'voice-toggle-btn';
        toggleButton.onclick = toggleSpeechRecognition;
        
        // Create microphone test button
        const testMicButton = document.createElement('button');
        testMicButton.textContent = 'Test Mic';
        testMicButton.className = 'mic-test-btn';
        testMicButton.onclick = testMicrophone;
        
        // Create help button to show available commands
        const helpButton = document.createElement('button');
        helpButton.textContent = 'Show Commands';
        helpButton.className = 'voice-help-btn';
        helpButton.onclick = toggleCommandList;
        
        // Create commands list (initially hidden)
        const commandList = document.createElement('div');
        commandList.id = 'voice-commands-list';
        commandList.className = 'voice-commands-list hidden';
        commandList.innerHTML = `
            <h4>Available Voice Commands</h4>
            <ul>
                <li><strong>Start/Begin:</strong> Start the workout sequence</li>
                <li><strong>Skip/Next:</strong> Skip to next exercise</li>
                <li><strong>Pause/Stop/Wait:</strong> Pause the workout</li>
                <li><strong>Resume/Play/Continue/Go:</strong> Resume the workout</li>
                <li><strong>Done/Complete/Finished:</strong> Complete the current exercise (for rep-based exercises)</li>
                <li><strong>End Workout/Finish Workout:</strong> End the entire workout</li>
                <li><strong>Help/Commands:</strong> List available commands</li>
            </ul>
            <div class="voice-tips">
                <h4>Voice Recognition Tips</h4>
                <ul>
                    <li>Speak clearly and directly toward your microphone</li>
                    <li>Reduce background noise when possible</li>
                    <li>Use short, simple commands for best results</li>
                    <li>If commands aren't recognized, try speaking slightly louder</li>
                </ul>
            </div>
        `;
        
        // Add elements to indicator
        indicator.appendChild(iconContainer);
        indicator.appendChild(toggleButton);
        indicator.appendChild(testMicButton);
        indicator.appendChild(helpButton);
        indicator.appendChild(commandList);
        
        // Add indicator to the page
        container.insertBefore(indicator, container.firstChild);
        
        // Add click event for mobile collapse/expand
        indicator.addEventListener('click', function(e) {
            // Only toggle if we click directly on the indicator or icon container
            // but not when clicking on buttons or command list
            const isDirectClick = 
                e.target === indicator || 
                e.target === iconContainer || 
                e.target === micIcon ||
                e.target.tagName === 'svg' ||
                e.target.tagName === 'path' ||
                e.target === statusLabel;
                
            if (isDirectClick && window.innerWidth <= 480) {
                indicator.classList.toggle('collapsed');
                
                // Update status label text
                if (statusLabel) {
                    statusLabel.textContent = indicator.classList.contains('collapsed') ? 
                        'Tap to expand' : 'Tap to collapse';
                }
            }
        });
        
        // Update icon when voice recognition status changes
        updateVoiceIcon(false);
    }
}

/**
 * Test microphone functionality
 */
function testMicrophone() {
    // First check if we have microphone access
    if (!window.microphoneStream) {
        tryAccessMicrophone();
        showNotification("Attempting to access microphone...", "info");
        return;
    }
    
    // Show test interface
    const testDialog = document.createElement('div');
    testDialog.className = 'mic-test-dialog';
    testDialog.innerHTML = `
        <div class="mic-test-content">
            <h3>Microphone Test</h3>
            <p>Speak into your microphone to test if it's working.</p>
            
            <div class="mic-test-visualizer">
                <div class="mic-test-level-container">
                    <div class="mic-test-level-indicator"></div>
                </div>
                <div class="mic-test-status">Listening...</div>
            </div>
            
            <div class="mic-test-transcript"></div>
            
            <button class="mic-test-close">Close</button>
        </div>
    `;
    
    document.body.appendChild(testDialog);
    
    // Set up test recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const testRecognition = new SpeechRecognition();
    testRecognition.continuous = true;
    testRecognition.interimResults = true;
    
    testRecognition.onresult = function(event) {
        const transcript = Array.from(event.results)
            .map(result => result[0].transcript)
            .join('');
        
        document.querySelector('.mic-test-transcript').textContent = transcript;
        document.querySelector('.mic-test-status').textContent = 'Microphone working!';
        document.querySelector('.mic-test-status').style.color = '#28a745';
    };
    
    testRecognition.onerror = function(event) {
        document.querySelector('.mic-test-status').textContent = `Error: ${event.error}`;
        document.querySelector('.mic-test-status').style.color = '#dc3545';
    };
    
    // Start the test
    testRecognition.start();
    
    // Set up audio visualization
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    
    const source = audioContext.createMediaStreamSource(window.microphoneStream);
    source.connect(analyser);
    
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    
    function updateTestLevel() {
        if (!document.querySelector('.mic-test-level-indicator')) return;
        
        analyser.getByteFrequencyData(dataArray);
        
        // Calculate average level
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i];
        }
        const average = sum / dataArray.length;
        
        // Normalize to 0-100%
        const level = Math.min(100, average * 2);
        
        // Update level indicator
        const indicator = document.querySelector('.mic-test-level-indicator');
        indicator.style.width = `${level}%`;
        
        // Change color based on level
        if (level < 10) {
            indicator.style.backgroundColor = '#dc3545';
        } else if (level < 30) {
            indicator.style.backgroundColor = '#ffc107';
        } else {
            indicator.style.backgroundColor = '#28a745';
        }
        
        // Continue animation loop
        window.testAnimationFrame = requestAnimationFrame(updateTestLevel);
    }
    
    // Start visualization
    updateTestLevel();
    
    // Close button functionality
    document.querySelector('.mic-test-close').addEventListener('click', function() {
        testRecognition.stop();
        cancelAnimationFrame(window.testAnimationFrame);
        source.disconnect();
        audioContext.close();
        testDialog.remove();
    });
}

/**
 * Toggle the command list visibility
 */
function toggleCommandList() {
    const commandList = document.getElementById('voice-commands-list');
    if (commandList) {
        commandList.classList.toggle('hidden');
        
        // Update button text
        const helpButton = document.querySelector('.voice-help-btn');
        if (helpButton) {
            helpButton.textContent = commandList.classList.contains('hidden') ? 
                'Show Commands' : 'Hide Commands';
        }
    }
}

/**
 * Update voice indicator to show if voice recognition is active
 */
function updateVoiceIndicator(active) {
    const toggleButton = document.querySelector('.voice-toggle-btn');
    if (toggleButton) {
        toggleButton.textContent = active ? 'Voice Commands: On' : 'Voice Commands: Off';
        if (active) {
            toggleButton.classList.add('active');
        } else {
            toggleButton.classList.remove('active');
        }
    }
    
    // Update mobile icon
    updateVoiceIcon(active);
}

/**
 * Update voice icon for mobile view
 */
function updateVoiceIcon(active) {
    const voiceIcon = document.querySelector('.voice-icon');
    if (voiceIcon) {
        if (active) {
            voiceIcon.classList.add('active');
            voiceIcon.innerHTML = `<img src="assets/mic_active_36dp.svg" alt="Microphone Active" width="24" height="24">`;
        } else {
            voiceIcon.classList.remove('active');
            voiceIcon.innerHTML = `<img src="assets/mic_simple_36dp.svg" alt="Microphone" width="24" height="24">`;
        }
    }
}

/**
 * Toggle speech recognition on/off
 */
function toggleSpeechRecognition(workoutCallbacks) {
    if (speechRecognitionActive) {
        // Stop recognition
        if (recognitionInstance) {
            try {
                recognitionInstance.stop();
                recognitionInstance = null;
            } catch (e) {
                console.error('Error stopping speech recognition:', e);
                showNotification('Error stopping voice recognition', 'error');
            }
        }
        speechRecognitionActive = false;
        updateVoiceIndicator(false);
        speakText('Voice commands disabled');
        showNotification('Voice commands disabled', 'info');
    } else {
        // Start recognition
        recognitionInstance = setupSpeechRecognition(workoutCallbacks);
        if (recognitionInstance) {
            speakText('Voice commands enabled');
            showNotification('Voice commands enabled', 'success');
        } else {
            showNotification('Speech recognition is not supported in this browser', 'error');
            alert('Speech recognition is not supported in this browser.');
        }
    }
}

/**
 * Initialize speech recognition
 */
function initSpeechRecognition(workoutCallbacks) {
    // Add an event listener to announce exercises when they change
    if (workoutCallbacks.onExerciseChange) {
        const originalOnExerciseChange = workoutCallbacks.onExerciseChange;
        workoutCallbacks.onExerciseChange = function(index) {
            originalOnExerciseChange(index);
            announceCurrentExercise(workoutCallbacks.workoutExercises, index);
        };
    }
    
    // Initialize speech recognition for voice commands
    recognitionInstance = setupSpeechRecognition(workoutCallbacks);
    return recognitionInstance;
}

// Export public methods and functions
export {
    speechRecognitionActive,
    recognitionInstance,
    speakText,
    cancelSpeech,
    showNotification,
    initSpeechRecognition,
    toggleSpeechRecognition,
    announceCurrentExercise
}; 