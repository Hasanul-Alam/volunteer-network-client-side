import React, { useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';

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
                        <tr key={item.id}>
                            <td><img src={item.image} alt="Profile" style={{ width: '50px' }} /></td>
                            <td>{item.name}</td>
                            <td>{item.date}</td>
                            <td><button className='btn btn-danger'>Cancle</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Events;