import TinderCard from 'react-tinder-card'
import { useState } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { GetUserInfo } from '../../api/UserApi';
import { GetNearestUsers } from '../../api/ActivityApi';

const users = [
    {
        name: 'Richard Hendricks',
        age: 20,
        url: 'https://imgur.com/Kf6KHLI.jpg'
    },
    {
        name: 'Erlich Bachman',
        age: 20,
        url: 'https://imgur.com/Kf6KHLI.jpg'
    },
    {
        name: 'Monica Hall',
        age: 20,
        url: 'https://imgur.com/Kf6KHLI.jpg'
    },
    {
        name: 'Jared Dunn',
        age: 20,
        url: 'https://imgur.com/Kf6KHLI.jpg'
    },
    {
        name: 'Dinesh Chugtai',
        age: 20,
        url: 'https://imgur.com/Kf6KHLI.jpg'
    }
  ]



const ExploreCard = () => {
    const [token, setToken] = useCookies();
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    useEffect(() => {
        const getUsers = async () => {
            // const response = await GetNearestUsers(token.token)
            // console.log(response)
            // if (response.status === 200) {
            //     const data = response.response;
            //     console.log(data)
            // }
        }
        getUsers();
    }, []);;
    return (
        <Row className='mt-lg-4 mt-md-3'>
            <Col lg="3" md="4" className="m-auto swipe-container">
                <div className="card-container">
                {users.map((user) =>
                
                    <TinderCard className='swipe' key={user.name} onSwipe={(dir) => swiped(dir, user.name)} onCardLeftScreen={() => outOfFrame(user.name)}>
                        <div style={{ backgroundImage: 'url(' + user.url + ')' }} className='card'>
                                <h3>{user.name}, {user.age}</h3>
                                <span><i className='fas fa-map-marker-alt'style={{color: "#fff"}}></i> 20m</span>
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
