import TinderCard from 'react-tinder-card'
import { useState } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { GetUserInfo } from '../../api/UserApi';
import { GetNearestUsers } from '../../api/ActivityApi';
import axios from 'axios';

var data = []

const ExploreCard = () => {
    const [token, setToken] = useCookies();
    const [lastDirection, setLastDirection] = useState();
    const [users, setUsers] = useState(null);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

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
            console.log(data);
            setUsers(data.filter((item) => item.hasOwnProperty("isLoaded")));
        })();
    }, []);
    return (
        <Row className='mt-lg-4 mt-md-3'>
            <Col lg="3" md="4" className="m-auto swipe-container">
                <div className="card-container">
                {
                    !users && <span>Loading users... Please wait a sec</span>
                }
                {users && users.map((user) =>
                    <TinderCard className='swipe' key={user.name} onSwipe={(dir) => swiped(dir, user.name)} onCardLeftScreen={() => outOfFrame(user.name)}>
                        <div style={{ backgroundImage: 'url(' + user.image[0] + ')' }} className='card'>
                                <h3>{user.name}, {user.age}</h3>
                                <span><i className='fas fa-map-marker-alt'style={{color: "#fff"}}></i> {user.distance}</span>
                        </div>
                        <div className='mt-2 d-flex justify-content-center'>
                            <button className='btn card-option mx-2'><i className="fa fa-times-circle" ></i></button>
                            <button className='btn card-option mx-2'><i className="fa fa-heart" style={{color: "red"}}></i></button>
                        </div>
                    </TinderCard>
                )}
                </div>
            </Col>
        </Row>
    )
}

export default ExploreCard;
