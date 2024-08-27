"use client"

import React, { useEffect, useState } from 'react';
import { Blog } from '../../components/blog/blog'; // Adjust path if necessary

interface Props {
  params: {
    detail: string;
  };
}

const BlogDetail: React.FC<Props> = ({ params }) => {
  const { detail } = params;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://a2sv-backend.onrender.com/api/blogs/${detail}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Blog = await response.json();
        setBlog(data);
      } catch (error: any) {
        setError(error.message || 'Error fetching blog details');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [detail]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!blog) return <p>No blog found</p>;

  // Function to get the first sentence
  const getFirstSentence = (text: string) => {
    const index = text.indexOf('.');
    return index !== -1 ? text.slice(0, index + 1) : text;
  };

  // Function to get the remaining text
  const getRemainingText = (text: string) => {
    const index = text.indexOf('.');
    return index !== -1 ? text.slice(index + 1).trim() : '';
  };

  return (
    <div className='flex flex-col items-center px-24 py-8'>
      <h1 className='text-center' style={{
        fontFamily: 'IM FELL French Canon',
        fontSize: '48px',
        fontWeight: '400',
        lineHeight: '35px',
        textAlign: 'left'
      }}>
        {blog.title}
      </h1>

      <div className='flex justify-center gap-2 mt-4'>
        {blog.tags.map((tag, index) => (
          <span key={index} className='text-gray-700'>
            {tag} ,
          </span>
        ))}
        <span className='text-gray-700'>
          | 6 min Read
        </span>
      </div>

      <img
        src={blog.image}
        alt='Blog image'
        className='object-cover w-full px-20 h-[350px] rounded-lg mt-6'
      />

      <div className='flex flex-col items-center mt-6'>
        <img
          src={blog.author?.image || 'https://picsum.photos/200/300'}
          alt='Author profile'
          className='w-12 h-12 rounded-full'
        />
        <div className='ml-4 flex flex-row gap-2'>
          <p className='text-lg font-normal'>{blog.author?.name || 'Anonymous'}</p> |
          <p className='text-gray-600'>{blog.author?.email || 'No email provided'}</p>
        </div>
      </div>

      <p className='text-gray-500 mt-4'>{blog.author?._id || 'No ID provided'}</p>

      <div className='text-gray-800 mt-6 ml-6'>
        <span className='text-lg font-semibold'>
          {getFirstSentence(blog.description)}
        </span>
        <br>
        </br><br></br>
        <span>
          {getRemainingText(blog.description)}
        </span>
      </div>
    </div>
  );
};

export default BlogDetail;
