import React from 'react';
import useAuth from '../../../contexts/useAuth.js';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h1>Please login</h1>
            <button onClick={signInUsingGoogle} className="btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;