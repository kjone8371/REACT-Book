
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { BookContext } from '../context/BookContext';
//
// const Main = () => {
//     const { books } = useContext(BookContext);
//
//     // 등록 시간 (순)으로 독서록 정렬
//     const sortedBooks = [...books].sort((a, b) => b.timestamp - a.timestamp);
//
//     return (
//         <div className="flex flex-col justify-center items-center h-screen">
//             <div className="w-64 text-center"> {/* 이 div는 Book Report와 버튼을 동일한 너비로 만듭니다 */}
//                 <h1 className="text-4xl font-bold mb-6">Book Report</h1>
//                 <Link to="/new" className="bg-purple-500 text-white py-1 px-5 rounded-lg mb-4 hover:bg-purple-600 text-xl w-full block text-center">
//                     작성하기
//                 </Link>
//             </div>
//
//             <div className="container mx-auto p-4">
//                 <ul className="mt-4">
//                     {sortedBooks.map((book) => (
//                         <li key={book.id} className="border-b py-2">
//                             <div className="flex justify-between items-center">
//                                 <div>
//                                     <h3 className="text-lg font-bold">{book.title}</h3>
//                                     <p className="text-sm text-gray-500">등록일: {book.date}</p>
//                                 </div>
//                                 <Link to={`/read/${book.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-purple-600">
//                                     보기
//                                 </Link>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//
//         </div>
//     );
// };
//
// export default Main;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from '../context/BookContext';

const Main = () => {
    const { books } = useContext(BookContext);

    // 등록 시간 (순)으로 독서록 정렬
    const sortedBooks = [...books].sort((a, b) => b.timestamp - a.timestamp);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="w-64 text-center bg-white shadow-md p-6 rounded-lg mb-8">
                <h1 className="text-4xl font-bold mb-4 text-purple-800">Book Report</h1>
                <Link to="/new" className="bg-purple-500 text-white py-2 px-6 rounded-lg hover:bg-purple-600 text-xl block w-full">
                    작성하기
                </Link>
            </div>

            <div className="max-w-4xl w-full bg-white shadow-md rounded-lg overflow-hidden">
                <ul className="divide-y divide-gray-200">
                    {sortedBooks.map((book) => (
                        <li key={book.id} className="px-6 py-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-bold">{book.title}</h3>
                                    <p className="text-sm text-gray-500">등록일: {book.date}</p>
                                </div>
                                <Link to={`/read/${book.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                    보기
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Main;
