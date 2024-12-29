import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='Form'>
    <h2>Input Details</h2>
    
    <input type="text" name="name" id="" placeholder='Enter Your Name:'/>
    <input type="email" name="email" id="" placeholder='Enter Your Email:' />
    <input type="text" name="address" id="" placeholder='Enter Your Address:' />
    <input type="tel" name="contact" id="" placeholder='Enter Your Contact:' pattern='[0-9]{10}' maxLength={10} minLength={10}/>
    <button type="submit">Submit</button>
      
    </div>
  )
}

export default Form
