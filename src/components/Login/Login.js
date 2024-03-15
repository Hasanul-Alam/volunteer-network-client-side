import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
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
                                        <label for="email">Email address:</label>
                                        <input type="email" className="form-control" id="email" required />
                                    </div>
                                    <div className="form-group">
                                        <label for="password">Password:</label>
                                        <input type="password" className="form-control" id="password" required />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                                    <p className='m-0 my-2'>or</p>
                                </form>
                                <button className="btn btn-primary">Sign In with Google</button>
                                <br />
                                <p className=' mt-3'>Don't have an account? <NavLink to='/register'>Create an account</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;