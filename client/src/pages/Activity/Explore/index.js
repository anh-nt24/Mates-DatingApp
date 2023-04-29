import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import SearchBar from '../../../components/SearchBar';
import { useState } from 'react';
import ExploreCard from '../../../components/ExploreCard';
import { useEffect } from 'react';
import { GetNearestUsers } from '../../../api/ActivityApi';
import { useCookies } from 'react-cookie';

const Explore = () => {
    const [isSearch, setSearch] = useState(false);
    const [token, setToken] = useCookies();
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const getUsers = async () => {
            const response = await GetNearestUsers(token.token);
            if (response.status === 200) {
                var data = response.response;
                const url = "http://localhost:5000/";
                const promises = [];
                for (const user of data) {
                    for (let i = 0; i < user.image.length; i++) {
                        const img_response = await fetch(url + user.image[i]);
                        user.image[i] = URL.createObjectURL(await img_response.blob());
                    }
                    user.isLoaded = true;
                    promises.push(Promise.resolve());
                }
                await Promise.all(promises);
                return data;
            }
        };

        (async () => {
            var data = await getUsers();
            data = data.reverse();
            setUsers(data.filter((item) => item.hasOwnProperty("isLoaded")));
        })();
    }, []);

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
                        <ExploreCard users={users}/>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Explore;
