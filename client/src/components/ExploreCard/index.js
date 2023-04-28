import TinderCard from 'react-tinder-card'
import { useState } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { GetUserInfo } from '../../api/UserApi';
import { GetNearestUsers } from '../../api/ActivityApi';

var data = []

const ExploreCard = () => {
    const [token, setToken] = useCookies();
    const [lastDirection, setLastDirection] = useState();
    const [users, setUsers] = useState();
    const [userImg, setUserImg] = useState();


    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    useEffect(() => {
        const getUsers = async () => {
            const response = await GetNearestUsers(token.token)
            if (response.status === 200) {
                var data = response.response;
                for (let i=0; i < data.length; ++i) {
                    let img_arr = data[i]['image'];
                    const url = "http://localhost:5000/"
                    for (let j=0;j<img_arr.length;++j) {
                        fetch(url+img_arr[j])
                        .then((response) => response.blob())
                            .then((d) => {
                                data[i]['image'][j] = URL.createObjectURL(d);
                            });
                    }
                }
                const new_data = data;
                setUsers(new_data);
            }
        }
        getUsers();
    }, []);
    return (
        <Row className='mt-lg-4 mt-md-3'>
            <Col lg="3" md="4" className="m-auto swipe-container">
                <div className="card-container">
                {
                    !users && <span>No users found</span>
                }
                {users && users.map((user) =>
                    <TinderCard className='swipe' key={user.name} onSwipe={(dir) => swiped(dir, user.name)} onCardLeftScreen={() => outOfFrame(user.name)}>
                        <div style={{ backgroundImage: 'url(' + user.image[0] + ')' }} className='card'>
                                <h3>{user.name}, {user.age}</h3>
                                <span><i className='fas fa-map-marker-alt'style={{color: "#fff"}}></i> {user.distance}</span>
                        </div>
                        {/* {console.log(user['image'])} */}
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
