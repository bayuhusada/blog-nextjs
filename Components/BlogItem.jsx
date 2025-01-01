import { blog_data } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogItem = () => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-gray-300 hover:shadow-[-7px_7px_0px_#ffde21]'>
      <Image src={blog_data[0].image} alt='gambar' width={400} height={400} className='border-b border-gray-300'/>
      <p clasname='ml-5 mt-5 px-1 inline-block bg- text-white text-sm'>{blog_data[0].category}</p>
    </div>
  )
}

export default BlogItem