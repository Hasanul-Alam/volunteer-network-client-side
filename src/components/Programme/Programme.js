import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Programme = (props) => {
    const { image, name, _id } = props.programme;
    const {user} = useContext(AuthContext);

    return (
        <div className="col-md-3">
            <div className="card border border-0 mt-3">
                <img src={image} className="card-img-top" alt="Img" />
                <div className="card-body px-0 py-0">
                    <NavLink to={user.email ? `/register-volunteer/${_id}` : '/login' } className="btn btn-primary btn-block py-2">{name}</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Programme;