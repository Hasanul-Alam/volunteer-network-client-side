import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='w-75 mx-auto'>
            {/* Heading. */}
            <h2 className='text-uppercase mt-5'>I grow by helping people in need.</h2>

            {/* Search Field */}
            <div className="container mt-3 d-flex justify-content-center">
                <form className="form-inline search-form">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </form>
            </div>

            {/* Volunteer Programmes */}
            <div className="d-flex justify-content-between mt-5">
                <div className="card border border-0" style={{ width: "15rem", height: "17rem" }}>
                    <img src="https://i.postimg.cc/pT0Vpfnq/child-Support.png" className="card-img-top h-100" alt="..." />
                    <div className="card-body px-0 py-0 border border-0">
                        <button className='w-100 btn btn-warning mx-0'>Child Support</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;