import nodemailer from 'nodemailer';
import { ENV } from '../utils/env.utils.js';

export const sendMail = async (req, res) => {

    const { name, email, message } = req.body;

    const { EMAIL, PASSWORD } = ENV.NODEMAILER;

    const contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Name: ${name}</li>
            <li>User Email: ${email}</li>
        </ul>
        <p>${message}</p>
    `

    const config = {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    }

    const fullMessage = {
        from: "'Portfolio Server' <jorgeechiavarino@gmail.com>",
        to: EMAIL,
        subject: 'Mensaje desde portafolio',
        html: contentHTML
    }

    const transporter = nodemailer.createTransport(config)

    try {

        const info = await transporter.sendMail(fullMessage)

        res.json({
            status: 'success',
            message: 'Email sent successfully',
        })

        console.log(info);

    } catch (error) {
        res.json({
            status: 'error',
            error
        })
    }
}