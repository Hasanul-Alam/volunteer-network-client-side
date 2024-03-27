import React, { useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import axios from 'axios';

const Events = () => {
    const [events, setEvents] = useState([]);

    const { user } = useFirebase();

    const url = `http://localhost:5000/events?email=${user.email}`;

    useEffect(() => {
        if (user.email) {
            fetch(url)
                .then(res => res.json())
                .then(data => setEvents(data))
        }
    }, [user])

    const handleCancellation = (id, email) => {
        const proceed = window.confirm('Are you sure to cancle?');
        if (proceed) {
            const url = `http://localhost:5000/events/${id}/${email}`;
            axios.get(url)
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
        <div className="container">
            <h2 className='mb-3'>Your Events</h2>
            <table className="table">
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
    );
};

export default Events;