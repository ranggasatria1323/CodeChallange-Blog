"use client"

import style from './hero.module.css'
import Link from 'next/link'
import { useEffect,useState } from 'react'
import { getBlogs } from '@/api/blog'

export default function Homepage(){
const [blogs, setBlogs] = useState([])

  const handleGetBlogsData = async () => {
    const data = await getBlogs()
    setBlogs(data)
  }

  useEffect(() => {
    handleGetBlogsData()
  })

    return(<div className={style['container']}>
        {blogs
            .filter((item) => item.id == "5EjztmfqBekVZuV8zYQ5JD")
            .map((item:any, index) => {
            return(
        <div className={style['Hero']} key={index}>
            <div style={{padding:'3% 5%', backgroundColor:'white', opacity:'80%', borderTopLeftRadius:'15px', borderBottomLeftRadius:'15px'}} className={style['textHead']}>
                <p style={{fontWeight:'bold', fontSize:'45px', lineHeight:'50px', opacity:'100%', marginBottom:'20px'}}>{item?.fields?.title}</p>
                <p style={{fontWeight:'normal', fontSize:'19px', lineHeight:'50px', opacity:'100%', marginBottom:'30px'}}>{item?.fields?.dateAt}</p>
                <Link style={{fontSize:'20px', backgroundColor:'#292929', opacity:'100%', borderRadius:'50px', padding:'10px', color:'white'}} href={`blog-detail/${item?.id}`}>Read Article</Link>
            </div>
        </div>)
        })}
        <div className={style['post']}>
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
                <p style={{marginTop:'7%', fontSize:'18px', fontWeight:'bold', color:'grey'}}>Sedan</p>
                <div style={{marginTop:'2%', fontWeight:500, width:'100%', height:'auto'}}>
                    <p style={{fontSize:'23px', lineHeight:'33px'}} >{item?.fields?.title}</p>
                </div>
            </Link>)
            })}
        </div>
        <hr style={{marginTop:'200px'}} />
        <div style={{marginTop:'50px'}}><p style={{fontSize:'30px', fontWeight:'bold'}}>Popular Category</p></div>
        <div className={style['popular-category']}>
        <div className={style['post']}>
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
                <p style={{marginTop:'7%', fontSize:'18px', fontWeight:'bold', color:'grey'}}>Sedan</p>
                <div style={{marginTop:'2%', fontWeight:500, width:'100%', height:'auto'}}>
                    <p style={{fontSize:'23px', lineHeight:'33px'}} >{item?.fields?.title}</p>
                </div>
            </Link>)
            })}
        </div>
        </div>
        <hr style={{marginTop:'600px'}} />
    </div>)
}