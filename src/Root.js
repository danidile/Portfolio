import React from 'react';
import { NavLink , Link, Outlet } from "react-router-dom";
import NavBar from './NavBar';
const Root = () => {
    
    return (
        <>
            <NavBar />
        <main>
            <div id="app">
            <Outlet />
            </div>
        </main>
    </>
    )
};

export default Root;