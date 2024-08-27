import React from 'react';
import Link from 'next/link';
import { Blog } from '../../blog/blog'; // Adjust path if necessary
import like from '../../../../public/icons/like.svg'; // Adjust path if necessary

interface RelatedBlogCardProps {
  blog: Blog;
}

const RelatedBlogCard: React.FC<RelatedBlogCardProps> = ({ blog }) => {
  return (
    <div className="flex flex-col gap-4 text-[#8E8E8E]">
      {/* Blog Image */}
      <img
        src={blog.image}
        alt="Blog Image"
        className="w-full h-[300px] object-cover"
      />

      {/* Blog Title */}
      <h1 className="font-serif mt-4">{blog.title}</h1>

      {/* Author Information */}
      <div className="author flex items-center mt-2">
        <img
          src={blog.author?.image || 'https://picsum.photos/200/300'}
          alt="Author Profile"
          className="w-10 h-10 rounded-full mr-2"
        />by
        <p className="text-black font-semibold"> {blog.author?.name || 'Anonymous'}</p>
      </div>

      {/* Blog Tags */}
      <div className="tags flex flex-wrap mt-2 space-x-2">
        {blog.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 text-sm rounded-full px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Blog Description */}
      <div className="desc font-normal mt-2">
        {blog.description.split('.')[0]}.
        <br></br>
        <br></br>
      </div>
      <hr className='border-t border-gray-300' />


      {/* Like Icon and Read More Link */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24">
	<path fill="#9ca3af" d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14H6.667L4 18V4h16z" />
</svg>
          <span>{blog.likes} likes</span>
        </div>
        <Link href={`/blogs/${blog._id}`}className="text-blue-500">Read more
        </Link>
      </div>
    </div>
  );
}

export default RelatedBlogCard;
