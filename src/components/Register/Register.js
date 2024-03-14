import React from 'react';

const Register = () => {
    return (
        <div>
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
                                        <label htmlFor="name">Name:</label>
                                        <input type="text" className="form-control" id="name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address:</label>
                                        <input type="email" className="form-control" id="email" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password:</label>
                                        <input type="password" className="form-control" id="password" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirm_password">Confirm Password:</label>
                                        <input type="password" className="form-control" id="confirm_password" required />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                                    <p className='m-0 my-2'>or</p>
                                </form>
                                <button className="btn btn-primary">Sign Up with Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

