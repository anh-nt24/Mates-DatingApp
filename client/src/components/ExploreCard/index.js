import TinderCard from 'react-tinder-card'
import { useState } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const ExploreCard = ({ users }) => {
    const [lastDirection, setLastDirection] = useState();

    const swiped = (direction, nameToDelete) => {
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
    }

    return (
        <Row className='mt-lg-4 mt-md-3'>
            <Col lg="3" md="4" className="m-auto swipe-container">
                <div className="card-container">
                {
                    !users && <span>Loading users... Please wait a sec</span>
                }
                {users && users.map((user) =>
                    <TinderCard className='swipe' key={user.name} onSwipe={(dir) => swiped(dir, user.name)} onCardLeftScreen={() => outOfFrame(user.name)}>
                        {
                            user.nearest &&
                            <div style={ { backgroundImage: 'url(' + user.image[ user.nearest ] + ')' } } className='card'>
                                <h3>{user.name}, {user.age}</h3>
                                {
                                    user.similar &&
                                    <span><i className='fal fa-monitor-heart-rate' style={{color: "#fff"}}></i> {user.similar}</span>
                                }
                            </div>
                        }
                        {
                            !user.nearest &&
                            <div style={ { backgroundImage: 'url(' + user.image[0] + ')' } } className='card'>
                                <h3>{user.name}, {user.age}</h3>
                                {
                                    user.distance &&
                                    <span><i className='fas fa-map-marker-alt' style={{color: "#fff"}}></i> {user.distance}</span>
                                }
                            </div>
                        }
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
