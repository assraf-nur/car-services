import React from 'react';
import google from '../../../images/google.png'
import facebook from '../../../images/facebook.png'
import git from '../../../images/git.png'
import {useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();

    if(user || user1){
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-3 px-3'>or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            <h4 className='text-center mb-3'>With</h4>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary mx-auto d-block w-50 py-3'>
                    <img style={{width: '30px'}} className='me-5 rounded' src={google} alt="" />
                    Google
                </button>
                <button className='btn btn-primary mx-auto d-block w-50 py-3 mt-3'>
                    <img style={{width: '30px'}} className='me-4 rounded' src={facebook} alt="" />
                    Facebook
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-primary mx-auto d-block w-50 mt-3 py-3'>
                    <img style={{width: '30px'}} className='me-5 rounded' src={git} alt="" />
                    Github
                </button>
            </div>
            {
                error && error.message
            }
            {
                loading && <p>Loading.....</p>
            }
            {
                error1 && error1.message
            }
            {
                loading1 && <p>Loading.....</p>
            }
        </div>
    );
};

export default SocialLogin;