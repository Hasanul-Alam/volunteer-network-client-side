import React, { useEffect, useState } from 'react';
import './RegisterVolunteer.css';
import { useNavigate, useParams } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const RegisterVolunteer = () => {

    const [programme, setProgramme] = useState({});
    const [volunteerName, setVolunteerName] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [programmeId, setProgrammeId] = useState('');
    const { user } = useFirebase();
    const navigate = useNavigate();

    const {image, name} = programme;

    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/volunteer-programmes/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProgramme(data))
    }, [])

    const handleNameField = event => {
        const name = event.target.value;
        setVolunteerName(name);
        setEmail(user.email);
        setProgrammeId(id);
    }

    const handleDateField = event => {
        const date = event.target.value;
        setDate(date);
    }

    const registerVolunter = (event) => {
        const newUser = { email, programmeId, volunteerName, date, image, name };
        const url = `http://localhost:5000/registered-volunteers`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('Alhamdulillah you are successfully registered.');
                    navigate('/events');
                }
            })
        event.preventDefault();
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header"><h4>Register as a Volunteer</h4></div>
                            <div className="card-body">
                                <form onSubmit={registerVolunter}>
                                    <div className="form-group">
                                        <label htmlFor="fullName">Full Name</label>
                                        <input onChange={handleNameField} type="text" className="form-control" id="fullName" placeholder="Full name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="usernameOrEmail">Email</label>
                                        <input type="text" className="form-control" id="Email" placeholder="Enter your username or email" value={user.email} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="date">Date</label>
                                        <input onChange={handleDateField} type="date" className="form-control" id="date" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Programme Name</label>
                                        <input className="form-control" id="description" rows="3" value={programme.name}></input>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterVolunteer;