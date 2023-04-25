import TinderCard from 'react-tinder-card'
import { useState } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import styled from 'styled-components';

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
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }
    console.log(users);
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
                        <div className='mt-2 d-flex justify-content-around'>
                            <button className='btn card-option'><i class="fa fa-times-circle" ></i></button>
                            <button className='btn card-option'><i className="fa fa-heart" style={{color: "red"}}></i></button>
                            {/* <button className='btn card-option'>hi</button> */}
                        </div>
                    </TinderCard>
                )}
                </div>
            </Col>
        </Row>
    )
}

export default ExploreCard;
