import HomePageLayout from "../Layouts/HomePage";
import Home from "./Home";
import About from "./About";
import {Routes, Route } from 'react-router-dom';


const HomePage = () => {
    const authToken = false;
    return (
        <HomePageLayout authToken={authToken}>
            <Routes>
                <Route index element={<Home />} />
                <Route path='about' element={<About />} />
            </Routes>
        </HomePageLayout>
      )
}



export default HomePage;