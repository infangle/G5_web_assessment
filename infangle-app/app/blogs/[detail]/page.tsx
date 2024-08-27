"use client";

import React, { useEffect, useState } from 'react';
import { Blog } from '../../components/blog/blog'; 
import RelatedBlogList from '../../components/blog/RelatedBlogs/RelatedBlogList';

interface Props {
  params: {
    detail: string;
  };
}

const BlogDetail: React.FC<Props> = ({ params }) => {
  const { detail } = params;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
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

        const tagsQuery = data.tags.join(',');
        const relatedResponse = await fetch(`https://a2sv-backend.onrender.com/api/blogs?tags=${tagsQuery}`);
        if (!relatedResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const relatedData: Blog[] = await relatedResponse.json();
        setRelatedBlogs(relatedData.filter((b) => b._id !== data._id));
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

  const getFirstSentence = (text: string) => {
    const index = text.indexOf('.');
    return index !== -1 ? text.slice(0, index + 1) : text;
  };

  const getRemainingText = (text: string) => {
    const index = text.indexOf('.');
    return index !== -1 ? text.slice(index + 1).trim() : '';
  };

  return (
    <div className='flex flex-col items-center px-4 md:px-8 lg:px-16 py-8'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-serif text-center' style={{
        fontFamily: 'IM FELL French Canon',
      }}>
        {blog.title}
      </h1>
      <div className='flex flex-wrap justify-center gap-2 mt-4 text-sm md:text-base'>
        {blog.tags.map((tag, index) => (
          <span key={index} className='text-gray-700'>
            {tag},
          </span>
        ))}
        <span className='text-gray-700'>| 6 min Read</span>
      </div>
      <img
        src={blog.image || "http"}
        alt='Blog image'
        className='object-cover w-full h-[350px] rounded-lg mt-6'
      />
      <div className='flex flex-col items-center mt-6 text-sm md:text-base'>
        <img
          src={blog.author?.image || 'https://picsum.photos/200/300'}
          alt='Author profile'
          className='w-12 h-12 rounded-full'
        />
        <div className='ml-4 flex gap-2'>
          <p className='text-lg font-normal'>{blog.author?.name || 'Anonymous'}</p> |
          <p className='text-gray-600'>{blog.author?.email || 'No email provided'}</p>
        </div>
      </div>
      <p className='text-gray-500 mt-4 text-sm md:text-base'>{blog.author?._id || 'No ID provided'}</p>
      <div className='text-gray-800 mt-6'>
        <span className='text-lg font-semibold'>
          {getFirstSentence(blog.description)}
        </span>
        <span className='block mt-2 text-base'>
          {getRemainingText(blog.description)}
        </span>
      </div>
      <div className='mt-8 w-full'>
        <h2 className='text-2xl font-bold mb-4'>Related Blogs</h2>
        <RelatedBlogList blogs={relatedBlogs} />
      </div>
    </div>
  );
};

export default BlogDetail;
