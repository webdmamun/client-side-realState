import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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

    
    return (
            <div className="Login"> 
                <div className="container login-form text-center">
                    <div className="">
                        <Row>
                            <Col xs={12} lg={6} className="left-section">
                                <h1>Welcome to login</h1>
                                <h4>Do you need an account?</h4>
                                <Link to="/registration" ><button className='link-btn'>Sign Up</button></Link>
                            </Col>

                            <Col className="right-section" xs={12} lg={6}>
                                <div className=""> 
                                    <h3><span className='green'>
                                    Login </span>Here</h3>    
                                    <hr />                          
                                        <form className='Form' onClick={handleLogin}>
                                        <input onBlur={handleEmail} type="email"  placeholder='Email'  />
                                        <br />
                                        <input onBlur={handlePassword} type="password" placeholder='Password' />
                                        <br />
                                        <input id="submit" type="submit" value="Submit" />
                                        </form>
                                    <br />                                    
                                    <button className='google-login' onClick={handleGoogleLogin}>
                                    Login with Google
                                    </button>
                                    <br /><br /><br />
                                </div>
                            </Col>
                        </Row>
                    </div>
                 </div>                              
            </div>
    );
};

export default Login;