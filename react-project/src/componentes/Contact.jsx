import React from 'react'

const Contact = () => {
  return (
    <div className='form-container'>
        <h1 className='main-title'> Contact Us</h1>
      <form>
        <input type="text" placeholder='Enter your name' />
        <input type="email" placeholder='Enter your email'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
