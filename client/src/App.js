import HomePage from './pages/HomePage';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import About from './pages/HomePage/About';
import SignUp from './pages/SignIn/SignUp';
import Authentication from './components/Authentic';
import Activity from './pages/Activity';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<HomePage />} >
                    <Route index element={<Home/> }></Route>
                    <Route path='about' element={<About />} />
                </Route>
                <Route element={Authentication}>
                    <Route path="/activity/*" element={<Activity />}>
                        {/* <Route index element={<ScheduleWeek />} />
                        <Route path='storage' element={<Storage />} /> */}
                    </Route>
                </Route>
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;