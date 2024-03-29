import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const { handleEmailChange, handlePasswordChange, handleConfirmPassword, emailPasswordSignUp, googleSignIn, error, user } = useContext(AuthContext);

    const navigate = useNavigate()

    return (
        <>
            {user.email ? navigate('/home') : <div>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Please Register</h4>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="email">Email address:</label>
                                            <input onChange={handleEmailChange} type="email" className="form-control" id="email" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password:</label>
                                            <input onChange={handlePasswordChange} type="password" className="form-control" id="password" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="confirm_password">Confirm Password:</label>
                                            <input onChange={handleConfirmPassword} type="password" className="form-control" id="confirm_password" required />
                                        </div>
                                    </form>
                                    <button onClick={emailPasswordSignUp} type="" className="btn btn-primary btn-block">Register</button>
                                    <p className='my-1'>or</p>
                                    <button onClick={googleSignIn} className="btn btn-primary">Sign In using Google</button>
                                    {error ? <p className='text-danger mt-3'>Error: {error}</p> : <p> </p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default Register;

