// Login.js
import React from 'react';
import '../styles/styles.css';

function Login() {
    return (
        <div className="container">
            <h2 className="form-title">Login</h2>
            <form>
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" id="username" name="username" className="form-input" />

                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" name="password" className="form-input" />

                <button type="submit" className="form-button">Login</button>
            </form>
        </div>
    );
}

export default Login;
