import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { async } from '@firebase/util';
const SignUp = () => {
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    if (user) {
        navigate('/home')
    }
    const handleRegister = async event => {
        event.preventDefault()
        const email = event.target.email.value;
        const name = event.target.name.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
    }
    return (
        <div className='form-container'>
            <h2>Please Sign Up</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Your name' />
                <input type="email" name='email' placeholder='Email Address' />
                <input type="password" name='password' placeholder='password' />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept Genius car terms and condition.</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius car terms and condition.</label>
                <input disabled={!agree} className='btn btn-primary w-50 mx-auto d-block' type="submit" value="Register" />
            </form>
            <span>Already Register? </span><Link to='/login' className='text-decoration-none text-primary d-inline'>Please Login</Link>
        </div >
    );
};

export default SignUp;