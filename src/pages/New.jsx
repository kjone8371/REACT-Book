// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { BookContext } from '../context/BookContext';
//
// const New = () => {
//     const [title, setTitle] = useState('');
//     const [author, setAuthor] = useState('');
//     const [publisher, setPublisher] = useState('');
//     const [pages, setPages] = useState('');
//     const [date, setDate] = useState('');
//     const [summary, setSummary] = useState('');
//     const { addBook } = useContext(BookContext);
//     const navigate = useNavigate();
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         addBook({ title, author, publisher, pages, date, summary });
//         navigate('/');
//     };
//     const handleCancel = () => {
//         navigate('/');
//     };
//
//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">독서록 작성</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label className="block text-gray-700 font-bold mb-3">제목</label>
//                     <input type="text" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)}
//                            className="border p-2 mb-2 w-100" required/>
//                 </div>
//                 <div className="mb-3">
//                     <label className="block text-gray-700 font-bold mb-3">저자</label>
//                     <input type="text" placeholder="저자" value={author} onChange={(e) => setAuthor(e.target.value)}
//                            className="border p-2 mb-2 w-100" required/>
//                 </div>
//                 <div className="mb-3">
//                     <label className="block text-gray-700 font-bold mb-3">출판사</label>
//                     <input type="text" placeholder="출판사" value={publisher}
//                            onChange={(e) => setPublisher(e.target.value)}
//                            className="border p-2 mb-2 w-100" required/>
//                 </div>
//                 <div className="mb-3">
//                     <label className="block text-gray-700 font-bold mb-3">페이지 수</label>
//                     <input type="number" placeholder="페이지 수" value={pages} onChange={(e) => setPages(e.target.value)}
//                            className="border p-2 mb-2 w-100" required/>
//                 </div>
//                 <div className="mb-3">
//                     <label className="block text-gray-700 font-bold mb-3">읽은 날짜</label>
//                     <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
//                            className="border p-2 mb-2 w-100" required/>
//                 </div>
//                 <div className="mb-3">
//                     <label className="block text-gray-700 font-bold mb-3">줄거리 및 감상</label>
//                     <textarea placeholder="줄거리 및 감상" value={summary} onChange={(e) => setSummary(e.target.value)}
//                               className="border p-2 mb-2 w-52 h-44" required/>
//                 </div>
//
//                 <button type="submit" className="bg-blue-500 text-white p-2 rounded">완료</button>
//                 <button type="button" onClick={handleCancel} className="bg-gray-300 text-gray-800 p-2 rounded">취소
//                 </button>
//             </form>
//         </div>
//     );
// };
//
// export default New;

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
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center">독서록 작성</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 flex items-center justify-center">
                        <label className="block text-gray-700 font-bold mb-3 w-32 text-right px-4">제목</label>
                        <input type="text" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 mb-2 flex-1" required/>
                    </div>
                    <div className="mb-4 flex items-center justify-center">
                        <label className="block text-gray-700 font-bold mb-3 w-32 text-right px-4">저자</label>
                        <input type="text" placeholder="저자" value={author} onChange={(e) => setAuthor(e.target.value)} className="border p-2 mb-2 flex-1" required/>
                    </div>
                    <div className="mb-4 flex items-center justify-center">
                        <label className="block text-gray-700 font-bold mb-3 w-32 text-right px-4">출판사</label>
                        <input type="text" placeholder="출판사" value={publisher} onChange={(e) => setPublisher(e.target.value)} className="border p-2 mb-2 flex-1" required/>
                    </div>
                    <div className="mb-4 flex items-center justify-center">
                        <label className="block text-gray-700 font-bold mb-3 w-32 text-right px-4">페이지 수</label>
                        <input type="number" placeholder="페이지 수" value={pages} onChange={(e) => setPages(e.target.value)} className="border p-2 mb-2 flex-1" required/>
                    </div>
                    <div className="mb-4 flex items-center justify-center">
                        <label className="block text-gray-700 font-bold mb-3 w-32 text-right px-4">읽은 날짜</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border p-2 mb-2 flex-1" required/>
                    </div>
                    <div className="mb-4 flex items-center justify-center">
                        <label className="block text-gray-700 font-bold mb-3 w-32 text-right px-4">줄거리 및 감상</label>
                        <textarea placeholder="줄거리 및 감상" value={summary} onChange={(e) => setSummary(e.target.value)} className="border p-2 mb-2 flex-1 h-32" required/>
                    </div>
                    <div className="flex justify-between">
                        <button type="button" onClick={handleCancel} className="bg-gray-300 text-gray-800 py-2 px-4 rounded">취소</button>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">완료</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default New;
