import React from 'react'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button'

const SearchBar = () => {
    const [getUpload, setUpload] = useState();
    const handleUpload = () => {
        setUpload();
    }
    return (
        <div className="my-2 mx-auto">
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
                                    <input avt="1" name="avatar" onChange={handleUpload} type="file" className="image-upload" accept="image/*" />
                                </label>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-center my-2'>
                        <Button className='account-button py-1'>Explore</Button>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default SearchBar