import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Provider/AuthProvider';

const Events = () => {
    const [events, setEvents] = useState([]);

    const { user, loading } = useContext(AuthContext);


    useEffect(() => {
        const url = `http://localhost:5000/events?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setEvents(data)
            })
        /* if(loading){
            return
        }
        else if (user.email) {
            const url = `http://localhost:5000/events?email=${user.email}`;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setEvents(data)
                })
        }
        else if(!user.email){
            navigate('/login');
        } */
    }, [user])

    const handleCancellation = (id, email) => {
        const proceed = window.confirm('Are you sure to cancle?');
        if (proceed) {
            const url = `http://localhost:5000/events/${id}/${email}`;
            axios.delete(url)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        alert('Alhamdulillah your event is cancelled successfully.');
                    }
                    // Show the rest events
                    const remaining = events.filter(event => event._id !== id);
                    setEvents(remaining);
                })
        }
    }
    return (
        <div>
            {loading ? <div className='text-center'><div className="spinner-border text-primary mt-5" role="status">
                <span className="visually-hidden"></span>
            </div></div> : <div className="container">
                <h2 className='text-center'>Your Events</h2>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Programme Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map(item => (
                                <tr key={item._id}>
                                    <td><img src={item.image} alt="Profile" style={{ width: '50px' }} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.date}</td>
                                    <td><button onClick={() => handleCancellation(item._id, item.email)} className='btn btn-danger'>Cancle</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>}

        </div>
    );
};

export default Events;