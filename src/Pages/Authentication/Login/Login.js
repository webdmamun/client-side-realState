import React from 'react';
import "./Login.css"

const Login = () => {
    
    return (
        <div className='login'>
            <div className="login-card ">
            <h1>Urban Estate</h1>
            <h3>Login</h3>

            <form action="">
                <input type="text" placeholder='' /><br />
                <input type="text" placeholder='' /><br />
                <input type="submit" value="Login" />
            </form>
            <button>Continue with Google</button>
            </div>


        </div>
    );
};

export default Login;