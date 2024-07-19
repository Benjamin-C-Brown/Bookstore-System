import React from 'react';
import './homepage.css';
import { useState, useEffect, useContext} from 'react';
import NavBar from '../navbar/NavBar.js';

const HomePage = () => {

  useEffect(() => {
  const topSellers = [
    { title: 'Top Seller 1', imgSrc: 'Book Images/PrideandPrejudice.jpg', id: '4' },
    { title: 'Top Seller 2', imgSrc: 'Book Images/alchemist.jpg', id: '11' },
    { title: 'Top Seller 3', imgSrc: 'Book Images/odysessy.jpg', id: '15' },
    { title: 'Top Seller 4', imgSrc: 'Book Images/gatsby.jpg', id: '3' },
    { title: 'Top Seller 5', imgSrc: 'Book Images/hobbit.jpg', id: '6' },
  ];
  

  const comingSoon = [
    { title: 'Coming Soon 1', imgSrc: 'path_to_image6.jpg', id: '6' },
    { title: 'Coming Soon 2', imgSrc: 'path_to_image7.jpg', id: '7' },
    { title: 'Coming Soon 3', imgSrc: 'path_to_image8.jpg', id: '8' },
    { title: 'Coming Soon 4', imgSrc: 'path_to_image9.jpg', id: '9' },
    { title: 'Coming Soon 5', imgSrc: 'path_to_image10.jpg', id: '10' },
  ];

  function createBookElement(book) {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    bookDiv.innerHTML = `
      <img src="${book.imgSrc}" alt="${book.title}">
      <p>${book.title}</p>
      <p><a href="viewdetails/${book.id}">View details</a></p>
    `;
    return bookDiv;
  }

  const topSellersRow = document.getElementById('top-sellers-row');
  topSellers.forEach(book => {
    topSellersRow.appendChild(createBookElement(book));
  });

  const comingSoonRow = document.getElementById('coming-soon-row');
  comingSoon.forEach(book => {
    comingSoonRow.appendChild(createBookElement(book));
  });
},[]);

  return (
    <div class="homepage">
      <NavBar />
    
    <div class="intro">
      <h1>FIND YOUR FAVORITE BOOK WITH BOOKSTORE-SYSTEM</h1>
      <p>Over 5 million books ready to ship and 3.6 million eBooks ready to download!</p>
    </div>

    <div class="banner">
      <img src="homepageimage.jpeg" alt="Banner"/>
    </div>
    
    <div class="book-section" id="top-sellers">
      <h2>Top Sellers</h2>
      <div class="book-row" id="top-sellers-row">
  
      </div>
    </div>
    
    <div class="book-section" id="coming-soon">
      <h2>Coming Soon</h2>
      <div class="book-row" id="coming-soon-row">

      </div>
    </div>
    </div>
  );
};

export default HomePage;