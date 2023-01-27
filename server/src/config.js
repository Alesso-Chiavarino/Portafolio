import dotenv from 'dotenv';

dotenv.config();

export const PASSWORD = process.env.AUTH_PASS;

export const EMAIL = process.env.EMAIL;