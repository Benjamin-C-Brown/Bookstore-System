import React from 'react';
import './profile.css';
import NavBar from '../navbar/NavBar.js';

const Profile = () => {
  return (
    <div>
      <NavBar/>
      <div class="outer">
          <div class="content">
            <h1>Your profile</h1>
            <div class="personal">
              <div class="line">
                <label class="label">Name:</label>
                <span>
                  <label class="value">Benjamin Brown</label>
                  <label>(<a href="">Edit</a>)</label>
                </span>
              </div>
              <div class="line">
                <label class="label">Email:</label>
                <label class="value">benjaminbrownforte@gmail.com</label>
              </div>
              <div class="line">
                <label class="label">Password</label>
                <span>
                  <label class="value">************</label>
                  <label>(<a href="">Edit</a>)</label>
                </span>
              </div>
            </div>
            <hr/>
            <div class="address">
              <div class="line">
                <label class="label">Address:</label>
                <label class="value">88, Street Avenue</label>
              </div>
              <div class="line">
                <label></label>
                <label class="value">Ringgold, GA 11111</label>
              </div>
              <div class="buttondiv">
                <button>Edit address information</button>
              </div>
            </div>
            <hr/>
            <div class="payment">
              <div class="line">
                <label class="label">Credit card type:</label>
                <label class="value">VISA</label>
              </div>
              <div class="line">
                <label class="label">Credit card number:</label>
                <label class="value">1111-1111-1111-****</label>
              </div>
              <div class="line">
                <label class="label">Expiration date:</label>
                <label class="value">06/27</label>
              </div>
              <div class="line">
                <label class="label">CVV:</label>
                <label class="value">***</label>
              </div>
              <div class="buttondiv">
                <button>Edit payment information</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Profile;