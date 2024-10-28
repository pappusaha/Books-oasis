import React from 'react';

const Hero = () => {
    return (
        <div className="hero  bg-[#1313130D]  min-h-screen rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse w-10/12 mx-auto">
          <img
            src="../../public/Image/bannnger.png"
            className="max-w-sm rounded-lg w-full shadow-2xl  h-auto lg:w-[320px] lg:h-[398px] mb-6 lg:mb-0 " />
          <div className=' '>
            <h1 className="text-4xl w-full mb-10 md:text-5xl lg:text-6xl  font-bold md:w-2/3 ">Books to freshen up your bookshelf!</h1>
            
            <button className="text-white  font-bold p-4 rounded-lg bg-[#23BE0A] lg:w-auto">View The List</button>
          </div>
        </div>
      </div>
    );
};

export default Hero;