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
                                Login
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
                                <NavLink to='/register'><p className='text-primary mt-3'>Don't have an account?</p></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;