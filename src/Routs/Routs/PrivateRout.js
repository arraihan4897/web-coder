import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';


const PrivateRout = ({children}) => {
    const {user}=useContext(AuthContext);
    if(user && user.email){
        return children;
    }
    return <Navigate to={'Login'}></Navigate>;
};

export default PrivateRout;