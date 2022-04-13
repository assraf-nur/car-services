import React from 'react';
import google from '../../../images/google.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-3 px-3'>or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            <div>
                <button className='btn btn-primary w-50 py-3'>
                    <img style={{width: '30px'}} className='me-5 rounded' src={google} alt="" />
                    Google Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;