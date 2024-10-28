import React from 'react';
import Nav from '../../Default/Nav';
import Footer from '../../Default/Footer';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div >
            <div className='w-11/12 mx-auto'>
            <Nav></Nav>
            <Outlet></Outlet>
            </div>
        
         <Footer></Footer>
        </div>
    );
};

export default Mainlayout;