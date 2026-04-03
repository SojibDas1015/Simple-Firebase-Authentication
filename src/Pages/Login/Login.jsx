import React from 'react';

const Login = () => {
    const handleLogin = () => {
        console.log('Login btn clicked')
    }
    return (
        <div>
            <h1>Please Login</h1>
            <button onClick={handleLogin}>Login with Google</button>
        </div>
    );
};

export default Login;