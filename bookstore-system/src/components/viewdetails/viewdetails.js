// ('1', 'To Kill a Mockingbird', 'Fiction', 'Harper Lee', 4.27, '10.99', 'http://localhost:8000/images/tokillamockingbird.jpg'),
// ('2', '1984', 'Dystopian', 'George Orwell', 4.17, '9.99', 'http://localhost:8000/images/1984.jpg'),
// ('3', 'The Great Gatsby', 'Classic', 'F. Scott Fitzgerald', 3.91, '8.99', 'http://localhost:8000/images/thegreatgatsby.jpg'),
// ('4', 'Pride and Prejudice', 'Romance', 'Jane Austen', 4.25, '11.99', 'http://localhost:8000/images/prideandprejudice.jpg'),
// ('5', 'The Catcher in the Rye', 'Classic', 'J.D. Salinger', 3.80, '10.50', 'http://localhost:8000/images/thecatcherintherye.jpg'),
// ('6', 'The Hobbit', 'Fantasy', 'J.R.R. Tolkien', 4.27, '12.99', 'http://localhost:8000/images/thehobbit.jpg'),
// ('7', 'Moby Dick', 'Adventure', 'Herman Melville', 3.49, '15.00', 'http://localhost:8000/images/mobydick.jpg'),
// ('8', 'War and Peace', 'Historical', 'Leo Tolstoy', 4.11, '20.00', 'http://localhost:8000/images/warandpeace.jpg'),
// ('9', 'Crime and Punishment', 'Psychological', 'Fyodor Dostoevsky', 4.21, '13.99', 'http://localhost:8000/images/crimeandpunishment.jpg'),
// ('10', 'The Brothers Karamazov', 'Philosophical', 'Fyodor Dostoevsky', 4.32, '14.99', 'http://localhost:8000/images/thebrotherskaramazov.jpg'),
// ('11', 'The Alchemist', 'Adventure', 'Paulo Coelho', 3.89, '9.99', 'http://localhost:8000/images/thealchemist.jpg'),
// ('12', 'Brave New World', 'Science Fiction', 'Aldous Huxley', 3.99, '10.99', 'http://localhost:8000/images/bravenewworld.jpg'),
// ('13', 'Jane Eyre', 'Gothic', 'Charlotte Brontë', 4.12, '11.50', 'http://localhost:8000/images/janeeyre.jpg'),
// ('14', 'Wuthering Heights', 'Romance', 'Emily Brontë', 3.85, '12.00', 'http://localhost:8000/images/wutheringheights.jpg'),
// ('15', 'The Odyssey', 'Epic', 'Homer', 3.75, '14.99', 'http://localhost:8000/images/theodyssey.jpg');

import React from 'react';
import './viewdetails.css';
import NavBar from '../navbar/NavBar.js';
import { useEffect } from "react";

const ViewDetails = () => {
     const books = [
        {id: '1', title: 'To Kill a Mockingbird', genre: 'Fiction', author: 'Harper Lee', rating: '4.27', price: '10.99', img: '/Book Images/mockinbird.jpg'},
        {id: '2', title: '1984', genre: 'Dystopian', author: 'George Orwell', rating: '4.17', price: '9.99', img: '/Book Images/1984.jpg'},
        {id: '3', title: 'The Great Gatsby', genre: 'Classic', author: 'F. Scott Fitzgerald', rating: '3.91', price: '8.99', img: '/Book Images/gatsby.jpg'},
        {id: '4', title: 'Pride and Prejudice', genre: 'Romance', author: 'Jane Austen', rating: '4.25', price: '11.99', img: '/Book Images/PrideandPrejudice.jpg'},
        {id: '5', title: 'The Catcher in the Rye', genre: 'Classic', author: 'J.D. Salinger', rating: '3.80', price: '10.50', img: '/Book Images/catcher.jpg'},
        {id: '6', title: 'The Hobbit', genre: 'Fantasy', author: 'J.R.R. Tolkien', rating: '4.27', price: '12.99', img: '/Book Images/hobbit.jpg'},
        {id: '7', title: 'Moby Dick', genre: 'Adventure', author: 'Herman Melville', rating: '3.49', price: '15.00', img: '/Book Images/mobydick.jpg'},
        {id: '8', title: 'War and Peace', genre: 'Historical', author: 'Leo Tolstoy', rating: '4.11', price: '20.00', img: '/Book Images/warandpeace.jpg'},
        {id: '9', title: 'Crime and Punishment', genre: 'Psychological', author: 'Fyodor Dostoevsky', rating: '4.21', price: '13.99', img: '/Book Images/crimeandpunishment.jpg'},
        {id: '10', title: 'The Brothers Karamazov', genre: 'Philosophical', author: 'Fyodor Dostoevsky', rating: '4.32', price: '14.99', img: '/Book Images/thebrotherskaramazov.jpg'},
        {id: '11', title: 'The Alchemist', genre: 'Adventure', author: 'Paulo Coelho', rating: '3.89', price: '9.99', img: '/Book Images/alchemist.jpg'},
        {id: '12', title: 'Brave New World', genre: 'Science Fiction', author: 'Aldous Huxley', rating: '3.99', price: '10.99', img: '/Book Images/bravenewworld.jpg'},
        {id: '13', title: 'Jane Eyre', genre: 'Gothic', author: 'Charlotte Brontë', rating: '4.12', price: '11.50', img: '/Book Images/janeeyre.jpg'},
        {id: '14', title: 'Wuthering Heights', genre: 'Romance', author: 'Emily Brontë', rating: '3.85', price: '12.00', img: '/Book Images/wuthering_heights.jpg'},
        {id: '15', title: 'The Odyssey', genre: 'Epic', author: 'Homer', rating: '3.75', price: '14.99', img: '/Book Images/odysessy.jpg'}
    ];

    let currentURL = document.URL;
    console.log(document.URL);
    let id = (currentURL.substring(currentURL.indexOf('details/') + 8));
    console.log(id);
    const book = books.find(book => book.id === id.toString());
    return (
        <div>
            <NavBar />
            <div class="bookdetails">
                <img src={book.img} alt={book.title} height="400px"/>
                <h3>{book.title}</h3>
                <p>{book.genre}</p>
                <p>Price: {book.price}$</p>
                <p>Rating: {book.rating} / 5 ⭐</p>
                <p><a href="../cart">Add to cart</a></p>
            </div>
        </div>
    );
}

export default ViewDetails;