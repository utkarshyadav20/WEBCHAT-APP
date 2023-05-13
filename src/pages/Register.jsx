import React from 'react'
import Add from '../img/addAvatar.png'
const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>WebChat </span>
            <span className='title'>Register</span>
            <form >
                <input type="text" placeholder='name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display:"none"}} type="file" id='file'/>
                <label htmlFor="file">
                  <img src={Add} alt="" />
                </label>
                <button className='Sign-up'>Sign Up</button>

            </form>
            <p>Alraedy have an account? Login</p>
        </div>
    </div>
  )
}

export default Register;