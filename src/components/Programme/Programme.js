import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Programme = (props) => {
    const navigate = useNavigate();
    const { image, name, id } = props.programme;
    const {user} = useFirebase();

    const handleVolunteer = (id) => {
        if(user.email){
            navigate(`/register-volunteer/${id}`)
            console.log(id);
        }
        else{
            navigate('/login')
            console.log(id)
        }
    }
    return (
        <div className="col-md-3">
            <div className="card border border-0 mt-3">
                <img src={image} className="card-img-top" alt="Img" />
                <div className="card-body px-0 py-0">
                    <button onClick={()=>{ handleVolunteer(id) }} className="btn btn-primary btn-block py-2">{name}</button>
                </div>
            </div>
        </div>
    );
};

export default Programme;