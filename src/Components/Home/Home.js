import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center p-16'>
            <p className='text-xs text-orange-400'>Sale up to 70% off</p>
            <h1 className='text-4xl font-bold my-2 text-slate-700'>New Collection For Fall</h1>
            <h4 className='font-bold text-slate-700'>Discover all the new arrivals of ready-to-wear collection.</h4>
            <Link className='bg-orange-400 py-2 px-3 my-3 flex justify-center items-center w-36' to="/shop">Shop now</Link>
        </div>
    );
};

export default Home;