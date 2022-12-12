import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import "./Register.css";
const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    if (loading) {
        return <Loading></Loading>
    }



    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')





    }
    return (


        <div className='container '>
            <div className="card m-3 border-0" >
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src="" className="img-fluid rounded-start" alt="..." />
                    </div>



                    <div className="col-md-6 bg-dark border justify-content-center ">
                        <div className='rounded-5 m-4' >
                            <div className="register-form  ">
                                <h2 className="m-4 text-danger" style={{ textAlign: 'center' }}>Please Register</h2>
                                <form onSubmit={handleRegister}>
                                    <input type="text" name='name' placeholder='Your Name' />
                                    <input type="email" name="email" id="1" placeholder='Email Address' required />
                                    <input type="password" name="password" id="2" placeholder='Password' required />
                                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                                    <label className={`ps-2 text-light ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept terms and conditions</label>
                                    <input
                                        disabled={!agree}
                                        className='btn btn-danger  w-50 mx-auto d-block my-2 '
                                        type="submit"
                                        value="Register" />
                                </form>
                                <p className="text-light">Already have an account? <Link to='/login ' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Login</Link></p>
                                <SocialLogin></SocialLogin>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};
export default Register;