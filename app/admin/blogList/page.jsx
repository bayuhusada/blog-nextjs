'use client'
import BlogTableItem from '@/Components/AdminComponents/BlogTableItem'
import React from 'react'

const page = () => {
  return (
    <div className='flex-1 pt px-5 sm:px-12 sm:pl-16'>
      <h1>All Blogs</h1>
      <div className='relative h-[80px] max-w-[850px] overflow-x-auto mt-4 border border-black scrollbar-hide'>
          <table className='w-full text-sm text-green-500'>
            <thead className='text-sm text-gray-800 text-left uppercase bg-gray-50'>
                <tr>
                  <th scope='col' className='hidden sm:block px-6 py-3'>
                    Author Name
                  </th>
                  <th scope='col' className=' px-6 py-3'>
                    Blog Title
                  </th>
                  <th scope='col' className=' px-6 py-3'>
                    Blog Date
                  </th>
                  <th scope='col' className=' px-6 py-3'>
                    Action
                  </th>
                </tr>
            </thead>
            <tbody>
              <BlogTableItem />
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default page