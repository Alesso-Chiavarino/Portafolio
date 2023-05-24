import { toast } from "react-toastify";

export const generateToast = (type = 'success', message = 'No message') => {
    switch (type) {
        case 'success': {
            return toast.success(message, {
                position: "top-center",
                className: 'toastify',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        case 'error': {
            return toast.error(message, {
                position: "top-center",
                className: 'toastify',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    }
}