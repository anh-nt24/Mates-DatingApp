import styled from 'styled-components';
import logo from '../../images/logo.png';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import LoginModal from '../Modals/Login';
import avatar from '../../images/model2.jpg';

const Nav = styled.nav`
    width: 100%;
    background-color: rgb(252,0,109);
`;

const LogoImg = styled.img`
    width: 200px;
    height: 70px;
`;

const Language = styled.button`
    color: #fff;
    font-size: 1.5rem;
    &:hover {
        color: #fff;
    }
`;

const LoginButton = styled.button`
    color: #000;
    font-size: 1.3rem;
    background-color: #fff;
    padding: 1px .5rem;
    &:hover {
        background-color: #eeff;
    }
`;

const NavBar = ({authToken}) => {
    const [isOpened, setOpenning] = useState(false);
    const handleClick = () => {
        setOpenning(true);
    }
    return (
        <Nav>
            <Container className='d-flex justify-content-between align-items-center'>
                <div>
                    <LogoImg src={logo} alt="" />
                </div>
                {
                    !authToken &&
                    <div className='me-auto ms-4'>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'mx-3 nav-active link-style-none' : 'text-muted mx-3 link-style-none'}>Home</NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'mx-3 nav-active link-style-none' : 'text-muted mx-3 link-style-none'}>About</NavLink>
                    </div>
                }
                {
                    authToken &&
                    <div className='me-auto ms-4'>
                        <NavLink to='explore' className={({ isActive }) => isActive ? 'mx-3 nav-active link-style-none' : 'text-muted mx-3 link-style-none'}>Explore</NavLink>
                        <NavLink to='chat' className={({ isActive }) => isActive ? 'mx-3 nav-active link-style-none' : 'text-muted mx-3 link-style-none'}>Message</NavLink>
                    </div>
                }
                <div>
                    {
                        !authToken &&
                        <Language className='btn pe-3'><i className="fa fa-thin fa-language"></i></Language> &&
                        <LoginButton onClick={handleClick} className='btn'>Log in</LoginButton>
                    }
                    {
                        authToken && 
                        <div onClick={handleClick}>
                            <img width={"50px"} style={{borderRadius: "50px"}} src={avatar} alt="" />
                        </div>
                    }
                </div>
            </Container>

            {isOpened && (<LoginModal setOpenning={setOpenning} isOpened={isOpened}/>)}
        </Nav>
    );
}

export default NavBar;