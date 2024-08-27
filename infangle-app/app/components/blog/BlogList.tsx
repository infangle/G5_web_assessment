import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import { Blog } from './blog'; // Import the Blog interface

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://a2sv-backend.onrender.com/api/blogs');
        const data: Blog[] = await response.json();
        setBlogs(data.slice(0, 5)); // Limit to 5 blogs
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className='list px-8 py-6'>
      <div className='header flex items-center justify-between mb-8'>
        <h1 className='text-left text-xl font-bold'>Blogs</h1>
        <div className='flex-1 flex justify-center'>
          <form className='flex items-center space-x-2'>
            <input
              placeholder='Search...'
              className='bg-gray-200 rounded-[100px] py-2 px-4 w-80 h-10'
            />
            <button
              type='button'
              className='bg-[#264FAD] text-white py-2 px-4 rounded-[100px]'
            >
              + New Blog
            </button>
          </form>
        </div>
      </div>
      <div className='blogs overflow-y-auto px-12'>
        <div className='flex flex-col space-y-4'>
          {blogs.map((blog) => (
            <React.Fragment key={blog._id}>
              <BlogCard blog={blog} />
              <hr className='border-t border-gray-300' />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
