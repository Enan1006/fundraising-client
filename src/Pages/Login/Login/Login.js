import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from 'react-toastify';
import login from "../../../1_images/login.jpg"
const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }


    if (error) {
        errorElement = <div>
            <p className='text-danger'> Error: {error.message}</p>
        </div>
    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const navigateRegister = event => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address')
        }
    }

    return (



        <div className='container '>
            <div className="card m-3 border-0 justify-content-center" >
                <div className="row g-0 ">
                    <div className="col-md-6">
                        <img src={login} className="img-fluid rounded-start" alt="..." />
                    </div>



                    <div className="col-md-6 bg-dark border  pt- align-items-center  ">
                        <div className='rounded-5 ' >
                            <div className='  mx-auto my-4   '>
                                <h2 className='text-center text-danger m-4 '>Please Login</h2>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                                    </Form.Group>
                                    <Button variant="danger w-50 mx-auto d-block mb-2" type="submit">
                                        Login
                                    </Button>
                                </Form>
                                {errorElement}
                                <p className='text-light'>You don't have an account? <Link to='/register ' className='text-danger pe-auto text-decoration-none ' onClick={navigateRegister}>Please Register</Link></p>
                                <p className='text-light'>Forget your password? <button to='/register ' className='btn btn-link text-danger pe-auto text-decoration-none ' onClick={resetPassword}>Reset Password</button></p>
                                <SocialLogin></SocialLogin>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};
export default Login;