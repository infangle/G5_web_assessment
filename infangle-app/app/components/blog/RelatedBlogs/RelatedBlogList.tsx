import React from 'react';
import RelatedBlogCard from './RelatedBlogCard';
import { Blog } from '../../blog/blog';

interface Props {
  blogs: Blog[];
}

const RelatedBlogList: React.FC<Props> = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {blogs.slice(0, 3).map((blog) => (
        <RelatedBlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default RelatedBlogList;
