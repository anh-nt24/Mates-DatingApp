import styled from 'styled-components';
import logo from '../images/logo.png';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
    width: 100%;
    background-color: var(--primary-bg-color);
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

const Login = styled.button`
    color: #000;
    font-size: 1.3rem;
    background-color: #fff;
    padding: 1px .5rem;
    &:hover {
        background-color: #eeff;
    }
`;

const NavItem = styled.span`
    color: #fff;
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
`;

const NavBar = ({authToken}) => {
    return (
        <Nav>
            <Container className='d-flex justify-content-between align-items-center'>
                <div>
                    <LogoImg src={logo} alt="" />
                </div>
                <div className='me-auto ms-4'>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'mx-3 nav-active link-style-none' : 'mx-3 link-style-none'}>Home</NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'mx-3 nav-active link-style-none' : 'mx-3 link-style-none'}>About</NavLink>
                </div>
                <div>
                    <Language className='btn pe-3'><i className="fa fa-thin fa-language"></i></Language>
                    {!authToken && <Login className='btn'>Log in</Login>}
                </div>
            </Container>
        </Nav>
    );
}

export default NavBar;