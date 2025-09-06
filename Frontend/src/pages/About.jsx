import React from 'react';
import {assets} from '../assets/assets';

function About() {
  return (
    <div>
     
       <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
       </div>

       <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Arogyam – Your Trusted Health Partner. Arogyam is an easy-to-use doctor appointment booking platform designed to connect patients with trusted healthcare professionals across India. Whether you need a general consultation or a specialist, we make it simple to find, book, and manage appointments — all in just a few clicks.</p>
          <p>We believe healthcare should be accessible, transparent, and stress-free. Arogyam provides real-time scheduling, doctor profiles, reviews, and digital prescriptions to help you make informed choices and save valuable time. No more long waiting hours or last-minute clinic visits.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our goal is to empower users with technology that improves the way healthcare is accessed. At Arogyam, we’re constantly innovating to ensure a smooth, secure, and reliable experience for both patients and healthcare providers. Your well-being is at the heart of everything we do.</p>
        </div>
       </div>


           <div className='text-xl my-4 text-gray-500'>
            <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
           </div>


           <div className='flex flex-col md:flex-row mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
              <b>EFFICIENCY:</b>
              <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
              <b>CONVENIENCE:</b>
              <p>Access to a network of trusted healthcare professionals in your areas.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
              <b>PERSONALIZATION:</b>
              <p>Tailored Recommendations and Reminders to help you stay on the top of your health.</p>
            </div>
           </div>


    </div>
  )
}
export default About;