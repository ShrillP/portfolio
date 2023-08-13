import React from 'react';
import { Carousel } from '../../Project-Carousel/Carousel';

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <div className='container lg:pt-5'>
            <div className='text-center'>
                <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>Personal Projects</h2>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <Carousel />
            </div>
        </div>
    </section>
  );
};

export default Portfolio;