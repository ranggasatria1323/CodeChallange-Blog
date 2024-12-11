"use client"

import { getBlogs } from '@/api/blog'
import style from './blog-post.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function BlogPost(){
    const [blogs, setBlogs] = useState([])
    
      const handleGetBlogsData = async () => {
        const data = await getBlogs()
        setBlogs(data)
      }
    
      useEffect(() => {
        handleGetBlogsData()
      },[])
    
        return(<>
        <div className={style['container']}>
            <div className={style['container-post']}>
            <input type='text' name='search' />
                <div className="grid grid-cols-1 grid-cols-3 gap-8">
                {blogs
                    .filter((item) => item.id != "5EjztmfqBekVZuV8zYQ5JD")
                    .map((item:any, index) => {
                    return(
                    <Link href={`blog-detail/${item?.id}`} className={style['postHover']} key={index}>
                        <div className={style['inlineGrid1']}>
                            {/* <img style={{height:'auto', width:'100%', objectFit:'cover', borderRadius:'15px'}} src='https://cdn0-production-images-kly.akamaized.net/5SvwpfnqNVacME0dJX8anl1lTWo=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2374839/original/081333200_1538679407-2-6.jpg'
                            /> */}
                            <div>{item?.image_url && (<img src={item?.image_url}  height={"350px"} width={"400px"} alt={item?.fields?.title} style={{borderRadius:'15px', width:'100%', height:'250px', objectFit:'cover'}}  />)}</div>
                        </div>
                        <p style={{marginTop:'7%', fontSize:'18px', fontWeight:'bold', color:'grey'}}>{item?.fields?.dateAt}</p>
                        <div style={{marginTop:'2%', fontWeight:500, width:'100%', height:'auto'}}>
                            <p style={{fontSize:'23px', lineHeight:'33px'}} >{item?.fields?.title}</p>
                        </div>
                    </Link>)
                    })}
                </div>
            </div>
        </div>
    </>)
}