import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import SearchBar from '../../../components/SearchBar';
import { useState } from 'react';
import ExploreArea from '../../../components/ExploreArea';

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
                        {!isSearch  && <a href="" onClick={handleShow}><i class="fa fa-solid fa-arrow-down"></i></a>}
                        {isSearch  && (
                            <div>
                                <a href="" onClick={handleShow}><i class="fa fa-solid fa-arrow-up"></i></a>
                                <SearchBar/>
                            </div>)
                        }
                    </Row>
                    <Row>
                        <h2>People near you</h2>
                        <ExploreArea/>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Explore;
