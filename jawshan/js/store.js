class Store {
    constructor() {
        this.storageKey = 'jawshan_settings';
        this.defaultSettings = {
            currentPage: 1,
            fontSize: 16,
            theme: 'light',
            language: 'english'
        };
        
        // Load settings from localStorage or use defaults
        this.settings = this.loadSettings();
    }

    loadSettings() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : {...this.defaultSettings};
    }

    saveSettings() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.settings));
    }

    // Get current page
    getCurrentPage() {
        return this.settings.currentPage;
    }

    // Save current page
    setCurrentPage(page) {
        this.settings.currentPage = page;
        this.saveSettings();
    }

    // Get a specific setting with default value
    getSetting(key, defaultValue) {
        return this.settings[key] !== undefined ? this.settings[key] : defaultValue;
    }

    // Update a specific setting
    setSetting(key, value) {
        this.settings[key] = value;
        this.saveSettings();
    }
} 