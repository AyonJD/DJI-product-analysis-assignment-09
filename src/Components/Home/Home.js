import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../Hooks/useReview';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [review] = useReview([])
    const navigate = useNavigate()
    const slicedReview = review.slice(0, 3);
    return (
        <>
            <div className='home-div flex flex-col md:flex-row justify-between items-center container mx-auto'>
                <div className="left w-full md:w-1/2 order-2 md:order-1 px-4 md:px-0">
                    <h1 className='text-3xl md:text-5xl font-medium'>DJI Mavic Mini Drone FlyCam Quadcopter</h1>
                    <p className='py-7'>The compact yet powerful DJI Mavic Mini Drone is your perfect creative companion, capturing every moment in a way that effortlessly elevates the ordinary. Weighing under 250 grams, DJI’s newest drone is almost as light as an iPhone. Mavic Mini features a maximum flight time of 30 minutes, which paired with vision sensors and GPS Precise Hover ensures increased control and safety during flight. Together with the easy-to-use DJI Fly app on your iPhone or iPad, you’ll have a simplified flying experience and a perspective unlike any other.</p>
                    <button className='button mb-16 md:mb-0 md:text-md md:font-medium px-5 py-2 md:px-8 rounded text-white'>Explore More</button>
                </div>
                <div className="right w-full md:w-1/2 order-1">
                    <img className='ml-auto' src="https://i.ibb.co/42q2jLw/d3.jpg" alt="" />
                </div>
            </div>
            <div className="review-parent grid grid-cols-1 md:grid-cols-3 gap-14 px-10">
                {
                    slicedReview.map(singleReview => <Review key={singleReview.id} singleReview={singleReview}></Review>)
                }
            </div>
            <div className="show-all-button text-center mt-8">
                <button onClick={() => navigate('/review')} className='button text-md font-medium px-8 py-2 rounded text-white'>Show All Review</button>
            </div>
        </>
    );
};

export default Home;