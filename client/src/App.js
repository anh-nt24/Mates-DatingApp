import HomePage from './pages/HomePage';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import About from './pages/HomePage/About';
import SignUp from './pages/SignIn/SignUp';
import Authentication from './components/Authentic';
import Activity from './pages/Activity';
import Explore from './pages/Activity/Explore/index';
import Conversation from './pages/Activity/Conversation';
import Profile from './pages/Profile';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<HomePage />} >
                    <Route index element={<Home/> }></Route>
                    <Route path='about' element={<About />} />
                </Route>
                {/* <Route element={Authentication}> */}
                    <Route path='/profile' element={<Profile />}></Route>
                    <Route path="/activity/*" element={<Activity />}>
                        <Route index element={<Explore />} />
                        <Route path='chat' element={<Conversation />} />
                    </Route>
                {/* </Route> */}
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;