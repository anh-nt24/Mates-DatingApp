import React from 'react'


const SignInLayout = ({ children }) => {
  
  return (
    <div className='bg-homepage flex justify-center items-center bg-primary-color fixed top-0 bottom-0 left-0 right-0'>
        <div className='m-auto'> 
            {children}
        </div>
    </div>
  )
}

export default SignInLayout