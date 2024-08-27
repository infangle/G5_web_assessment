"use client";
import React from 'react';
import BlogList from './../components/blog/BlogList';
import { Provider } from 'react-redux';
import { store } from '../../store/store'; 

const Home: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="p-4 md:p-6 lg:p-8">
        <BlogList />
      </div>
    </Provider>
  );
};

export default Home;
