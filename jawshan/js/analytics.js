import TelegramAnalytics from '@telegram-apps/analytics';

export const initAnalytics = () => {
    try {
        TelegramAnalytics.init({
            token: 'eyJhcHBfbmFtZSI6Imphd3NoYW5fYm90X2FuYWx5dGljcyIsImFwcF91cmwiOiJodHRwczovL3QubWUvamF3c2hhbl9ib3QiLCJhcHBfZG9tYWluIjoiaHR0cHM6Ly9yYWZhZWxla29sLmdpdGh1Yi5pby9qYXdzaGFuL2luZGV4Lmh0bWwifQ==!kr9UQz6R6+FyKQPWPx61usE0S/LtKtUyPFJB/Ne3vQQ=',
            appName: 'jawshan_bot_analytics',
            debug: true
        });
        console.log('Telegram Analytics initialized successfully');
        return TelegramAnalytics;
    } catch (error) {
        console.error('Error initializing Telegram Analytics:', error);
        return null;
    }
};

export default TelegramAnalytics; 