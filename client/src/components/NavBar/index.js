import styled from 'styled-components';
import logo from '../../images/logo.png';
import Container from 'react-bootstrap/Container';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginModal from '../Modals/Login';
import axios from 'axios';
import { useEffect } from 'react';
import { GetUserInfo } from '../../api/UserApi';
import blankProfile from '../../images/blank-profile.webp';
import { useCookies } from 'react-cookie';

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

const Username = styled.span`
    color: #fff;
    font-size: 1.3rem;
    padding-left: 7px;
    font-weight: bolder;
`;

const NavBar = ({authToken}) => {
    const [name, setName] = useState();
    const [avatar, setAvatar] = useState();
    useEffect(() => {
        if (authToken) {
            const getUserData = async () => {
                const response = await GetUserInfo(authToken)
                if (response.status === 200) {
                    const data = response.response;
                    setName(data.name);
                    fetch(data.image)
                        .then((response) => response.blob())
                            .then((data) => {
                                setAvatar(URL.createObjectURL(data));
                            });
                }
            }
            getUserData();
        }
    }, []);


    const [isOpened, setOpenning] = useState(false);
    const handleClick = () => {
        setOpenning(true);
    }

    const [cookie, setCookie, removeCookie] = useCookies();
    let navigate = useNavigate();
    const handleLogout = () => {
        setCookie('token', '');
        navigate('/');

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
                        <NavLink to='/activity/' className={({ isActive }) => isActive ? 'mx-3 nav-active link-style-none' : 'text-muted mx-3 link-style-none'}>Explore</NavLink>
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
                        <div onClick={handleLogout} style={{pointer: "cursor"}}>
                            <img width={"50px"} height={"50px"} style={{borderRadius: "50px"}} src={avatar ? avatar : blankProfile} alt="" />
                            <Username>{ name }</Username>
                        </div>
                    }
                </div>
            </Container>

            {isOpened && (<LoginModal setOpenning={setOpenning} isOpened={isOpened}/>)}
        </Nav>
    );
}

export default NavBar;