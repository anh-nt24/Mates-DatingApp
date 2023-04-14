import HomePage from './pages/HomePage';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import About from './pages/HomePage/About';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<HomePage />} >
                    <Route index element={<Home/> }></Route>
                    <Route path='about' element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;