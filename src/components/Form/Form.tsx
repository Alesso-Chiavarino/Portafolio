import { RiSendPlaneFill, useTheme, ToastContainer } from '../../config/import.config'
import './Form.scss';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from './useForm';

const Form = () => {

  const { isDark } = useTheme()
  
  const { email, emailRef, handleEmail, handleMessage, handleName, handleSubmit, inputEmailRef, inputMessageRef, inputNameRef, loader, message, messageRef, name, nameRef } = useForm()

  return (
    <>
      <form className={isDark ? 'contact-form' : 'contact-form-light'} onSubmit={handleSubmit}>
        <div className='form-name'>
          <label>Your Name</label>
          <span className='form-warning d-none' ref={nameRef} >Write a name</span>
          <input type="text" placeholder="Jhon Doe" name='user_name' onKeyUp={handleName} onChange={handleName} onBlur={handleName} value={name} ref={inputNameRef} />
        </div>
        <div className='form-email'>
          <label>Your Email Adress</label>
          <span className='form-warning d-none' ref={emailRef} >Enter a correct email</span>
          <input type="text" onKeyUp={handleEmail} placeholder="JhonDoe@gmail.com" name='user_email' onChange={handleEmail}
            onBlur={handleEmail} value={email} ref={inputEmailRef} />
        </div>
        section
        <span className='loader-40'></span>

        <div className="form-message">
          <label>Your Message</label>
          <span className='form-warning2 d-none' ref={messageRef} >Write a message</span>
          <textarea cols={30} rows={10} onKeyUp={handleMessage} placeholder='Type a message...' name='message' onChange=
            {handleMessage} onBlur={handleMessage} value={message} ref=
            {inputMessageRef} ></textarea>
        </div>
        {loader ?
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