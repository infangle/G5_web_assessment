"use client"
import React from 'react'
import Image from 'next/image';
import logo from '../../../public/images/Group 25.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="header px-8 py-6 flex flex-row justify-between items-center">
      <div className="logo-container py-2">
        <Image src={logo} alt="Company Logo" className="logo h-[50px] w-[197px]" />
      </div>
      <div className='nav-bar flex items-center font-montserrat'>
        <div className='nav-list flex flex-row gap-8 items-center'>

            <Link 
              href="/" 
              className={`text-[#565656] ${pathname === '/' ? 'text-blue-500 underline' : ''}`}
            >
              Home
            </Link>
          
         
            <Link 
              href="/teams" 
              className={`text-[#565656] ${pathname === '/teams' ? 'text-blue-500 underline' : ''}`}
            >
              Teams
            </Link>
          
         
            <Link 
              href="/success-stories" 
              className={`text-[#565656] ${pathname === '/success-stories' ? 'text-blue-500 underline' : ''}`}
            >
              Success Stories
            </Link>
          
         
            <Link 
              href="/about-us" 
              className={`text-[#565656] ${pathname === '/about-us' ? 'text-blue-500 underline' : ''}`}
            >
              About Us
            </Link>
          
         
            <Link 
              href="/blogs" 
              className={`text-[#565656] ${pathname === '/blogs' ? 'text-blue-500 underline' : ''}`}
            >
              Blogs
            </Link>
          
         
            <Link 
              href="/get-involved" 
              className={`text-[#565656] ${pathname === '/get-involved' ? 'text-blue-500 underline' : ''}`}
            >
              Get Involved
            </Link>
          
        </div>
      </div>

      <div className='auth-btn flex flex-row gap-6'>
        <button>
          Login
        </button>

        <button className="bg-[#264FAD] font-montserrat text-white text-center h-[40px] w-[95px] rounded-[10px]">
          Donate
        </button>
      </div>
    </header>
  )
}

export default Header
