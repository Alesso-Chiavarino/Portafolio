import { toast } from '../config/import.config'

export const generateToast = (type = 'error', message = 'No message') => {
    switch (type) {
        case 'success': {
            return toast.success(message)
        }
        case 'error': {
            return toast.error(message)
        }
    }
}