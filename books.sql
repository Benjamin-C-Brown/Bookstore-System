show databases;
create database SE;
use SE;
CREATE TABLE IF NOT EXISTS Book (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    bookTitle VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    bookRating DOUBLE,
    price DECIMAL(10, 2),
    coverPageURL VARCHAR(255)
);
INSERT INTO Book (ID, bookTitle, genre, author, bookRating, price, coverPageURL) VALUES
('1', 'To Kill a Mockingbird', 'Fiction', 'Harper Lee', 4.27, '10.99', 'http://localhost:8000/images/tokillamockingbird.jpg'),
('2', '1984', 'Dystopian', 'George Orwell', 4.17, '9.99', 'http://localhost:8000/images/1984.jpg'),
('3', 'The Great Gatsby', 'Classic', 'F. Scott Fitzgerald', 3.91, '8.99', 'http://localhost:8000/images/thegreatgatsby.jpg'),
('4', 'Pride and Prejudice', 'Romance', 'Jane Austen', 4.25, '11.99', 'http://localhost:8000/images/prideandprejudice.jpg'),
('5', 'The Catcher in the Rye', 'Classic', 'J.D. Salinger', 3.80, '10.50', 'http://localhost:8000/images/thecatcherintherye.jpg'),
('6', 'The Hobbit', 'Fantasy', 'J.R.R. Tolkien', 4.27, '12.99', 'http://localhost:8000/images/thehobbit.jpg'),
('7', 'Moby Dick', 'Adventure', 'Herman Melville', 3.49, '15.00', 'http://localhost:8000/images/mobydick.jpg'),
('8', 'War and Peace', 'Historical', 'Leo Tolstoy', 4.11, '20.00', 'http://localhost:8000/images/warandpeace.jpg'),
('9', 'Crime and Punishment', 'Psychological', 'Fyodor Dostoevsky', 4.21, '13.99', 'http://localhost:8000/images/crimeandpunishment.jpg'),
('10', 'The Brothers Karamazov', 'Philosophical', 'Fyodor Dostoevsky', 4.32, '14.99', 'http://localhost:8000/images/thebrotherskaramazov.jpg'),
('11', 'The Alchemist', 'Adventure', 'Paulo Coelho', 3.89, '9.99', 'http://localhost:8000/images/thealchemist.jpg'),
('12', 'Brave New World', 'Science Fiction', 'Aldous Huxley', 3.99, '10.99', 'http://localhost:8000/images/bravenewworld.jpg'),
('13', 'Jane Eyre', 'Gothic', 'Charlotte Brontë', 4.12, '11.50', 'http://localhost:8000/images/janeeyre.jpg'),
('14', 'Wuthering Heights', 'Romance', 'Emily Brontë', 3.85, '12.00', 'http://localhost:8000/images/wutheringheights.jpg'),
('15', 'The Odyssey', 'Epic', 'Homer', 3.75, '14.99', 'http://localhost:8000/images/theodyssey.jpg');
