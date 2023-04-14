import Button from 'react-bootstrap/Button';
import logo from '../../images/love-icon.jpg';
import model1 from '../../images/model1.webp';
import model2 from '../../images/model2.jpg';
import model3 from '../../images/model3.jpg';
import model4 from '../../images/model4.jpg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const Icon = styled.i`
    position: absolute;
    top: 1rem;
    color: #e7e7e8;
    right: 10%;
    font-size: 2em;
`;

const CardTable = styled.table`
    font-size: 1.1rem;
    height: 200px;
    width: 80%;
`;

const About = ({authToken}) => {

    const handleClick = () => {
        console.log('clicked');
    }
    return (
        <>
            <Container style={{marginTop: "30px"}}>
                <Row>
                    <h2>This app</h2>
                    <Col className="text-center" lg="4" md="6">
                        <i className="icon-as-img fa fas fa-search"></i>
                        <h3 className='explore-heading'>Explore</h3>
                        <p className='explore-desc'>You can seek people fit your ideal role model just by providing us a photo</p>
                    </Col>
                    <Col className="text-center" lg="4" md="6">
                        <i className="icon-as-img fa fa-sharp fa-regular fa-comments"></i>
                        <h3 className='explore-heading'>Communication</h3>
                        <p className='explore-desc'>Join a message for better understanding each other</p>
                    </Col>
                    <Col className="text-center" lg="4" md="6">
                        <i className="icon-as-img fa fa-solid fa-badge-check"></i>
                        <h3 className='explore-heading'>Verification</h3>
                        <p className='explore-desc'>All members are personally confirmed by our staff to prove they are real</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <hr />
                <Row>
                    <h2>Developer</h2>
                    <Col md="6" className='m-auto'>
                        <div class="mt-3">
                            <div class="card zoom" style={{boxShadow: "1px 1px 8px 0 grey"}}>
                                <div className="card-body position-relative">
                                    <Icon className="fa fa-pen fa-xs edit"></Icon>
                                    <CardTable>
                                        <tbody>
                                            <tr>
                                                <td>Name</td>
                                                <td>:</td>
                                                <td>Anh T. Nguyen</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>:</td>
                                                <td>theanh24013@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Address</td>
                                                <td>:</td>
                                                <td>Vietnam</td>
                                            </tr>
                                            <tr>
                                                <td>Interest research</td>
                                                <td>:</td>
                                                <td>Computer vision, ML, Data</td>
                                            </tr>
                                            <tr>
                                                <td>Major</td>
                                                <td>:</td>
                                                <td>Software Engineering</td>
                                            </tr>
                                            <tr>
                                                <td>Skill</td>
                                                <td>:</td>
                                                <td>Python, Javascript, Java</td>
                                            </tr>
                                        </tbody>
                                    </CardTable>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr />
        </>
    );
}

export default About;