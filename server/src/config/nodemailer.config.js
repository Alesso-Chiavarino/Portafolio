import { ENV } from "./env.config.js";
import nodemailer from 'nodemailer';

const { EMAIL, PASSWORD } = ENV.NODEMAILER;

export const config = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: EMAIL,
        pass: PASSWORD
    }
}

export const transporter = nodemailer.createTransport(config)