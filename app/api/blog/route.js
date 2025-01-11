import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModels";
const { NextResponse } = require("next/server");
import {writeFile} from 'fs/promises'


const loadDB = async () =>{
  await connectDB();
}

loadDB();

export async function GET(request) {


  return NextResponse.json({ msg: "api working" });
}


export async function POST(request) {
  const FormData = await request.formData();
  const timestamp = Date.now();
  
  const image = FormData.get('image');
  const imageByeData = await image.arrayBuffer();
  const imageBuffer = Buffer.from(imageByeData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, imageBuffer);
  const imgUrl = `/${timestamp}_${image.name}`;
  
  const blogData = {
    title:`${FormData.get('title')}`,
    description:`${FormData.get('description')}`,
    category:`${FormData.get('category')}`,
    author:`${FormData.get('author')}`,
    image:`${imgUrl}`,
    authorImg:`${FormData.get('authorImg')}`,
  }

  await BlogModel.create(blogData);
  console.log('blog saved')

  return NextResponse.json({succes:true, msg:"blog added successfully"});
}

