"use client"
import React from 'react'
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import BlogList from './components/blog/BlogList';


export const Home = () => {
  return (
    <div>
      <Header/>
      <BlogList/>
      <Footer/>
    </div>
  )
}

export default Home;
