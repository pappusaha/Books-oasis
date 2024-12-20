import React from 'react';
import Nav from '../../Default/Nav';
import Footer from '../../Default/Footer';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div >
            <Nav></Nav>
            <div className='w-11/12 mx-auto '>
            
            <Outlet></Outlet>
            </div>
        
        <div className=''>
        <Footer></Footer>
        </div>
        </div>
    );
};

export default Mainlayout;