import './Form.scss';
import {RiSendPlaneFill} from 'react-icons/ri'

const Form = () => {
  return (
    <form className='contact-form'>
      <div className='form-name'>
        <label htmlFor="" >Your Name</label>
        <input type="text" placeholder="Jhon Doe" />
      </div>
      <div className='form-email'>
        <label htmlFor="" >Your Email Adress</label>
        <input type="text" placeholder="JhonDoe@gmail.com" />
      </div>
      <div className="form-message">
        <label htmlFor="" >Your Message</label>
        <textarea cols="30" rows="10" placeholder='Type a message...' ></textarea>
      </div>
      <button className='btn-submit'> <RiSendPlaneFill/> Submit</button>
    </form>
  )
}

export default Form;