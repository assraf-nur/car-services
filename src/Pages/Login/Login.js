import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/'

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
    }

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
      );

    const navigateRegister = () =>{
        navigate('/register')
    }

    if(user){
        navigate(from, {replace: true});
    }

    const resetPassword = async() =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    
  return (
        <Form onSubmit={handleSubmit} className="container w-50 border mt-5 shadow rounded p-5 mx-auto">
            <h2 className="text-center text-primary">Please Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <p>New to Car Service ? <Link to='/register' className="text-danger pe-auto text-decoration-none" onClick={navigateRegister}>Register Now</Link> </p>

            <p>Forget Password <Link to='/register' className="text-danger pe-auto text-decoration-none" onClick={resetPassword}>Reset Your password</Link> </p>

            
            <SocialLogin></SocialLogin>
            {
                error && error.message
            }
            {
                loading && <p>Loading.....</p>
            }
        </Form>
  );
};

export default Login;
