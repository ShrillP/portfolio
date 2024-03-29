import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className='pb-16'>
        <div className='container text-center'>
            <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Get In Touch</h2>
            <div className='md:flex justify-between items-center'>
                <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
                <iframe title='google-maps'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92025.57817734394!2d-79.38211088118592!3d43.88070937269149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d5efa0324ca9%3A0xf73d52812cb23d63!2sMarkham%2C%20ON!5e0!3m2!1sen!2sca!4v1691548976273!5m2!1sen!2sca" 
                        className='w-full h-full border-0'
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
                    <form className='w-full' method="POST" action="https://formspree.io/f/xoqynzbd">
                        <div className='mb-5'>
                            <input name="name" type='text' placeholder='Name' className='w-full p-3 focus:outline-none rounded-[5px]' />
                        </div>
                        <div className='mb-5'>
                            <input name="email" type='email' placeholder='Email' className='w-full p-3 focus:outline-none rounded-[5px]' />
                        </div>
                        <div className='mb-5'>
                            <input name="subject" type='text' placeholder='Subject' className='w-full p-3 focus:outline-none rounded-[5px]' />
                        </div>
                        <div className='mb-5'>
                            <textarea name="message" type='text' rows={3} placeholder='Write a message' className='w-full p-3 focus:outline-none rounded-[5px]' />
                        </div>
                        <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
};

export default Contact;