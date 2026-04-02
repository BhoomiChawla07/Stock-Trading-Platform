import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const Auth = () => {
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        if (location.pathname === '/signup') {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    }, [location.pathname]);

    return (
        <>
            {isLogin ? (
                <Login onSwitchToSignup={() => setIsLogin(false)} />
            ) : (
                <Signup onSwitchToLogin={() => setIsLogin(true)} />
            )}
        </>
    );
};

export default Auth;