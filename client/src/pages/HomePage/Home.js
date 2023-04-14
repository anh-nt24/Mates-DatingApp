import logo from '../../images/love-icon.jpg';
import model1 from '../../images/model1.webp';
import model2 from '../../images/model2.jpg';
import model3 from '../../images/model3.jpg';
import model4 from '../../images/model4.jpg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Home = ({authToken}) => {

    const handleClick = () => {
        console.log('clicked');
    }
    return (
        <>
            <div className="homepage-body w-100">
                <Container style={{height: "560px"}}>
                    <Row className="justify-content-center w-100">
                        <Col sm="10">
                            <img className="mx-auto hp-icon" src={logo} alt="" />
                            <p className="description">Seek your match with ease date with Mates, where love meets technology</p>
                        </Col>
                    </Row>
                    <Row>
                        <button className="account-button" onClick={handleClick}>
                            {authToken ? 'Signout' : 'Create an account'}
                        </button>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className="pt-5">
                    <Col className="text-center">
                        <img className="model-img" src={model1} alt="" />
                        <p className="m-0" style={{fontSize: "2.8rem"}}>Ann, 21</p>
                        <p className="m-0" style={{color: "#888"}}>Berlin, Germany</p>
                    </Col>
                    <Col className=" text-center">
                        <img className="model-img" src={model2} alt="" />
                        <p className="m-0" style={{fontSize: "1.8rem"}}>Tera, 18</p>
                        <p className="m-0" style={{color: "#888"}}>Berlin, Germany</p>
                    </Col>
                    <Col className=" text-center">
                        <img className="model-img" src={model3} alt="" />
                        <p className="m-0" style={{fontSize: "1.8rem"}}>Julian, 33</p>
                        <p className="m-0" style={{color: "#888"}}>Texas, Ameria</p>
                    </Col>
                    <Col className=" text-center">
                        <img className="model-img" src={model4} alt="" />
                        <p className="m-0" style={{fontSize: "1.8rem"}}>Ralph, 35</p>
                        <p className="m-0" style={{color: "#888"}}>Leiden, Netherlands</p>
                    </Col>
                </Row>
            </Container>
            <div className='homepage-body mt-5 pb-5'>
                <Container>
                    <Row className="pt-5">
                        <Col md="4" className='px-2'>
                            <div className="card card-custom zoom">
                                <div className="px-2 d-flex justify-content-between">
                                    <h5 style={{marginBottom: "-5px"}}>Cristine and Robert</h5>
                                    <i style={{fontSize: "1.5rem"}} class='fas fa-paperclip'></i>
                                </div>
                                <hr />
                                <p className='px-3'>I met my fiancé on Mates during the quarantine for COVID. She is from Lafayette, Indiana and I am from Cleveland, Ohio. We are both Christians who fell madly in love.</p>
                            </div>
                        </Col>
                        <Col md="4" className='px-2'>
                            <div className="card card-custom zoom">
                                <div className="px-2 d-flex justify-content-between">
                                    <h5 style={{marginBottom: "-5px"}}>Jolie and James</h5>
                                    <i style={{fontSize: "1.5rem"}} class='fas fa-paperclip'></i>
                                </div>
                                <hr />
                                <p className='px-3'>I was feeling lonely back in my hometown because most of my friends had started romantic relationships while I was abroad. We both decided to download Mates and see what happened. </p>
                                <p className='px-3'>
            Without the app we may have never met and embarked on this wild, wonderful journey. Thank you for bringing us and so many other couples together around the world. I will forever be grateful.
                                </p>
                            </div>
                        </Col>
                        <Col md="4" className='px-2'>
                            <div className="card card-custom zoom">
                                <div className="px-2 d-flex justify-content-between">
                                    <h5 style={{marginBottom: "-5px"}}>Sean</h5>
                                    <i style={{fontSize: "1.5rem"}} class='fas fa-paperclip'></i>
                                </div>
                                <hr />
                                <p className='px-3'>I was feeling lonely back in my hometown because most of my friends had started romantic relationships while I was abroad. We both decided to download Mates and see what happened.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}



export default Home;