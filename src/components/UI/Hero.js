import React from 'react';
import CountUp from 'react-countup';
import { resume, heroImg } from '../../assets/portfolioData';

const Hero = () => {
  return (
    <section className='pt-0' id='about'>
        <div className='container pt-14'>
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                {/* ============= hero left content ============= */}
                <div className='w-full md:basis-1/2'>
                    <h1 
                        data-aos='fade-right'
                        data-aos-duration='1500'
                        className='text-headingColor font-[800] text-[1.8rem] sm:text-[60px] leading-[35px] sm:leading-[60px] mt-5'
                    >
                        Hi there,<br />I'm Shrill
                    </h1>
                    <h5 
                        data-aos='fade-up' 
                        data-aos-duration='1500' 
                        className='text-headingColor font-[400] text-[22px]'
                    >
                        An aspiring Software Engineer passionate about Full-Stack and Data Engineering, seeking new grad SWE roles!
                    </h5>
                    <div
                        data-aos='flip-up' 
                        data-aos-duration='1800' 
                        data-aos-delay='200'
                        className='flex items-center gap-6 mt-7'
                    >
                        <a href={resume} target="_blank">
                            <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                                <i class="ri-article-line"></i>Download My Resume
                            </button>
                        </a>
                        <a href='#portfolio' className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>
                            Explore My Portfolio
                        </a>
                    </div>
                    <div className='flex items-center gap-9 mt-14'>
                            <span className='text-smallTextColor text-[20px] font-[600]'>
                                Connect With Me:
                            </span>
                            <span>
                                <a href='https://www.linkedin.com/in/shrill-patel/' className='text-smallTextColor text-[40px] font-[600]'>
                                    <i class="ri-linkedin-box-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a href='https://github.com/ShrillP' className='text-smallTextColor text-[40px] font-[600]'>
                                    <i class="ri-github-fill"></i>
                                </a>
                            </span>
                        </div>
                </div>
                {/* ============= hero left end ============= */}
                {/* ============= hero img start ============= */}
                <div className='basis-5/12 mt-5 sm:mt-5'>
                    <figure className='flex items-center justify-center scale-125'>
                        <img src={heroImg} alt='' />
                    </figure>
                </div>
                {/* ============= hero img end ============= */}
                {/* ============= hero content start ============= */}
                <div className='md:basis-1/5 flex justify-between text-center mt-10 md:mt-0 md:flex-col md:justify-end md:text-end'>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={4.0} duration={2} decimal='.' decimals={1} suffix='' />
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>
                            Cumulative GPA
                        </h4>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={2.5} duration={2} decimal='.' decimals={1} suffix='+' />
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>
                            Years of Experience
                        </h4>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={100} duration={2} suffix='%' />
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>
                            Satisfaction Rate
                        </h4>
                    </div>
                </div>
                {/* ============= hero content end ============= */}
            </div>
        </div>
    </section>
  );
};

export default Hero;