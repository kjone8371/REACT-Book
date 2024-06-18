import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookContext } from '../context/BookContext';

const New = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [pages, setPages] = useState('');
    const [date, setDate] = useState('');
    const [summary, setSummary] = useState('');
    const { addBook } = useContext(BookContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({ title, author, publisher, pages, date, summary });
        navigate('/');
    };
    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">독서록 작성</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)}
                       className="border p-2 mb-2 w-full" required/>
                <input type="text" placeholder="저자" value={author} onChange={(e) => setAuthor(e.target.value)}
                       className="border p-2 mb-2 w-full" required/>
                <input type="text" placeholder="출판사" value={publisher} onChange={(e) => setPublisher(e.target.value)}
                       className="border p-2 mb-2 w-full" required/>
                <input type="number" placeholder="페이지 수" value={pages} onChange={(e) => setPages(e.target.value)}
                       className="border p-2 mb-2 w-full" required/>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
                       className="border p-2 mb-2 w-full" required/>
                <textarea placeholder="줄거리 및 감상" value={summary} onChange={(e) => setSummary(e.target.value)}
                          className="border p-2 mb-2 w-full" required/>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">완료</button>
                <button type="button" onClick={handleCancel} className="bg-gray-300 text-gray-800 p-2 rounded">취소</button>
            </form>
        </div>
    );
};

export default New;
