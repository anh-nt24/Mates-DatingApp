import SignInLayout from "../Themes/SignIn";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, {useState} from "react";

const SignUp = () => {
    const avt = {
        '1': false,
        '2': false,
        '3': false,
    }
    const [getUpload, setUpload] = useState(avt);
    const handleUpload = (e) => {
        const idx = e.target.attributes.getNamedItem('avt').value;
        if (e.target.files && e.target.files.length > 0) {
            setUpload(
                (prevState) => ({
                    ...prevState,
                    [idx]: e.target.files[0]
                })
            );
        }
        handleChange(e);
    }
    const removeUpload = () => {
        setUpload(false);
    }
    const [isShowPass, setShowPass] = useState(false);
    const handleShowPassword = () => {
        setShowPass(!isShowPass);
    }
    const config = {
        'firstname': '',
        'password': '',
        'email': '',
        'dob_M': '',
        'dob_D': '',
        'dob_Y': '',
        'gender': 'male',
        'gendered_interest': 'male',
        'avatar': [],
        'show_gender': true
    }
    const [getForm, setForm] = useState(config);
    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const key = e.target.name;
        setForm((prevState) => ({
            ...prevState,
            [key]: value
        }));
    }

    const handleSubmit = async (e) => {
        console.log(getForm);
    }
    return (
        <SignInLayout>
            <h2 className="text-center py-3 fw-bold" style={{fontFamily: "Comic Sans MS"}}>CREATE AN ACCOUNT</h2>
            <Form action="" className="mt-lg-5 mt-md-3">
                <Container  className="sign-up">
                    <Row className="m-auto mt-4">
                        <Col md="6">
                            <div>
                                <h6>First name</h6>
                                <InputGroup className="mb-3 w-75">
                                    <InputGroup.Text><i className="fas fa-user"></i></InputGroup.Text>
                                    <Form.Control onChange={handleChange} name="firstname" className="form-control-custom" type="text" placeholder="Enter your name" required />
                                </InputGroup>
                            </div>
                            <div>
                                <h6>Email address</h6>
                                <InputGroup className="mb-3 w-75">
                                    <InputGroup.Text><i className="fa fa-envelope"></i></InputGroup.Text>
                                    <Form.Control onChange={handleChange} name="email" className="form-control-custom" type="email" placeholder="Enter your email" required />
                                </InputGroup>
                            </div>
                            <div>
                                <h6>Password</h6>
                                <InputGroup className="mb-3 w-75">
                                    <InputGroup.Text style={{cursor: "pointer"}} onClick={handleShowPassword}><i className={isShowPass ? 'fas fa-lock-open' : 'fa fa-lock'}></i></InputGroup.Text>
                                    <Form.Control onChange={handleChange} name="password" className="form-control-custom" type={isShowPass ? 'text' : "password"} required />
                                </InputGroup>
                            </div>
                            <div>
                                <h6>Birthday</h6>
                                <InputGroup className="mb-3 w-75">
                                    <Form.Control onChange={handleChange} name="dob_M" className="form-control-custom mx-2" placeholder="MM" type="number" required />
                                    <Form.Control onChange={handleChange} name="dob_D" className="form-control-custom mx-2" placeholder="DD" type="number" required />
                                    <Form.Control onChange={handleChange} name="dob_Y" className="form-control-custom mx-2" placeholder="YYYY" type="number" required />
                                </InputGroup>
                            </div>
                        </Col>
                        <Col md="6">
                            <div>
                                <h6>Your gender</h6>
                                <div>
                                    <input onChange={handleChange} checked={getForm.gender === "male"} value="male" className="input-conf" type='radio' id='male' name='gender'/>
                                    <label htmlFor='male'>Male</label>
                                    <input onChange={handleChange} checked={getForm.gender === "female"} value="female" className="input-conf" type='radio' id='female' name='gender'/>
                                    <label htmlFor='female'>Female</label>
                                </div>
                                <div className="ps-5">
                                    <label htmlFor="">
                                        Show my gender
                                        <input onChange={handleChange} name="show_gender" checked={getForm.show_gender} type="checkbox" className="ms-2" />
                                    </label>
                                </div>
                            </div>
                            <div className="mt-2">
                                <h6>Your gendered interest</h6>
                                <div>
                                    <input onChange={handleChange} required={true} checked={getForm.gendered_interest === "male"} value="male" className="input-conf" type='radio' id='male-interest' name='gendered_interest'/>
                                    <label htmlFor='male-interest'>Male</label>
                                    <input onChange={handleChange} required={true} checked={getForm.gendered_interest === "female"} value="female" className="input-conf" type='radio' id='female-interest' name='gendered_interest'/>
                                    <label htmlFor='female-interest'>Female</label>
                                    <input onChange={handleChange} required={true} checked={getForm.gendered_interest === "both"} value="both" className="input-conf" type='radio' id='both-interest' name='gendered_interest'/>
                                    <label htmlFor='both-interest'>Both</label>
                                </div>
                            </div>

                            <div className="mt-2">
                                <h6>Upload your profile image</h6>
                                <Container>
                                    <Row>
                                        <Col lg="3" md="3" sm="4" className="mb-3 mb-md-0 mb-sm-3">
                                            <div className="box">
                                                { getUpload['1'] && 
                                                <div className="image-preview">
                                                    <img width={"100%"} height={"100%"} src={URL.createObjectURL(getUpload['1'])} alt="hi" />
                                                </div>
                                                
                                                }
                                                <div className="upload-options">
                                                    {getUpload['1'] ? <i className="fa fa-check" onClick={removeUpload} aria-hidden="true"></i> : <span>+</span>}
                                                    <label>
                                                        <input avt="1" name="avatar" onChange={handleUpload} type="file" className="image-upload" accept="image/*" />
                                                    </label>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg="3" md="3" sm="4" className="mb-3 mb-md-0 mb-sm-3">
                                            <div className="box">
                                                { getUpload['2'] && 
                                                <div className="image-preview">
                                                    <img width={"100%"} height={"100%"} src={URL.createObjectURL(getUpload['2'])} alt="hi" />
                                                </div>
                                                
                                                }
                                                <div className="upload-options">
                                                    {getUpload['2'] ? <i className="fa fa-check" onClick={removeUpload} aria-hidden="true"></i> : <span>+</span>}
                                                    <label>
                                                        <input avt="2" name="avatar" onChange={handleUpload} type="file" className="image-upload" accept="image/*" />
                                                    </label>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg="3" md="3" sm="4" className="mb-3 mb-md-0 mb-sm-3">
                                            <div className="box">
                                                { getUpload['3'] && 
                                                <div className="image-preview">
                                                    <img width={"100%"} height={"100%"} src={URL.createObjectURL(getUpload['3'])} alt="hi" />
                                                </div>
                                                
                                                }
                                                <div className="upload-options">
                                                    {getUpload['3'] ? <i className="fa fa-check" onClick={removeUpload} aria-hidden="true"></i> : <span>+</span>}
                                                    <label>
                                                        <input avt="3" name="avatar" onChange={handleUpload} type="file" className="image-upload" accept="image/*" />
                                                    </label>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col>
                            <button onClick={handleSubmit} className="account-button w-25">
                                Submit
                            </button>
                        
                        </Col>
                    </Row>
                </Container>
            </Form>
        </SignInLayout>
    );
}

export default SignUp;