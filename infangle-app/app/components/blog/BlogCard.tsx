import React from 'react';
import Link from 'next/link'; // Import Link from 'next/link'
import { Blog } from './blog'; // Import the Blog interface

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog._id}`} passHref>
      <div className='card container p-4 flex flex-col cursor-pointer'>
        {/* Blog card content */}
        <div className='flex flex-col sm:flex-row gap-6 items-center mb-4'>
          {/* Author Info */}
          <div className='flex items-center gap-6'>
            <img
              className='w-20 h-20 rounded-full'
              src={blog.author?.image || 'https://picsum.photos/200/300'}
              alt='profile pic'
            />
            <div className='ml-4 flex flex-col'>
              <h2 className='font-semibold text-lg'>{blog.author?.name || 'Anonymous'}</h2>
              <p className='text-gray-600'>{blog.author?.role || 'Author'}</p>
            </div>
          </div>
          <p className='text-gray-500 mt-2 sm:mt-0'>{new Date(blog.createdAt).toLocaleDateString()}</p>
        </div>

        {/* Blog Content */}
        <div className='flex flex-col sm:flex-row'>
          {/* Image Section */}
          <div className='w-full sm:w-5/12 mb-4 sm:mb-0'>
            <img
              src={blog.image}
              alt='blog image'
              className='object-cover w-full h-[170px] rounded-tl-lg rounded-md'
            />
          </div>

          {/* Description Section */}
          <div className='flex-1 sm:pl-4'>
            <h3 className='text-xl font-bold mb-2'>{blog.title}</h3>
            <p className='text-gray-800'>{blog.description}</p>
          </div>
        </div>

        {/* Tags */}
        <div className='flex flex-wrap gap-2 mt-4'>
          {blog.tags.map((tag, index) => (
            <button key={index} className='bg-gray-200 rounded-full px-4 py-1 text-gray-700'>
              {tag}
            </button>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
