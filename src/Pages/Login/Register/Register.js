import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
      ] = useCreateUserWithEmailAndPassword(auth);


    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

    if(user){
        navigate('/home')
    }

    const handleRegister = e =>{
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const agree = e.target.terms.checked;

        if(agree){
            createUserWithEmailAndPassword(email, password);
        }
    }

    return (
        <div className='register-form border rounded shadow p-5'>
            <h2 className='text-primary text-center mb-5'>If you are new ! please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='your name' required/>
                <br />
                <input type="email" name="email" id=""  placeholder='your email' required/>
                <br />
                <input type="password" name="password" id="" placeholder='password' required/>
                <br />
                <input disabled={!agree} className='btn bg-primary w-25 mx-auto text-white' type="submit" value="Register" />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree? 'text-primary' : 'text-danger'} htmlFor="terms">Accepts all conditions</label>
                <p>Already have an account <Link to='/login' className="text-danger pe-auto text-decoration-none" onClick={navigateLogin} >Log In</Link> </p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;