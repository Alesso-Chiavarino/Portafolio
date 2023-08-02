export const ENV = {
    DEV: {
        API_URL: 'http://localhost:4000',
    },
    PROD: {
        API_URL: import.meta.env.VITE_SERVER_URI || '',
    },
}