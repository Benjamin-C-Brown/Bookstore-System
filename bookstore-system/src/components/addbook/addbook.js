import React from 'react';
import NavBar from '../navbar/NavBar.js';
import './addbook.css';

const bookID = 16; // eventually this should be autoincremented based on the number of books in the database
const bookURL = "viewdetails/" + bookID;

const AddBook = () => {
    return (
        <div>
            <NavBar />
            <div class="container">
                <h2>Enter new book information</h2>
                <form action={bookURL} method="get">
                    <div class="formgroup">
                        <label for="isbn">ISBN</label>
                        <input type="number" id="isbn" name="isbn" required/>
                    </div>
                    <div class="formgroup">
                        <label for="title">Title</label>
                        <input type="text" id="title" name="title" required/>
                    </div>
                    <div class="formgroup">
                        <label for="author">Author</label>
                        <input type="text" id="author" name="author" required/>
                    </div>
                    <div class="formgroup">
                        <label for="genre">Genre</label>
                        <input type="text" id="genre" name="genre" required/>
                    </div>
                    <div class="formgroup">
                        <label for="price">Price</label>
                        <input type="number" id="price" name="price" required/>
                    </div>
                    <div class="formgroup">
                        <label for="description">Description</label>
                        <input type="text" id="description" name="description" size="3" required/>
                    </div>
                    <div class="formgroup">
                        <label for="image">Image</label>
                        <input type="url" id="image" name="image" required/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
};

export default AddBook;