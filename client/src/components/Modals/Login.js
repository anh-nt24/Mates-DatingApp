import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import GoogleLogin from 'react-google-login'
import { Link } from 'react-router-dom';

const Login = ({isOpened, setOpenning}) => {
    const handleClose = () => {
        setOpenning(false);
    }
    return (
        <Modal show={isOpened} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="inputUserName">Username</label>
                            <input className="form-control mt-2" placeholder="Enter username" type="text" id="inputUserName" />
                        </div>
                        <div className="mt-3 form-group">
                            <label htmlFor="inputPassword">Password:</label>
                            <input className="form-control mt-2" placeholder="Enter password" type="password" id="inputPassword" />
                        </div>
                        <div className='w-100 p-1 mt-3'>
                            <Button variant="primary" className=" w-100 m-auto account-button" onClick={handleClose}>
                                Login
                            </Button>
                        </div>
                        <div class="striped">
                            <span class="striped-line"></span>
                            <span class="striped-text">Or</span>
                            <span class="striped-line"></span>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="button" className="google-button text-center btn">
                                <span className="google-button__icon google-button__icon--plus">
                                    <svg viewBox="0 0 93 60" xmlns="http://www.w3.org/2000/svg"><path d="M.12 28.862C.375 13.725 14.29.47 29.428.974c7.253-.337 14.07 2.82 19.626 7.252-2.37 2.694-4.826 5.29-7.45 7.716-6.677-4.615-16.174-5.934-22.852-.603-9.552 6.606-9.987 22.206-.798 29.318 8.936 8.11 25.826 4.083 28.295-8.333-5.597-.084-11.21 0-16.806-.182-.013-3.34-.027-6.678-.013-10.016 9.357-.028 18.714-.043 28.085.028.56 7.856-.477 16.217-5.303 22.712-7.31 10.283-21.983 13.285-33.43 8.88C7.29 53.37-.848 41.235.12 28.862zm75.643-11.167h8.347c.014 2.792.028 5.598.056 8.39 2.792.028 5.598.028 8.39.056v8.348c-2.792.028-5.584.042-8.39.07-.028 2.805-.042 5.597-.056 8.39h-8.36c-.03-2.793-.03-5.585-.057-8.376l-8.39-.084V26.14c2.793-.027 5.584-.04 8.39-.056.014-2.805.042-5.597.07-8.39z" fill="	#fc006d"/></svg>
                                </span>
                                <span className="google-button__text">Log in with Google</span>
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            <Modal.Footer>
                    <div className='mt-1 mx-auto'>
                        You don't have an account yet? <Link to="/signup">Sign up</Link>
                    </div>
            </Modal.Footer>
        </Modal>
    )
}

export default Login;