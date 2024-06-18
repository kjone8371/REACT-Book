import React, { createContext, useState } from 'react';

const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const addBook = (book) => {
        setBooks([...books, { ...book, id: books.length, timestamp: Date.now() }]);
    };

    const updateBook = (updatedBook) => {
        setBooks((prevBooks) =>
            prevBooks.map((book) => (book.id === updatedBook.id ? updatedBook : book))
        );
    };

    return (
        <BookContext.Provider value={{ books, addBook, updateBook }}>
            {children}
        </BookContext.Provider>
    );
};

export { BookContext, BookProvider };
