import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import "./Login.css"

const Login = () => {
    const {signInWithGoogle,user,logOut,login,error}= useFirebase();
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e)=>{
        login(email,password,location,navigate );
        e.preventDefault();
    };
    const handleEmail = (e)=>{
        setEmail(e.target.value);
    };
    const handlePassword = (e)=>{
        setPassword(e.target.value);
        
    };

const handleGoogleLogin = () =>{        
    signInWithGoogle(location,navigate)
};
console.log(error);
    
    return (
        <div className='login'>
            <div className="login-card ">
            <h1>Urban Estate</h1>
            <h3>Login</h3>

            <form onSubmit={handleLogin}>
                <input onBlur={handleEmail} type="email"  placeholder='Email'  /><br />
                <input onBlur={handlePassword} type="password" placeholder='Password' /><br />
                <input id="submit" type="submit" value="Submit" />
            </form>
            <p>{user?.email}</p>
            <button onClick={handleGoogleLogin}>Continue with Google </button>
            <button onClick={logOut}>Log Out</button>
            <br />
            <Link to="/registration"><button>Registration</button></Link>
            </div>


        </div>
    );
};

export default Login;