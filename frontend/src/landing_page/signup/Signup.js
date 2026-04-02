import React, { useState } from 'react';
import Login from '../login/Login';
import SignupForm from './SignupForm';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(false); // Default to signup

    return (
        <>
            {isLogin ? (
                <Login onSwitchToSignup={() => setIsLogin(false)} />
            ) : (
                <SignupForm onSwitchToLogin={() => setIsLogin(true)} />
            )}
        </>
    );
};

export default Auth;