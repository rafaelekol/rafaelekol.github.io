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
    }

    initEventListeners() {
        // Touch events for page sliding
        let startX = 0;
        let isDragging = false;

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
            isDragging = true;
        });

        this.pageContent.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const currentX = e.touches[0].clientX;
            const diff = startX - currentX;

            if (Math.abs(diff) > 50) {
                if (diff > 0 && this.currentPage < 101) {
                    this.nextPage();
                } else if (diff < 0 && this.currentPage > 1) {
                    this.previousPage();
                }
                isDragging = false;
            }
        });

        this.pageContent.addEventListener('touchend', () => {
            isDragging = false;
        });

        // Settings events
        this.settingsBtn.addEventListener('click', () => {
            this.settingsPanel.classList.add('visible');
        });

        this.closeSettings.addEventListener('click', () => {
            this.settingsPanel.classList.remove('visible');
        });

        this.languageSelect.addEventListener('change', (e) => {
            this.settings.language = e.target.value;
            this.store.setSetting('language', e.target.value);
            this.loadPage(this.currentPage);
        });

        this.increaseFontBtn.addEventListener('click', () => {
            this.changeFontSize(2);
        });

        this.decreaseFontBtn.addEventListener('click', () => {
            this.changeFontSize(-2);
        });

        // Add theme toggle event listener
        this.themeToggle.addEventListener('click', () => {
            const currentTheme = this.store.getSetting('theme', 'light');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            this.updateSetting('theme', newTheme);
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

        const content = page[this.settings.language];
        const dua = page[`${this.settings.language}_dua`];
        const isArabic = this.settings.language === 'arabic';

        this.pageContent.innerHTML = `
            <div class="page-text" ${isArabic ? 'lang="ar"' : ''}>${content}</div>
            <div class="page-dua" ${isArabic ? 'lang="ar"' : ''}>${dua}</div>
        `;

        this.currentPageEl.textContent = pageNumber;
        this.store.setSetting('currentPage', pageNumber);
        this.pageSlider.value = pageNumber;
    }

    nextPage() {
        if (this.currentPage < 101) {
            this.currentPage++;
            this.loadPage(this.currentPage);
        }
    }

    previousPage() {
        if (this.currentPage > 1) {
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
}

// Initialize the app when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new JawshanApp();
}); 