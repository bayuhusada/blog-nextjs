'use client'

import { assets, blog_data } from '@/Assets/assets'
import Footer from '@/Components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {

    const [data, setData] = useState(null);
    const fetchBlogData = () =>{
      for(let i=0; i<blog_data.length; i++)
        {
          if (Number(params.id)===blog_data[i].id) {
            setData(blog_data[i])
            console.log(blog_data[i])
            break;
          }
        }
    }

    useEffect(()=>{
      fetchBlogData();
    },[])
  return (data? <>


    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Link href="/">
        <h1 className='text-3xl font-bold text-yellow-400'>BLOGER</h1>
        </Link>
        <button className='flex items-center gap-2 font-medium py-1 px-4 sm:py-3 sm:px-6 border border-yellow-500 hover:bg-yellow-400 hover:text-white shadow-[-7px_7px_0px_#ffde21]'>GET STARTED</button>
      </div>
      <div className='text-center my-24'>
        <h1 className='text-2xl sm-text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        <Image className='mx-auto mt-6  border border-white rounded-full' src={data.author_img} alt='' height={100} width={100} />
        <p className='text-gray-600 mt-3 max-w-[700px] mx-auto text-xs sm:text-base underline'>{data.author}</p>
      </div>
    </div>

    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
      <Image src={data.image} alt="alt" />
      <h1 className='my-8 text-2xl font-semibold'>Intronduction</h1>
      <p>{data.description}</p>
      <h3 className='my-5 text-xl font-semibold'>Step- 1</h3>
      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <h3 className='my-5 text-xl font-semibold'>Step- 1</h3>
      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <h3 className='my-5 text-xl font-semibold'>Step- 1</h3>
      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <h3 className='my-5 text-xl font-semibold'>Conclusion</h3>
      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

      <div className='my-24'>
        <p className='text-black font-semibold my-4'>Share article</p>
      </div>

    </div>

    <Footer />
  </> : <></>
  )
}

export default page