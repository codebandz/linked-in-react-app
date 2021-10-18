import React from 'react'
import './Login.css'

function Login() {
    const loginToApp  = () => {};
    const register  = () => {};
    return (
       <div className="login">
         <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" alt="" />
         <form >
             
             <input type="text" placeholder = "Full Name (Required if registering)" />
             <input type="text" placeholder = "Profile Picture URL (optional)" />
             <input type="email" placeholder = "Email" />
             <input type="password" placeholder = "Password" />
             <button type = 'submit' onClick = {loginToApp}>Sign In</button>

         </form>
         <p>Not A Member ?
             <span className= 'login_register' onClick = {register}>
                 Register Now
             </span>
         </p>
       </div>
    )
}

export default Login
