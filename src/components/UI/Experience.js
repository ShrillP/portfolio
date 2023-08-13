import React from 'react';
import { experienceData } from '../../assets/portfolioData';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return (
    <section id='experience'>
        <div className='container lg:pt-5'>
            <div className='text-center'>
                <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>Industry Experience</h2>
                <p className='lg-max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[22px] leading-7'>
                    With each experience, I have been able to expand my technological toolkit and make a lasting impact on the companies I have worked for.
                </p>
            </div>
            <div className='flex flex-col justify-center sm:py-12'>
                <VerticalTimeline lineColor='#a0a7d6'>
                    {experienceData.map((exp, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(116, 87, 226)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '10px solid  rgb(116, 87, 226)' }}
                            date={exp.date}
                            dateClassName='text-smallTextColor font-[500] text-[18px]'
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<img src={exp.icon} style={{width: '100%', height: '100%', borderRadius: '40%'}}></img>}
                        >
                            <h3 className="vertical-timeline-element-title text-white font-[600] text-[18px]">{exp.jobTitle}</h3>
                            <h4 className="vertical-timeline-element-subtitle text-white font-[500] text-[16px]">{exp.subtitle}</h4>
                            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap',}}>
                                {exp.techStack.map((tag, idx) => (
                                    <p key={idx} className='text-smallTextColor' style={{background: '#fff', borderRadius: '10px', padding: '10px', marginRight: '5px', fontSize: '10px'}}>{tag}</p>
                                ))}
                            </div>
                            <p className='text-white font-[500] text-[16px]'>{exp.description}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    </section>
  );
};

export default Experience;