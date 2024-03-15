import React from 'react'
import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Homepage from '../pages/HomePage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import UserProfile from '../pages/UserProfile';
import Subscription from '../pages/Subscription';


const RedirectComponent = () => {
  const location = useLocation();
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (location.pathname !== "/") {
    //         navigate("/", { replace: true });
    //     }
    // }, []);

    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/subscription" element={<Subscription/>}/> 
            <Route path="/user-profile" element={<UserProfile/>}/>
        </Routes>
    );
}

export default RedirectComponent