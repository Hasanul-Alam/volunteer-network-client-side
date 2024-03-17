import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Programme from '../Programme/Programme';

const Home = () => {
    const [programmes, setProgrammes] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setProgrammes(data))
    }, []);
    return (
        <div className='w-75 mx-auto'>
            {/* Heading. */}
            <h2 className='text-uppercase mt-4'>I grow by helping people in need.</h2>

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
            <div className="container mt-5">
                <div className="row">
                    {
                        programmes.map(programme => <Programme
                            key={programme.id}
                            programme={programme}
                        ></Programme>)
                    }
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

/* https://i.postimg.cc/Zn59jNWQ/cloud-upload-outline-1.png
https://i.postimg.cc/zXMLSV8d/Group-1329.png
https://i.postimg.cc/qqDNF7nv/plus-1.png
https://i.postimg.cc/dQ5Z35Xc/trash-2-9.png
https://i.postimg.cc/Fs1dLj5d/users-alt-1.png */