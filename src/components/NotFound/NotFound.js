import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-8 text-center">
                    <h1 className="display-4">404</h1>
                    <p className="lead">Oops! Page not found.</p>
                    <p className="text-muted">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                    <NavLink to='/'><button className='btn btn-primary'>Go Home</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default NotFound;