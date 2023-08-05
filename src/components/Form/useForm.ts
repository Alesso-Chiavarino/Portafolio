import { useState, useRef, sendMailsRequest, generateToast } from '../../config/import.config'

export const useForm = () => {

    //value forms
    const [name, setName] = useState < string > ('');
    const [email, setEmail] = useState < string > ('');
    const [message, setMessage] = useState < string > ('');

    //validations
    const [nameVal, setNameVal] = useState < boolean > (false);
    const [emailVal, setEmailVal] = useState < boolean > (false);
    const [messageVal, setMessageVal] = useState < boolean > (false);

    //regular expressions
    const expressions = {
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }

    //refs
    const nameRef = useRef < HTMLSpanElement > (null)
    const emailRef = useRef < HTMLSpanElement > (null)
    const messageRef = useRef < HTMLSpanElement > (null)
    const inputNameRef = useRef < HTMLInputElement > (null)
    const inputEmailRef = useRef < HTMLInputElement > (null)
    const inputMessageRef = useRef < HTMLTextAreaElement > (null)

    const [loader, setLoader] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let isRequestSuccessful = false;
        try {
            if (nameVal && emailVal && messageVal) {
                setLoader(true);
                await sendMailsRequest({
                    name,
                    email,
                    message
                })
                isRequestSuccessful = true
            } else {
                if (!nameVal && nameRef.current) {
                    nameRef.current.className = "form-warning"
                }
                if (!emailVal && emailRef.current) {
                    emailRef.current.className = "form-warning"
                }
                if (!messageVal && messageRef.current) {
                    messageRef.current.className = "form-warning2"
                }
                return;
            }
        }
        catch (error) {
            console.log(error);
            isRequestSuccessful = false
            return
        }
        finally {
            if (nameVal && emailVal && messageVal && isRequestSuccessful) {
                setName('');
                setEmail('');
                setMessage('');
                setNameVal(false);
                setEmailVal(false);
                setMessageVal(false);
                generateToast('success', 'Thanks for your message :)')

            } else {
                generateToast('error', 'We cannot sent your message')
            }
            setLoader(false);
        }
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
        if (expressions.name.test(name)) {
            setNameVal(true);
            nameRef.current && (nameRef.current.className = "d-none")
        } else {
            setNameVal(false);
            nameRef.current && (nameRef.current.className = "form-warning")
        }
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
        if (expressions.email.test(email)) {
            setEmailVal(true);
            emailRef.current && (emailRef.current.className = "d-none")
        } else {
            setEmailVal(false);
            emailRef.current && (emailRef.current.className = "form-warning")
        }
    }

    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement> | React.KeyboardEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value);
        if (message !== "") {
            setMessageVal(true);
            messageRef.current && (messageRef.current.className = "d-none")
        } else {
            setMessageVal(false);
            messageRef.current && (messageRef.current.className = "form-warning2")
        }
    }

    return {
        handleSubmit,
        nameRef,
        handleName,
        emailRef,
        handleEmail,
        messageRef,
        handleMessage,
        name,
        email,
        message,
        inputNameRef,
        inputEmailRef,
        inputMessageRef,
        loader
    }
}