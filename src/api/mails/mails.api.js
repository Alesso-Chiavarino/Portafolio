import axios from 'axios';
import { ENV } from '../../config/env.config.js';

const { PROD: { API_URL } } = ENV
// const { DEV: { API_URL } } = ENV

// export class MailsApi {
//     static sendMail = async (data) => {
//         return await axios.post(`${ENV.DEV.API_URL}/api/mail`, data)
//     }
// }

export const sendMailsRequest = async (data) => {
    return await axios.post(`${API_URL}/api/mails`, data)
}