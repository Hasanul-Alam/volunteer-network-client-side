import React, { useEffect, useState } from 'react';
import './Home.css';
import Programme from '../Programme/Programme';

const Home = () => {
    const [programmes, setProgrammes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/volunteer-programmes')
            .then(res => res.json())
            .then(data => {
                setProgrammes(data);
                setLoading(false);
            })
    }, []);
    return (
        <div className='w-75 mx-auto'>
            {/* Heading. */}
            <h2 className='text-uppercase mt-4 text-center'>I grow by helping people in need.</h2>

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
            <div className="container mt-5 pb-4">
                <div className="row d-flex justify-content-center">
                    {loading ? <div class="text-primary">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden"></span>
                        </div>
                    </div> : programmes.map(programme => <Programme
                        key={programme.id}
                        programme={programme}
                    ></Programme>)}
                </div>
            </div>
        </div>
    );
};

export default Home;

// All Image Links


// ---------
//  Logos
// --------

/* programmes.map(programme => <Programme
                            key={programme.id}
                            programme={programme}
                        ></Programme>) */