import React from 'react';
import './login.css';
import NavBar from '../navbar/NavBar.js';

const Login = () => {
    return (
    <div class="element">
        <NavBar />

        <div class="outer-container">
            <div class="login-container">
                <h2>Login</h2>
                <form action="/" method="get">
                    <input type="text" name="username" placeholder="Username" required/>
                    <input type="password" name="password" placeholder="Password" required/>
                    <input type="submit" value="Enter"/>
                </form>
                <p>Don't have an account? <a href="registration">Register instead</a></p>
            </div>
        </div>
    </div>
    );
};

export default Login;