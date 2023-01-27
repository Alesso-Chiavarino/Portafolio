import axios from 'axios';

export const sendMailsRequest = async (data) => {
    return await axios.post('http://localhost:4000/api/mails', data)
}