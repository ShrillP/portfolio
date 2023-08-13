import React from 'react';
import { resume } from '../../assets/portfolioData';

const Footer = () => {
  return (
    <footer className='bg-[#12141e] pt-6'>
        <div className='container'>
          <div className='sm:flex items-center justify-between md:gap-8'>
            <div className='w-full text-center mb-7'>
              <h2 className='text-white text-[2rem] font-[700]'>If you made it this far, check out my socials and resume!</h2>
              <div className='space-x-10'>
                <span>
                  <a href='https://www.linkedin.com/in/shrill-patel/' className='text-white text-[3rem]'>
                    <i class="ri-linkedin-box-fill"></i>
                  </a>
                </span>
                <span>
                  <a href='https://github.com/ShrillP' className='text-white text-[3rem]'>
                    <i class="ri-github-fill"></i>
                  </a>
                </span>
                <span>
                  <a href={resume} className='text-white text-[3rem]'>
                  <i class="ri-newspaper-fill"></i>
                  </a>
                </span>
              </div>
              <h2 className='text-white text-[1rem] font-[400]'>Made by Shrill Patel</h2>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;