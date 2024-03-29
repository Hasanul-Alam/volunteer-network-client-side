import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <div className='text-center'><div className="spinner-border text-primary mt-5" role="status">
                <span className="visually-hidden"></span>
            </div></div>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to='/login'></Navigate>;

};

export default PrivateRoute;