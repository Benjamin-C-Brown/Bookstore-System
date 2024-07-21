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
                    <label for="phone">Phone Number <span class="required">*</span></label>
                    <input type="phone" id="phone" name="phone" required/>
                </div>
                <div class="form-group">
                    <label for="password">Password <span class="required">*</span></label>
                    <input type="password" id="password" name="password" required/>
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Confirm Password <span class="required">*</span></label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required/>
                </div>
                <h3>Payment Information (optional)</h3>
                <div class="form-group">
                    <label for="address">Street Address</label>
                    <input type="text" id="address" name="address"/>
                </div>
                <div class="form-group">
                    <label for="city">City, State</label>
                    <input type="text" id="city" name="city"/>
                </div>
                <div class="form-group">
                    <label for="zip">ZIP Code</label>
                    <input type="number" id="zip" name="zip"/>
                </div>
                <div class="form-group">
                    <label for="cardtype">Credit Card Type</label>
                    <input type="text" id="cardtype" name="cardtype"/>
                </div>
                <div class="form-group">
                    <label for="cardnumber">Credit Card Number</label>
                    <input type="number" id="cardnumber" name="cardnumber"/>
                </div>
                <div class="form-group">
                    <label for="expiration">Expiration Date</label>
                    <input type="month" id="expiration" name="expiration"/>
                </div>
                <div class="form-group">
                    <label for="cvv">CVV</label>
                    <input type="number" id="cvv" name="cvv"/>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    </div>
    );
};

export default Registration;