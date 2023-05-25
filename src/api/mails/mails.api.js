import axios from 'axios';
import { ENV } from '../../config/env.config.js';

const { PROD: { API_URL } } = ENV

export const sendMailsRequest = async (data) => {
    return await axios.post(`${API_URL}/api/mails`, data)
}