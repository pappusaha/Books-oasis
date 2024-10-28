import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=' flex flex-col justify-center items-center text-lg py-10 '>
            <h1 className=' text-9xl '>404</h1>
            <p>Page not found</p>
            <NavLink to={'/'} className={'bg-gray-100 font-extrabold p-5 rounded-full'}>Back to Home ? </NavLink>
        </div>
    );
};

export default ErrorPage;