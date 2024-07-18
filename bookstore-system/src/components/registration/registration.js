import React from 'react';
import './registration.css';
import NavBar from '../navbar/NavBar.js';

const Registration = () => {
    return (
    <div>
        <NavBar />
        <div class="container">
            <h2>Registration Form</h2>
            <form action="thankyou" method="get">
                <div class="form-group">
                    <label for="username">Username <span class="required">*</span></label>
                    <input type="text" id="username" name="username" required/>
                </div>
                <div class="form-group">
                    <label for="email">Email <span class="required">*</span></label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div class="form-group">
                    <label for="password">Password <span class="required">*</span></label>
                    <input type="password" id="password" name="password" required/>
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Confirm Password <span class="required">*</span></label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required/>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    </div>
    );
};

export default Registration;