import React from 'react';
import './homepage.css';
import { useState, useEffect, useContext} from 'react';
import NavBar from '../navbar/NavBar.js';

const HomePage = () => {

  useEffect(() => {
  const topSellers = [
    { title: 'Pride and Prejudice', imgSrc: 'Book Images/PrideandPrejudice.jpg', id: '4' },
    { title: 'The Alchemist', imgSrc: 'Book Images/alchemist.jpg', id: '11' },
    { title: 'The Odyssey', imgSrc: 'Book Images/odysessy.jpg', id: '15' },
    { title: 'The Great Gatsby', imgSrc: 'Book Images/gatsby.jpg', id: '3' },
    { title: 'The Hobbit', imgSrc: 'Book Images/hobbit.jpg', id: '6' },
  ];
  

  const comingSoon = [
    { title: 'Animal Farm', imgSrc: 'Book Images/animalfarm.jpg'},
    { title: 'Don Quixote', imgSrc: 'Book Images/donquixote.jpg'},
    { title: 'Dracula', imgSrc: 'Book Images/dracula.jpg'},
    { title: 'Fahrenheit 451', imgSrc: 'Book Images/fahrenheit451.jpg'},
    { title: 'The Hunger Games', imgSrc: 'Book Images/thehungergames.jpg'},
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

  function createBook2Element(book) {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    bookDiv.innerHTML = `
      <img src="${book.imgSrc}" alt="${book.title}">
      <p>${book.title}</p>
    `;
    return bookDiv;
  }

  const topSellersRow = document.getElementById('top-sellers-row');
  topSellers.forEach(book => {
    topSellersRow.appendChild(createBookElement(book));
  });

  const comingSoonRow = document.getElementById('coming-soon-row');
  comingSoon.forEach(book => {
    comingSoonRow.appendChild(createBook2Element(book));
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