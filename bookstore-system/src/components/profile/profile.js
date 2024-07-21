import React from 'react';
import './profile.css';
import NavBar from '../navbar/NavBar.js';

function editField(inputID, editID) {
  const input = document.getElementById(inputID);
  const edit = document.getElementById(editID);
  if (edit.innerHTML == "(Edit)") {
    edit.innerHTML = "(Save)";
    input.contentEditable = true;
  } else {
    edit.innerHTML = "(Edit)";
    input.contentEditable = false;
  }
}

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
                  <label id="name" class="value">FirstName LastName</label>
                  <label id="nameEdit" class="edit" onClick={() => editField("name", "nameEdit")}>(Edit)</label>
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
                <span>
                  <label id="address" class="value">88, Street Avenue</label>
                  <label id="addressEdit" class="edit" onClick={() => editField("address", "addressEdit")}>(Edit)</label>
                </span>
              </div>
              <div class="line">
                <label></label>
                <span>
                  <label id="address2" class="value">Ringgold, GA 11111</label>
                  <label id="address2Edit" class="edit" onClick={() => editField("address2", "address2Edit")}>(Edit)</label>
                </span>
              </div>
            </div>
            <hr/>
            <div class="payment">
              <div class="line">
                <label class="label">Credit card type:</label>
                <span>
                  <label id="cardtype" class="value">VISA</label>
                  <label id="cardtypeEdit" class="edit" onClick={() => editField("cardtype", "cardtypeEdit")}>(Edit)</label>
                </span>
              </div>
              <div class="line">
                <label class="label">Credit card number:</label>
                <span>
                  <label id="cardnumber" class="value">1111-1111-1111-****</label>
                  <label id="cardnumberEdit" class="edit" onClick={() => editField("cardnumber", "cardnumberEdit")}>(Edit)</label>
                </span>
              </div>
              <div class="line">
                <label class="label">Expiration date:</label>
                <span>
                  <label id="expiration" class="value">06/27</label>
                  <label id="expirationEdit" class="edit" onClick={() => editField("expiration", "expirationEdit")}>(Edit)</label>
                </span>
              </div>
              <div class="line">
                <label class="label">CVV:</label>
                <span>
                  <label id="cvv" class="value">***</label>
                  <label id="cvvEdit" class="edit" onClick={() => editField("cvv", "cvvEdit")}>(Edit)</label>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Profile;