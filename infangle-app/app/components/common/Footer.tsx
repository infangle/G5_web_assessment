"use client";
import React from 'react';
import copyright from '../../../public/icons/copyright.svg';
import facebook from '../../../public/icons/facebook.svg';
import instagram from '../../../public/icons/instagram.svg';
import linkedin from '../../../public/icons/linkedin.svg';
import twitter from '../../../public/icons/twitter.svg';
import youtube from '../../../public/icons/youtube.svg';
import help from '../../../public/images/rafiki.png';

const Footer = () => {
  return (
    <div className='footer-container flex flex-col items-center px-8 py-6 text-[#000000] font-Montserrat'>
      <div className='flex flex-col md:flex-row justify-between gap-8 items-start w-full max-w-screen-xl'>
        {/* Left Section */}
        <div className='left flex flex-row gap-8 items-start mb-6 md:mb-0 w-full md:w-1/3'>
          <img src={help.src} alt="Help" className='w-32 h-auto' />
          <div className='left-half flex flex-col items-center w-full'>
            <p className='font-semibold text-xl text-center mb-4'>
              Get involved in improving tech<br />
              education in Africa!
            </p>
            <button className='bg-blue-500 text-white py-2 px-4 rounded w-full md:w-auto'>
              Support Us
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className='right flex flex-col md:flex-row gap-12 w-full md:w-2/3'>
          <div className='tealinkdms flex flex-col flex-1'>
            <ul className='font-semibold mb-2'>Links</ul>
            <li className='flex flex-col gap-2'>
              <a href='#'>Home</a>
              <a href='#'>Success Stories</a>
              <a href='#'>About Us</a>
              <a href='#'>Get Involved</a>
            </li>
          </div>

          <div className='teams flex flex-col flex-1'>
            <ul className='font-semibold mb-2'>Teams</ul>
            <li className='flex flex-col gap-2'>
              <a href='#'>Board Members</a>
              <a href='#'>Advisors/Mentors</a>
              <a href='#'>Executives</a>
              <a href='#'>Staff</a>
            </li>
          </div>

          <div className='blogs flex flex-col flex-1'>
            <ul className='font-semibold mb-2'>Blogs</ul>
            <li className='flex flex-col gap-2'>
              <a href='#'>Recent Blogs</a>
              <a href='#'>New Blogs</a>
            </li>
          </div>
        </div>
      </div>

      <div className='bottom flex flex-col md:flex-row justify-between items-center w-full max-w-screen-xl mt-6'>
        <div className='copyright flex items-center'>
          <img src={copyright.src} alt="Copyright" className="mr-2" />
          <span>copyright 2020 Africa to Silicon Valley, Inc. All rights reserved.</span>
        </div>
        <div className='socials flex flex-row space-x-4 mt-4 md:mt-0'>
          <img src={facebook.src} alt="Facebook" className="social-icon" />
          <img src={instagram.src} alt="Instagram" className="social-icon" />
          <img src={linkedin.src} alt="LinkedIn" className="social-icon" />
          <img src={twitter.src} alt="Twitter" className="social-icon" />
          <img src={youtube.src} alt="YouTube" className="social-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
