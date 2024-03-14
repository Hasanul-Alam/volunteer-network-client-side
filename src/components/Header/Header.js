import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-lihgt bg-light">
                <div className="container-fluid w-75 mx-auto">
                    <Link className='navbar-brand' to='/'><img src="./Group 1329.png" alt="Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-1">
                                <Link className="nav-link " to='/home'>Home</Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link className="nav-link " to='/donations'>Donation</Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link className="nav-link " to='/events'>My-Events</Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link className="nav-link " to='/blog'>Blog</Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link className="btn btn-primary nav-link " to='/register'>Register</Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link className="btn btn-dark nav-link " to='/admin'>Admin</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;