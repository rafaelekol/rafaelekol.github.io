class JawshanApp {
    constructor() {
        this.store = new Store();
        this.settings = {
            language: this.store.getSetting('language', 'english'),
            fontSize: this.store.getSetting('fontSize', 16)
        };
        this.currentPage = this.store.getSetting('currentPage', 1);
        this.jawshanData = [];
        this.loadJawshanData();
        this.initElements();
        this.initEventListeners();
        this.loadPage(this.currentPage);
        this.applySettings();
        this.initializeApp();
        this.audio = null;
        this.isPlaying = false;
        
        // Initialize analytics if available
        this.analytics = window.telegramAnalytics || null;
        
        if (!this.analytics) {
            console.warn('Telegram Analytics not available');
        }
    }

    async loadJawshanData() {
        try {
            this.jawshanData = JAWSHAN_DATA;
        } catch (error) {
            console.error('Error loading Jawshan data:', error);
        }
    }

    initElements() {
        this.pageContent = document.getElementById('pageContent');
        this.currentPageEl = document.getElementById('currentPage');
        this.settingsBtn = document.getElementById('settingsBtn');
        console.log('Settings button:', this.settingsBtn);
        this.settingsPanel = document.getElementById('settingsPanel');
        console.log('Settings panel:', this.settingsPanel);
        this.closeSettings = document.getElementById('closeSettings');
        this.languageSelect = document.getElementById('languageSelect');
        this.increaseFontBtn = document.getElementById('increaseFontBtn');
        this.decreaseFontBtn = document.getElementById('decreaseFontBtn');
        this.currentFontSize = document.getElementById('currentFontSize');
        this.themeToggle = document.getElementById('themeToggle');
        this.pageSlider = document.getElementById('pageSlider');
        this.pageIndicator = document.querySelector('.page-indicator');
        this.sliderContainer = document.querySelector('.slider-container');
        this.sliderBubble = document.querySelector('.slider-bubble');
        this.audioBtn = document.getElementById('audioBtn');
    }

    initEventListeners() {
        // Touch events for page sliding
        let startX = 0;
        let startY = 0;
        let isDragging = false;
        let isScrolling = false;

        // Add click events for page sides
        this.pageContent.addEventListener('click', (e) => {
            // Close settings panel if it's open
            if (this.settingsPanel.classList.contains('visible')) {
                this.settingsPanel.classList.remove('visible');
                return;
            }

            const pageWidth = this.pageContent.offsetWidth;
            const clickX = e.offsetX;
            
            // If click is in the left 20% of the page
            if (clickX < pageWidth * 0.3 && this.currentPage > 1) {
                this.previousPage();
            }
            // If click is in the right 20% of the page
            else if (clickX > pageWidth * 0.7 && this.currentPage < 101) {
                this.nextPage();
            }
        });

        this.pageContent.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isDragging = true;
            isScrolling = false;
        });

        this.pageContent.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            const diffX = startX - currentX;
            const diffY = Math.abs(startY - e.touches[0].clientY);

            // If vertical scrolling is detected, don't change pages
            if (diffY > Math.abs(diffX)) {
                isScrolling = true;
                return;
            }

            // Only change pages if the horizontal swipe is significant and not scrolling
            if (!isScrolling && Math.abs(diffX) > 50) {
                if (diffX > 0 && this.currentPage < 101) {
                    this.nextPage();
                } else if (diffX < 0 && this.currentPage > 1) {
                    this.previousPage();
                }
                isDragging = false;
            }
        });

        this.pageContent.addEventListener('touchend', () => {
            isDragging = false;
            isScrolling = false;
        });

        // Settings events
        this.settingsBtn.addEventListener('click', () => {
            this.settingsPanel.classList.add('visible');
        });

        this.closeSettings.addEventListener('click', () => {
            this.settingsPanel.classList.remove('visible');
        });

        this.languageSelect.addEventListener('change', (e) => {
            const newLanguage = e.target.value;
            this.settings.language = newLanguage;
            this.store.setSetting('language', newLanguage);
            this.loadPage(this.currentPage);
            
            // Track language change
            this.trackEvent('language_change', {
                from: this.settings.language,
                to: newLanguage
            });
        });

        this.increaseFontBtn.addEventListener('click', () => {
            this.changeFontSize(2);
            this.trackEvent('font_size_change', {
                action: 'increase',
                new_size: this.settings.fontSize
            });
        });

        this.decreaseFontBtn.addEventListener('click', () => {
            this.changeFontSize(-2);
            this.trackEvent('font_size_change', {
                action: 'decrease',
                new_size: this.settings.fontSize
            });
        });

        // Add theme toggle event listener
        this.themeToggle.addEventListener('click', () => {
            const currentTheme = this.store.getSetting('theme', 'light');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            this.updateSetting('theme', newTheme);
            
            // Track theme change
            this.trackEvent('theme_change', {
                from: currentTheme,
                to: newTheme
            });
        });

        // Add click event for page indicator
        this.pageIndicator.addEventListener('click', () => {
            this.showSlider();
        });

        // Update slider event listeners
        this.pageSlider.addEventListener('input', (e) => {
            const pageNumber = parseInt(e.target.value);
            this.currentPage = pageNumber;
            this.currentPageEl.textContent = pageNumber;
            
            // Update and show bubble
            const thumbPosition = (pageNumber - 1) / 100 * this.pageSlider.offsetWidth;
            this.sliderBubble.textContent = pageNumber;
            this.sliderBubble.style.left = `${thumbPosition}px`;
            this.sliderBubble.classList.add('visible');

            // Clear any existing hide timer while user is sliding
            if (this.sliderTimer) {
                clearTimeout(this.sliderTimer);
            }
        });

        this.pageSlider.addEventListener('change', (e) => {
            const pageNumber = parseInt(e.target.value);
            this.loadPage(pageNumber);
            // Hide bubble
            this.sliderBubble.classList.remove('visible');
            // Only start hide timer when user has finished sliding
            this.hideSliderWithDelay();
        });

        // Also add mouseenter/mouseleave events to prevent hiding while hovering
        this.sliderContainer.addEventListener('mouseenter', () => {
            if (this.sliderTimer) {
                clearTimeout(this.sliderTimer);
            }
        });

        this.sliderContainer.addEventListener('mouseleave', () => {
            this.hideSliderWithDelay();
        });

        // Add audio button event listener
        this.audioBtn.addEventListener('click', () => {
            if (this.isPlaying) {
                this.stopAudio();
                this.trackEvent('audio_stop', {
                    page: this.currentPage
                });
            } else {
                this.playAudio();
                this.trackEvent('audio_play', {
                    page: this.currentPage
                });
            }
        });
    }

    changeFontSize(delta) {
        const newSize = Math.min(Math.max(12, this.settings.fontSize + delta), 30);
        this.settings.fontSize = newSize;
        this.store.setSetting('fontSize', newSize);
        this.currentFontSize.textContent = newSize;
        this.pageContent.style.fontSize = `${newSize}px`;
    }

    loadPage(pageNumber) {
        const page = this.jawshanData.find(p => p.id === pageNumber);
        if (!page) return;

        let content = page[this.settings.language];
        const dua = page[`${this.settings.language}_dua`];
        const isArabic = this.settings.language === 'arabic';
        const isEnglish = this.settings.language === 'english';

        // Add line breaks after ؛۝؛ for Arabic text
        if (isArabic) {
            content = content.replace(/؛۝؛/g, '؛۝؛<br>');
        }

        this.pageContent.innerHTML = `
            <div class="page-text" ${isArabic ? 'lang="ar"' : isEnglish ? 'lang="en"' : ''}>${content}</div>
            <div class="page-dua" ${isArabic ? 'lang="ar"' : isEnglish ? 'lang="en"' : ''}>${dua}</div>
        `;

        this.currentPageEl.textContent = pageNumber;
        this.store.setSetting('currentPage', pageNumber);
        this.pageSlider.value = pageNumber;

        // Update audio button visibility
        this.updateAudioButtonVisibility();

        // If audio was playing, start the new page's audio
        if (this.isPlaying) {
            this.playAudio();
        }

        // Track page view
        this.trackEvent('page_view', {
            page_number: pageNumber,
            language: this.settings.language
        });
    }

    nextPage() {
        if (this.currentPage < 101) {
            const wasPlaying = this.isPlaying;
            if (wasPlaying) {
                this.stopAudio();
            }
            this.currentPage++;
            this.loadPage(this.currentPage);
        }
    }

    previousPage() {
        if (this.currentPage > 1) {
            const wasPlaying = this.isPlaying;
            if (wasPlaying) {
                this.stopAudio();
            }
            this.currentPage--;
            this.loadPage(this.currentPage);
        }
    }

    applySettings() {
        this.languageSelect.value = this.settings.language;
        this.currentFontSize.textContent = this.settings.fontSize;
        this.pageContent.style.fontSize = `${this.settings.fontSize}px`;
        
        // Apply theme
        const theme = this.store.getSetting('theme', 'light');
        document.documentElement.setAttribute('data-theme', theme);
        this.themeToggle.textContent = theme === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode';
    }

    initializeApp() {
        this.applySettings();
        this.loadPage(this.currentPage);
        this.pageSlider.value = this.currentPage;
        
        // Track app start
        this.trackEvent('app_start', {
            initial_page: this.currentPage,
            language: this.settings.language,
            theme: this.store.getSetting('theme', 'light'),
            font_size: this.settings.fontSize
        });
    }

    changePage(pageNumber) {
        this.currentPage = pageNumber;
        this.store.setCurrentPage(pageNumber);
        this.loadPage(this.currentPage);
    }

    updateSetting(key, value) {
        this.store.setSetting(key, value);
        this.applySettings();
    }

    showSlider() {
        this.sliderContainer.classList.add('visible');
        // Update slider value to current page
        this.pageSlider.value = this.currentPage;
    }

    hideSlider() {
        this.sliderContainer.classList.remove('visible');
    }

    hideSliderWithDelay() {
        // Clear any existing timer
        if (this.sliderTimer) {
            clearTimeout(this.sliderTimer);
        }
        // Set new timer to hide slider after 3 seconds
        this.sliderTimer = setTimeout(() => {
            this.hideSlider();
        }, 3000);
    }

    playAudio() {
        if (this.audio) {
            this.audio.pause();
        }

        this.audio = new Audio(`audio/bab${this.currentPage}.mp3`);
        
        // When audio ends, play next track and show next page
        this.audio.addEventListener('ended', () => {
            if (this.currentPage < 101) {
                this.nextPage();
                this.playAudio();
            } else {
                this.stopAudio();
            }
        });

        // Handle any errors
        this.audio.addEventListener('error', (e) => {
            console.error('Error playing audio:', e);
            this.stopAudio();
        });

        this.audio.play().then(() => {
            this.isPlaying = true;
            // Change to stop icon
            this.audioBtn.querySelector('img').src = 'assets/stop_circle_24dp_5F6368_FILL1_wght400_GRAD0_opsz24.png';
        }).catch(error => {
            console.error('Error starting playback:', error);
        });
    }

    stopAudio() {
        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
            this.audio = null;
        }
        this.isPlaying = false;
        // Change back to play icon
        this.audioBtn.querySelector('img').src = 'assets/play_circle_24dp_5F6368_FILL1_wght400_GRAD0_opsz24.png';
    }

    // Add this new method
    updateAudioButtonVisibility() {
        if (this.currentPage === 101) {
            this.audioBtn.style.display = 'none';
        } else {
            this.audioBtn.style.display = 'block';
        }
    }

    // Add a helper method for tracking events
    trackEvent(eventName, eventData = {}) {
        if (this.analytics) {
            this.analytics.track(eventName, eventData);
        }
    }
}

// Initialize the app when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new JawshanApp();
}); 