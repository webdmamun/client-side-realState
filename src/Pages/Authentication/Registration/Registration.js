import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import "./Registration.css"

const Registration = () => {
    const {registration,error}= useFirebase(); 
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigation = useNavigate();

const handleEmail = (e) =>{
    setEmail(e.target.value);
}
const handlePassword = (e) =>{
    setPassword(e.target.value);
}
const handleReg = (e) => {
    registration(email, password,navigation);
    e.preventDefault();
}
console.log(error);
    return (
<div className=''>
            <div className="">
            <h1>Urban Estate</h1>
            <h3>registration</h3>

            <form onSubmit={handleReg}>
                <input onBlur={handleEmail} type="email" placeholder='Your Email'/><br />
                <input onBlur={handlePassword} type="password" placeholder='Your Password' /><br />
                <input id="submit" type="submit" value="Submit" />
            </form>
                <button>Continue with Google</button>
                <br />
                <Link to="/login"><button>Login</button></Link>
            </div>


        </div>
    );
};

export default Registration;