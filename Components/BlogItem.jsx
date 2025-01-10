import { blog_data, assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({title, description, category, image, author, id}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-gray-300 hover:shadow-[-7px_7px_0px_#ffde21]'>
      <Link href={`/Blog/${id}`}>
      <Image src={image} alt='gambar' width={400} height={400} className='border-b border-gray-300'/>
      </Link>
      <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
      <div className="p-5">
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
        <p className='mb-3 font-normal text-gray-700'>{description}</p>
        <p className='mb-3 font-normal text-gray-700'>{author}</p>
        <Link href={`/Blog/${id}`} className='inline-flex items-center py-2 font-semibold text-center text-gray-900'>
          Read More <Image src={assets.arrow} className='ml-2' alt='' width={12} />
        </Link>
      </div>
    </div>
  )
}

export default BlogItem