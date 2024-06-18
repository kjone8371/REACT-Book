import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookContext } from '../context/BookContext';

const Read = () => {
    const { id } = useParams();
    const { books, updateBook } = useContext(BookContext);
    const book = books.find((book) => book.id === parseInt(id));

    // State 초기화
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [publisher, setPublisher] = useState(book.publisher);
    const [pages, setPages] = useState(book.pages);
    const [date, setDate] = useState(book.date);
    const [summary, setSummary] = useState(book.summary);
    const navigate = useNavigate();

    // 취소 버튼 클릭 시 처리
    const handleCancel = () => {
        navigate('/');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 업데이트된 독서록 정보 전달
        updateBook({ id: book.id, title, author, publisher, pages, date, summary });
        // 메인 페이지로 이동
        navigate('/');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">독서록 읽기</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">제목</label>
                    <input type="text" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 mb-2 w-full" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">저자</label>
                    <input type="text" placeholder="저자" value={author} onChange={(e) => setAuthor(e.target.value)} className="border p-2 mb-2 w-full" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">출판사</label>
                    <input type="text" placeholder="출판사" value={publisher} onChange={(e) => setPublisher(e.target.value)} className="border p-2 mb-2 w-full" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">페이지 수</label>
                    <input type="number" placeholder="페이지 수" value={pages} onChange={(e) => setPages(e.target.value)} className="border p-2 mb-2 w-full" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">읽은 날짜</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border p-2 mb-2 w-full" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">줄거리 및 감상</label>
                    <textarea placeholder="줄거리 및 감상" value={summary} onChange={(e) => setSummary(e.target.value)} className="border p-2 mb-2 w-full" required />
                </div>
                <div className="flex justify-between items-center">
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">완료</button>
                    <button type="button" onClick={handleCancel} className="bg-gray-300 text-gray-700 p-2 rounded">취소</button>
                </div>
            </form>
        </div>
    );
};

export default Read;
