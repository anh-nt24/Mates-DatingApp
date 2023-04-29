import React from 'react'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button'
import { GetSimilarUsers } from '../../api/ActivityApi';
import ExploreCard from '../ExploreCard';

const SearchBar = () => {
    const [getUpload, setUpload] = useState();
    const [users, setUsers] = useState();
    const handleUpload = (e) => {
        setUpload(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('file', getUpload);
        // const { response } = await GetSimilarUsers(form);
        const getUsers = async () => {
            const { status, response } = await GetSimilarUsers(form);
            if (status === 200) {
                var data = response;
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
    }
    return (
        <div className="my-2 mx-auto Search">
            <Container className='sign-up'>
                <Row>
                    <Col md="4" sm="8" className="mb-3 mb-md-0 mb-sm-3 mx-auto">
                        <div className="box" style={{height: "200px"}}>
                            {getUpload &&
                                <div className="image-preview">
                                    <img width={"100%"} height={"100%"} src={URL.createObjectURL(getUpload)} alt="hi" />
                                </div>
                            }
                            <div className="upload-options">
                                {getUpload ? <i className="fa fa-check" aria-hidden="true"></i> : <span>+</span>}
                                <label>
                                    <input name="img-search" onChange={handleUpload} type="file" className="image-upload" accept="image/*" />
                                </label>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-center my-2'>
                        <Button onClick={handleSubmit} className='account-button py-1'>Explore</Button>
                    </Col>
                </Row>
            </Container>
            <Container>
                {
                    users &&
                    <Row className='Swipe' style={{marginBottom: "400px"}}>
                        <h3>Here's some result</h3>
                        <ExploreCard users={users}/>
                    </Row>
                }
            </Container>
        </div>
    )
}

export default SearchBar