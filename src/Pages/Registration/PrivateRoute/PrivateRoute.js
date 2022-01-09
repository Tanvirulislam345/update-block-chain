import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useFirebase();
    const location = useLocation();

    if (loading) {
        return <div className="App">
            <Spinner animation="grow" />
        </div>
    }

    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;