'use client'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {

  const [image, setImage] = useState(false);
  const[data, setData] = useState({
    title:'',
    description:'',
    category:'Startup',
    author:'Alex Bennett',
    authorImg:'/author.png',
  });

    const onChangeHandler = (r) => {
      const name = r.target.name;
      const value = r.target.value;
      setData(data=>({...data, [name]:value}))
      console.log(data)
    }

    const onSubmitHandler = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('category', data.category);
      formData.append('author', data.author);
      formData.append('authorImg', data.authorImg);
      formData.append('image', image);
      const response = await axios.post('/api/blog',formData)
      if(response.data.succes) {
        toast.success(response.data.msg);
        setImage(false);
        setData({title:'', description:'', category:'Startup', author:'Alex Bennett', authorImg:'/author.png'});

      }
      else{
        toast.error('Error');
      }
    }
  return (
    <>
      <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-12'>
        <p className='text-2xl font-semibold'>Uplod thumbnail</p>
        <label htmlFor="image">
          <Image className='mt-4 cursor-pointer' src={!image? assets.upload_area: URL.createObjectURL(image)} alt='' width={140} height={70} />
        </label>
        <input onChange={(e)=> setImage(e.target.files[0])} type="file" id='image' hidden required />
        <p className='text-2xl mt-4 font-semibold'>Blog Title</p>
        <input name='title' onChange={onChangeHandler} value={data.title} type="text" className='w-full sm:w-[500px] mt-4 px-4 py-3 border border-black' placeholder='Ketik Disini...' required />
        <p className='text-2xl mt-4 font-semibold'>Blog Description</p>
        <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" className='w-full sm:w-[500px] mt-4 px-4 py-3 border border-black' placeholder='Ketik Disini...' rows={6} required />
        <p className='text-2xl mt-4 '>Blog Category</p>
        <select name="category" onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border border-black text-black' >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type="submit" className='mt-8 w-40 h-12 bg-yellow-400 text-black font-semibold'>Add</button>
      </form>
    </>
  )
}

export default page