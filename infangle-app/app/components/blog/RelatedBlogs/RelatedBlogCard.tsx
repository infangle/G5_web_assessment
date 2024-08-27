import React from 'react';
import Link from 'next/link';
import { Blog } from '../../blog/blog'; 
import like from '../../../../public/icons/like.svg';

interface RelatedBlogCardProps {
  blog: Blog;
}

const RelatedBlogCard: React.FC<RelatedBlogCardProps> = ({ blog }) => {
  return (
    <div className="flex flex-col gap-4 text-[#8E8E8E] p-4 bg-white rounded-lg shadow-lg">
      <img
        src={blog.image}
        alt="Blog Image"
        className="w-full h-48 object-cover rounded-lg"
      />
      <h1 className="font-serif text-xl md:text-2xl mt-4">{blog.title}</h1>
      <div className="author flex items-center mt-2 text-sm md:text-base">
        <img
          src={blog.author?.image || 'https://picsum.photos/200/300'}
          alt="Author Profile"
          className="w-8 h-8 rounded-full mr-2"
        />
        by
        <p className="text-black font-semibold ml-1"> {blog.author?.name || 'Anonymous'}</p>
      </div>
      <div className="tags flex flex-wrap mt-2 space-x-2 text-sm md:text-base">
        {blog.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 text-xs md:text-sm rounded-full px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="desc font-normal mt-2 text-sm md:text-base">
        {blog.description.split('.')[0]}.
        <br />
        <br />
      </div>
      <hr className='border-t border-gray-300' />
      <div className="flex justify-between items-center mt-4 text-sm md:text-base">
        <div className="flex items-center">
          <img src={like} alt="Like Icon" className="w-5 h-5 mr-1" />
          <span>{blog.likes} likes</span>
        </div>
        <Link href={`/blogs/${blog._id}`} className="text-blue-500 hover:underline">Read more</Link>
      </div>
    </div>
  );
}

export default RelatedBlogCard;
