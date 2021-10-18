import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();
    const loginToApp  = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
            }))
       
        }).catch(error => alert(error));

    };

    const register  = () => {
        if(!name){
            return alert('Please Enter a full name')
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName : name,
                photoUrl : profilePic,
            })
            .then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                }))
            })
        }).catch((error) => alert(error.message));
    };

    return (
       <div className="login">
         <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" alt="" />
         <form >
             
             <input  value = {name} onChange = {e => setName(e.target.value)} type="text" placeholder = "Full Name (Required if registering)" />
             <input  value = {profilePic} onChange = {e => setProfilePic(e.target.value)} type="text" placeholder = "Profile Picture URL (optional)" />
             <input value = {email} onChange = {e => setEmail(e.target.value)} type="email" placeholder = "Email" />
             <input  value = {password} onChange = {e => setPassword(e.target.value)} type="password" placeholder = "Password" />
             <button type = 'submit' onClick = {loginToApp}>Sign In</button>

         </form>
         <p>Not A Member?{" "}
             <span className= 'login_register' onClick = {register}>
                 Register Now
             </span>
         </p>
       </div>
    )
}

export default Login
