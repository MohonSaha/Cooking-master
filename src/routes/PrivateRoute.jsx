import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner className='d-flex align-items-center justify-content-center mx-auto' style={{}} animation="border" variant="primary" />
    }

    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>
};

export default PrivateRoute;