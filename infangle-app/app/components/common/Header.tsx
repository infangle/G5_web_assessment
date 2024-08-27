"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/Group 25.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import close from '../../../public/icons/close.svg';
import menu from '../../../public/icons/menu.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="header px-4 sm:px-8 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center">
      {/* Logo and Menu Toggle Icon */}
      <div className="logo-container flex items-center justify-between w-full">
        <Image src={logo} alt="Company Logo" className="logo h-12 sm:h-16 w-auto" />
        <button 
          className="sm:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image src={isOpen ? close : menu} alt="Menu Icon" className="w-8 h-8" />
        </button>
      </div>

      {/* Navbar Links and Auth Buttons */}
      <nav className={`nav-bar flex flex-col sm:flex-row items-center font-montserrat w-full sm:w-auto ${isOpen ? 'block' : 'hidden'} sm:block`}>
        <div className='nav-list flex flex-col sm:flex-row gap-4 sm:gap-8 items-center'>
          <Link href="/" className={`text-gray-700 ${pathname === '/' ? 'text-blue-500 underline' : ''}`}>Home</Link>
          <Link href="/teams" className={`text-gray-700 ${pathname === '/teams' ? 'text-blue-500 underline' : ''}`}>Teams</Link>
          <Link href="/success-stories" className={`text-gray-700 ${pathname === '/success-stories' ? 'text-blue-500 underline' : ''}`}>Success Stories</Link>
          <Link href="/about-us" className={`text-gray-700 ${pathname === '/about-us' ? 'text-blue-500 underline' : ''}`}>About Us</Link>
          <Link href="/blogs" className={`text-gray-700 ${pathname === '/blogs' ? 'text-blue-500 underline' : ''}`}>Blogs</Link>
          <Link href="/get-involved" className={`text-gray-700 ${pathname === '/get-involved' ? 'text-blue-500 underline' : ''}`}>Get Involved</Link>
        </div>

        <div className='auth-btn flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-0'>
          <button className='border py-2 px-4 rounded'>Login</button>
          <button className="bg-blue-500 font-montserrat text-white text-center py-2 px-4 rounded-md">Donate</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
