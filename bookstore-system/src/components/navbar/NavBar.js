import React from 'react';
import './navbar.css';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <div class="navbar">
            <ul>
                <li><a href="/" class="navlink">Home</a></li>
                <li><a href="login" class="navlink">Login</a></li>
                <li><a href="cart" class="navlink">View cart</a></li>
                <li>
                <form class="searchform" action="search" method="get">
                    <input type="text" id="searchtext" name="searchtext" placeholder="Search books..."/>
                    <input type="image" src="searchicon.png" alt="Search" height="40px"/>
                </form>
                </li>
                <li><a href="profile"><img src="profile-icon-9.png" alt="" height="40px"/></a></li>

            </ul>
        </div>
    );
};

export default NavBar;