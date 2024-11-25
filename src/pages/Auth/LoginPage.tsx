import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirecting to Signup page
import './LoginCard.scss'; // Add the styles here

const LoginPage: React.FC = () => {
    const [passwordVisible, setPasswordVisible] = useState(false); // Toggle password visibility
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Logic for login (can be API integration)
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="login-card">
            <h2>Login</h2>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="input-container">
                <input
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span
                    className="password-toggle"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                >
                    {passwordVisible ? '👁️‍🗨️' : '👁️'}
                </span>
            </div>
            <button onClick={handleLogin} className="login-button">
                Login
            </button>
            <p className="create-account">
                Don't have an account?{' '}
                <span onClick={() => navigate('/signup')}>Create Account</span>
            </p>
        </div>
    );
};

export default LoginPage;
