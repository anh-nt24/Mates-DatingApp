import React from 'react';

const SignInLayout = ({ children }) => {
    return (
        <div className='homepage-body'>
            <div className="w-100 m-0 p-5 pt-2" style={{height: "100vh"}}>
                <div className="login-container">
                    <div className="wrap-login">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInLayout