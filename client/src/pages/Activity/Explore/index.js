import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import SearchBar from '../../../components/SearchBar';
import { useState } from 'react';
import ExploreCard from '../../../components/ExploreCard';

const Explore = () => {
    const [isSearch, setSearch] = useState(false);

    const handleShow = (e) => {
        e.preventDefault();
        setSearch(!isSearch);
    }

    return (
        <Container>
            <Row>
                <Col md="9" className='mx-auto my-3'>
                    <Row>
                        <h2>Seek people meet your style</h2>
                        {!isSearch  && <button type="button" className='btn' onClick={handleShow}><i className="fa fa-solid fa-arrow-down"></i></button>}
                        {isSearch  && (
                            <div>
                                <button type="button" className='btn' onClick={handleShow}><i className="fa fa-solid fa-arrow-up"></i></button>
                                <SearchBar/>
                            </div>)
                        }
                    </Row>
                    <Row className='Swipe'>
                        <h2>People near you</h2>
                        <ExploreCard/>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Explore;
