import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const [showPassword, setShowPassword] = useState();
    const { emailPasswordSignIn, handleEmailChange, handlePasswordChange, error } = useFirebase();

    // Show Password
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Please Login</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address:</label>
                                        <input onChange={handleEmailChange} type="email" className="form-control" id="email" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password:</label>
                                        <input onChange={handlePasswordChange} type={showPassword ? 'text' : 'password'} className="form-control" id="password" required />
                                    </div>
                                    <div className="input-group-append mb-3">
                                        <div className="input-group-text">
                                            <input onChange={handleShowPassword} type="checkbox" id="showPassword" />
                                            <label htmlFor="showPassword" className="ml-2 mb-0">Show Password</label>
                                        </div>
                                    </div>
                                </form>
                                <button onClick={emailPasswordSignIn} className="btn btn-primary btn-block">Login</button>
                                <br />
                                <p className=' '>Don't have an account? <NavLink to='/register'>Create an account</NavLink></p>
                                {error === 'Firebase: Error (auth/invalid-credential).' ? <p className='text-danger'>Error: Invalid email or password.</p> : <p>{' '}</p> }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;