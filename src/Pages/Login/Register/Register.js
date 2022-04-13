import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

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
                <input className='btn bg-primary w-25 mx-auto text-white' type="submit" value="Register" />
                <p>Already have an account <Link to='/login' className="text-danger pe-auto text-decoration-none" onClick={navigateLogin} >Log In</Link> </p>
            </form>
        </div>
    );
};

export default Register;