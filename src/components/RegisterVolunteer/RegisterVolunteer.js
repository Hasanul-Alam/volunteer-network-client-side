import React from 'react';
import './RegisterVolunteer.css';

const RegisterVolunteer = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header"><h4>Register as a Volunteer</h4></div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="fullName">Full Name</label>
                                        <input type="text" className="form-control" id="fullName" placeholder="Full name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="usernameOrEmail">Username or Email</label>
                                        <input type="text" className="form-control" id="usernameOrEmail" placeholder="Enter your username or email" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="date">Date</label>
                                        <input type="date" className="form-control" id="date" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea className="form-control" id="description" rows="3" placeholder="Enter a description"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterVolunteer;