import { RiSendPlaneFill, useState, useRef, sendMailsRequest, ToastContainer, generateToast, useTheme } from '../../config/import.config.js'
import './Form.scss';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

  const { isDark } = useTheme()

  //value forms
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  //validations
  const [nameVal, setNameVal] = useState(false);
  const [emailVal, setEmailVal] = useState(false);
  const [messageVal, setMessageVal] = useState(false);

  //regular expressions
  const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  }

  //refs
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()
  const inputNameRef = useRef()
  const inputEmailRef = useRef()
  const inputMessageRef = useRef()

  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
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
        if (!nameVal) {
          nameRef.current.className = "form-warning"
          // inputNameRef.current.focus();
        }
        if (!emailVal) {
          emailRef.current.className = "form-warning"
          // inputEmailRef.current.focus();
        }
        if (!messageVal) {
          messageRef.current.className = "form-warning2"
          // inputMessageRef.current.focus();
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

  const handleName = (e) => {
    setName(e.target.value);
    if (expressions.name.test(name)) {
      setNameVal(true);
      nameRef.current.className = "d-none"
    } else {
      setNameVal(false);
      nameRef.current.className = "form-warning"
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (expressions.email.test(email)) {
      setEmailVal(true);
      emailRef.current.className = "d-none"
    } else {
      setEmailVal(false);
      emailRef.current.className = "form-warning"
    }
  }

  const handleMessage = (e) => {
    setMessage(e.target.value);
    if (message !== "") {
      setMessageVal(true);
      messageRef.current.className = "d-none"
    } else {
      setMessageVal(false);
      messageRef.current.className = "form-warning2"
    }
  }


  return (
    <>
      <form className={isDark ? 'contact-form' : 'contact-form-light'} onSubmit={handleSubmit}>
        <div className='form-name'>
          <label>Your Name</label>
          <span className='form-warning d-none' ref={nameRef} >Write a name</span>
          <input type="text" placeholder="Jhon Doe" name='user_name' onChange={handleName} onKeyUp=
            {handleName} onBlur={handleName} value={name} ref={inputNameRef} />
        </div>
        <div className='form-email'>
          <label>Your Email Adress</label>
          <span className='form-warning d-none' ref={emailRef} >Enter a correct email</span>
          <input type="text" placeholder="JhonDoe@gmail.com" name='user_email' onChange={handleEmail}
            onKeyUp={handleEmail} onBlur={handleEmail} value={email} ref={inputEmailRef} />
        </div>
        section
        <span className='loader-40'></span>

        <div className="form-message">
          <label>Your Message</label>
          <span className='form-warning2 d-none' ref={messageRef} >Write a message</span>
          <textarea cols="30" rows="10" placeholder='Type a message...' name='message' onChange=
            {handleMessage} onKeyUp={handleMessage} onBlur={handleMessage} value={message} ref=
            {inputMessageRef} ></textarea>
        </div>
        {loader?
          <button className='btn-submit dots-aling'>Submiting <span className='loader'></span>
          </button>
          :
          <button className='btn-submit'> <RiSendPlaneFill /> Submit</button>}

      </form>
      <ToastContainer />
    </>
  )

}



export default Form;