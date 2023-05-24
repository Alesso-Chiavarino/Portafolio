import axios from 'axios';

export const sendMailsRequest = async (data) => {
    console.log(data)
    return await axios.post('https://portafolio-server-ruby.vercel.app/api/mails', data)
}