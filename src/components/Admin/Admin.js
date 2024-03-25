import React, { useState } from 'react';
import './Admin.css';
import useFirebase from '../../hooks/useFirebase';

const Admin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { user } = useFirebase();

    // Show Password
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    // Handle Admin Login
    const handleAdminLogin = (event) => {
        event.preventDefault();
        if (user.email) {
            alert('Please logout first from client side.');
        }
        else {
            console.log('Logged in');
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="text-center">Admin Login</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <div className="input-group">
                                            <input type={showPassword ? 'text' : 'password'} className="form-control" id="password" name="password" required />
                                        </div>
                                    </div>
                                    <div className="input-group-append mb-3">
                                        <div className="input-group-text">
                                            <input onChange={handleShowPassword} type="checkbox" id="showPassword" />
                                            <label htmlFor="showPassword" className="ml-2 mb-0">Show Password</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input onClick={handleAdminLogin} type="submit" className="btn btn-primary btn-block" value={'Login'} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;