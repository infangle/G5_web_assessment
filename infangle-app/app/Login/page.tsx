import React from 'react'
import logo from '../../public/images/Group.svg';
import Image from 'next/image';
import person from '../../public/images/Saly-14person.svg';

const Login = () => {
  return (
    <div className='flex flex-row'>
        <div className='left w-1/2 bg-white'>
            <div className='logo w-[160px] h-[60px]'>
                <Image src={logo} alt="logo">
                </Image>
            </div>
            <div className='left-content flex flex-row'>
              <div className='person'>
                <Image src={person} alt='user'></Image>

              </div>
              <div className='flex flex-col justify-center'>
                <h1 className='font-extrabold text-left'>Welcome<br></br>Back</h1>
                <p className='font-poppins'>Login to receive blogs and <br></br>
                learn more about A2SV</p>
              </div>
            </div>

        </div>
        <div className='right w-1/2 bg-[#264FAD]'>

        </div>
    </div>
  )
}

export default Login