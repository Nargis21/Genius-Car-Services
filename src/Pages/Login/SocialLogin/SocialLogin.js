import React from 'react';
import google from '../../../images/google.png'
import facebook from '../../../images/facebook.png'
import github from '../../../images/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let errorElement;
    if (error || error1) {
        errorElement =
            <div>
                <p className='text-danger text-center'>Error: {error?.message} {error1?.message}</p>
            </div>
    }
    if (user || user1) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mx-3 mt-3'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 mx-auto d-block my-3'>
                <img src={google} alt="" />
                <span className=' p-3'>Google Sign In</span>
            </button>
            <button className='btn btn-info w-50 mx-auto d-block my-3'>
                <img style={{ height: '30px' }} src={facebook} alt="" />
                <span className=' p-3'>Facebook Sign In</span>
            </button>
            <button onClick={() => signInWithGithub()} className='btn btn-info w-50 mx-auto d-block'>
                <img style={{ height: '30px' }} src={github} alt="" />
                <span className=' p-3'>Github Sign In</span>
            </button>
        </div>
    );
};

export default SocialLogin;