import React from 'react';

const MyVolunteer = () => {
    return (
        <div className='w-75 mx-auto mt-5'>
            <div className="card mb-3 px-2 pt-2" style={{'maxWidth': '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://i.postimg.cc/FHdr9ptp/clearn-Park.png" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button className='btn btn-danger'>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyVolunteer;