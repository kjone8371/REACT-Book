import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from '../context/BookContext';

const Main = () => {
    const { books } = useContext(BookContext);

    // 등록 시간 (순)으로 독서록 정렬
    const sortedBooks = [...books].sort((a, b) => b.timestamp - a.timestamp);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Book Report</h1>
            <Link to="/new" className="bg-blue-500 text-white p-2 rounded mb-4 inline-block">작성하기</Link>
            <ul className="mt-4">
                {sortedBooks.map((book) => (
                    <li key={book.id} className="border-b py-2">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-bold">{book.title}</h3>
                                <p className="text-sm text-gray-500">등록일: {book.date}</p>
                            </div>
                            <Link to={`/read/${book.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">보기</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Main;
