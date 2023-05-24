import { transporter } from '../config/nodemailer.config.js';
import { generateMessage } from '../utils/nodemailer.utils.js';

export const sendMail = async (req, res) => {

    const { name, email, message } = req.body;

    try {
        const fullMessage = generateMessage({ name, email, message })
        const response = await transporter.sendMail(fullMessage)

        res.json({
            status: true,
            message: 'Email sent successfully',
            payload: response
        })

    } catch (error) {
        res.json({
            status: false,
            error
        })
    }
}