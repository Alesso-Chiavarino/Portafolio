import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
    PORT: process.env.PORT || 4000,
    NODEMAILER: {
        PASSWORD: process.env.AUTH_PASS || '',
        EMAIL: process.env.EMAIL || ''
    }
} 