import { axios } from '../../config/import.config'
import { ENV } from "../../config/env.config.ts"

const { PROD: { API_URL } } = ENV

type dataType = {
    name: string,
    email: string,
    message: string
}

export const sendMailsRequest = async (data: dataType ) => {
    return await axios.post(`${API_URL}/api/mails`, data)
}
