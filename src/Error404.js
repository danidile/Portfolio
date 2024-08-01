import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const Error404 = () => {
    useParams();
    return (
        <div>
            <p>Error404</p>
            <Link to="/">Ritorna alla HomePage</Link>
        </div>
    )
};

export default Error404;