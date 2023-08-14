import { axios } from '../../config/import.config'
import { ENV } from "../../config/env.config.ts"
import { DataType } from '../../config/import.config'

const { PROD: { API_URL } } = ENV


export const sendMailsRequest = async (data: DataType) => {
    return await axios.post(`${API_URL}/api/mails`, data)
}
