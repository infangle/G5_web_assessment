import React from 'react'

const BlogCard = () => {
  return (
    <div className='card container p-4 flex flex-col'>
      {/* First row: User profile */}
      <div className='flex flex-row gap-6 items-center mb-4'>
        <img
          className='w-20 h-20 rounded-full'
          src='https://picsum.photos/200/300'
          alt='profile pic'
        />
        <div className='ml-4 flex flex-col'>
          <h2 className='font-semibold text-lg'>John Doe</h2>
          <p className='text-gray-600'>Software Engineer</p>
        </div>
        <p className='text-gray-500'>. Date</p>
      </div>

      {/* Second row: Blog */}
      <div className='flex flex-1 '>
        <div className='left w-7/12 pr-4 flex flex-col'>
          <h3 className='text-xl font-bold mb-2'>Blog Title</h3>
          <p className='text-gray-800 flex-1'>
            Blog content goes here. This is where the main text of the blog will be displayed.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore optio repellat 
            praesentium quidem saepe assumenda, fuga nulla sequi porro quis aspernatur accusamus 
            quia delectus beatae at repellendus qui nostrum necessitatibus.
          </p>
        </div>
        <div className='image w-5/12 flex  '>
          <img
            src='https://picsum.photos/200/300'
            alt='blog image'
            className='object-cover w-full h-[170px] rounded-tl-lg rounded-md'
          />
        </div>
      </div>

      {/* Third row: Categories */}
      <div className='flex flex-wrap gap-2 mt-auto'>
        <button className='bg-gray-200 rounded-full px-4 py-1 text-gray-700'>Category 1</button>
        <button className='bg-gray-200 rounded-full px-4 py-1 text-gray-700'>Category 2</button>
        <button className='bg-gray-200 rounded-full px-4 py-1 text-gray-700'>Category 3</button>
      </div>
    </div>
  )
}

export default BlogCard
