import React, { useEffect, useState } from 'react';
import './search.css';
import NavBar from '../navbar/NavBar.js';

const Search = () => {
    const [searchType, setSearchType] = useState('title');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('searchtext') || '';
        const type = urlParams.get('searchtype') || 'title';

        setSearchQuery(query);
        setSearchType(type);
    }, []);

    useEffect(() => {
        const searchQueryElement = document.getElementById('search-query');
        if (searchQueryElement) {
            searchQueryElement.textContent = `${searchType.charAt(0).toUpperCase() + searchType.slice(1)}: ${searchQuery}`;
        }

        const recommendedBooks = [
            { title: 'Book 1', imgSrc: 'path_to_image1.jpg' },
            { title: 'Book 2', imgSrc: 'path_to_image2.jpg' },
            { title: 'Book 3', imgSrc: 'path_to_image3.jpg' },
            { title: 'Book 4', imgSrc: 'path_to_image4.jpg' },
            { title: 'Book 5', imgSrc: 'path_to_image5.jpg' },
            { title: 'Book 6', imgSrc: 'path_to_image6.jpg' },
            { title: 'Book 7', imgSrc: 'path_to_image7.jpg' },
            { title: 'Book 8', imgSrc: 'path_to_image8.jpg' },
            { title: 'Book 9', imgSrc: 'path_to_image9.jpg' },
            { title: 'Book 10', imgSrc: 'path_to_image10.jpg' }
        ];

        function createBookElement(book) {
            const bookDiv = document.createElement('div');
            bookDiv.className = 'book';
            bookDiv.innerHTML = `
                <img src="${book.imgSrc}" alt="${book.title}">
                <p>${book.title}</p>
            `;
            return bookDiv;
        }

        // Insert recommended books into the DOM
        const recommendedBooksContainer = document.getElementById('recommended-books');
        const recommendedBooksContainer2 = document.getElementById('recommended-books-2');

        if (recommendedBooksContainer && recommendedBooksContainer2) {
            recommendedBooksContainer.innerHTML = ''; // Clear previous results
            recommendedBooksContainer2.innerHTML = ''; // Clear previous results

            recommendedBooks.slice(0, 5).forEach(book => {
                recommendedBooksContainer.appendChild(createBookElement(book));
            });

            recommendedBooks.slice(5, 10).forEach(book => {
                recommendedBooksContainer2.appendChild(createBookElement(book));
            });
        }
    }, [searchType, searchQuery]);

    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        if (name === 'searchType') {
            setSearchType(value);
        } else if (name === 'searchQuery') {
            setSearchQuery(value);
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const url = new URL(window.location.href);
        url.searchParams.set('searchtext', searchQuery);
        url.searchParams.set('searchtype', searchType);
        window.history.pushState({}, '', url);
        // Optionally, trigger useEffect to re-fetch data based on new search parameters
        const event = new Event('popstate');
        window.dispatchEvent(event);
    };

    return (
        <div>
            <NavBar />
            <div className="outer-container">
                <div className="search-container">
                    <h1>Search Results</h1>
                    <form className="search-options" onSubmit={handleSearchSubmit}>
                        <select name="searchType" value={searchType} onChange={handleSearchChange}>
                            <option value="title">Title</option>
                            <option value="subject">Subject</option>
                            <option value="isbn">ISBN</option>
                            <option value="author">Author</option>
                        </select>
                        <input 
                            type="text" 
                            name="searchQuery"
                            value={searchQuery} 
                            onChange={handleSearchChange} 
                            placeholder="Enter your search query" 
                        />
                        <button type="submit">Search</button>
                    </form>
                    <div className="search-query">
                        <p>Your search query: <strong id="search-query"></strong></p>
                    </div>
                    <div className="book-row" id="recommended-books"></div>
                    <div className="book-row" id="recommended-books-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Search;
