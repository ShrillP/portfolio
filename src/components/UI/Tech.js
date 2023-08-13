import React from 'react';
import { skillsData } from '../../assets/portfolioData';

function Tech() {
  return (
    <section id='technologies'>
      <div className='container lg:pt-5'>
        <div className='text-center'>
          <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>Technologies</h2>
          <p className='lg-max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[22px] leading-7'>
            I have worked on a wide range of projects in Full-Stack development, Mobile Application development, Machine Learning, Data Science, DevOps, and Computer Task Automation where I have become experienced with the following technologies.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {skillsData.map((category, index) => (
            <div key={index} className='bg-primaryColor shadow-lg rounded-lg p-6'>
              <h3 className='text-[1.5rem] font-semibold text-white'><i class={category.icon}></i> {category.title}</h3>
              <p className='mt-2 text-white'>
                {category.skills.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tech;
