import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import New from './pages/New';
import Read from './pages/Read';
import { BookProvider } from './context/BookContext';

function App() {
    return (
        <BookProvider>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/new" element={<New />} />
                    <Route path="/read/:id" element={<Read />} />
                </Routes>
        </BookProvider>
    );
}
ㅅㄷㄴㅅ
export default App;
