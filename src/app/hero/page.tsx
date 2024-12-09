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
        {blogs.map((item:any, index) => {
            return(
        <div className={style['Hero']} key={index}>
            <div style={{padding:'3% 5%', backgroundColor:'white', opacity:'80%', borderTopLeftRadius:'15px', borderBottomLeftRadius:'15px'}} className={style['textHead']}>
                <p style={{fontWeight:'bold', fontSize:'45px', lineHeight:'50px', opacity:'100%', marginBottom:'20px'}}>{item?.fields?.title}</p>
                <p style={{fontWeight:'normal', fontSize:'19px', lineHeight:'50px', opacity:'100%', marginBottom:'30px'}}>{item?.fields?.content}</p>
                <Link style={{fontSize:'20px', backgroundColor:'#292929', opacity:'100%', borderRadius:'50px', padding:'10px', color:'white'}} href="/">Read Article</Link>
            </div>
        </div>)
        })}
        <div className={style['post']}>
            <Link href="" className={style['postHover']}>
                <div className={style['inlineGrid1']}>
                    {/* <img style={{height:'auto', width:'100%', objectFit:'cover', borderRadius:'15px'}} src='https://cdn0-production-images-kly.akamaized.net/5SvwpfnqNVacME0dJX8anl1lTWo=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2374839/original/081333200_1538679407-2-6.jpg'
                    /> */}
                </div>
                <p style={{marginTop:'7%', fontSize:'18px', fontWeight:'bold', color:'grey'}}>Sedan</p>
                <div style={{marginTop:'2%', fontWeight:500, width:'100%', height:'auto'}}>
                    <p style={{fontSize:'23px', lineHeight:'33px'}} >Unveiling the BMW 3 Series: A Perfect Blend of Performance, Style, and Innovation</p>
                </div>
            </Link>
            <Link href="" className={style['postHover']}>
                <div className={style['inlineGrid2']}>
                    {/* <img style={{height:'auto', width:'100%', objectFit:'cover', borderRadius:'15px'}} src='https://akcdn.detik.net.id/visual/2015/03/30/2bea6bee-cd0c-4362-9ea0-f3e11d91f426_169.jpg?w=650'
                    /> */}
                </div>
                <p style={{marginTop:'7%', fontSize:'18px', fontWeight:'bold', color:'grey'}}>SUV</p>
                <div style={{marginTop:'2%', fontWeight:500, width:'100%', height:'auto'}}>
                    <p style={{fontSize:'23px', lineHeight:'33px'}}>Discover the Ultimate in Luxury and Performance: Why the BMW X7 Stands Out</p>
                </div>
            </Link>
            <Link href="" className={style['postHover']}>
                <div className={style['inlineGrid3']}>
                    {/* <img style={{height:'auto', width:'100%', objectFit:'cover', borderRadius:'15px'}} src='https://www.irishtimes.com/resizer/v2/6LIXU2GRIM6YZMQFCBRDNZGYTE.jpg?auth=32210be2d91a8b228f25d66079c1e34860ab618cdec1757d1068816b96cdd820&smart=true&width=1024&height=576'
                    /> */}
                </div>
                <p style={{marginTop:'7%', fontSize:'18px', fontWeight:'bold', color:'grey'}}>Sport</p>
                <div style={{marginTop:'2%', fontWeight:500, width:'100%', height:'auto'}}>
                    <p style={{fontSize:'23px', lineHeight:'33px'}}>Exploring the Elegance and Power: Why the BMW 8 Series Is Your Ultimate Luxury Ride</p>
                </div>
            </Link>
            
        </div>
        <hr style={{marginTop:'15%'}} />
        <div className={style['post']}>
            <Link href="" className={style['postHover']}>
                <div className={style['inlineGrid1']}>
                    {/* <img style={{height:'auto', width:'100%', objectFit:'cover', borderRadius:'15px'}} src='https://cdn0-production-images-kly.akamaized.net/5SvwpfnqNVacME0dJX8anl1lTWo=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2374839/original/081333200_1538679407-2-6.jpg'
                    /> */}
                </div>
                <p style={{marginTop:'7%', fontSize:'18px', fontWeight:'bold', color:'grey'}}>Sedan</p>
                <div style={{marginTop:'2%', fontWeight:500, width:'100%', height:'auto'}}>
                    <p style={{fontSize:'23px', lineHeight:'33px'}} >Unveiling the BMW 3 Series: A Perfect Blend of Performance, Style, and Innovation</p>
                </div>
            </Link>
            <Link href="" className={style['postHover']}>
                <div className={style['inlineGrid2']}>
                    {/* <img style={{height:'auto', width:'100%', objectFit:'cover', borderRadius:'15px'}} src='https://akcdn.detik.net.id/visual/2015/03/30/2bea6bee-cd0c-4362-9ea0-f3e11d91f426_169.jpg?w=650'
                    /> */}
                </div>
                <p style={{marginTop:'7%', fontSize:'18px', fontWeight:'bold', color:'grey'}}>SUV</p>
                <div style={{marginTop:'2%', fontWeight:500, width:'100%', height:'auto'}}>
                    <p style={{fontSize:'23px', lineHeight:'33px'}}>Discover the Ultimate in Luxury and Performance: Why the BMW X7 Stands Out</p>
                </div>
            </Link>
            <Link href="" className={style['postHover']}>
                <div className={style['inlineGrid3']}>
                    {/* <img style={{height:'auto', width:'100%', objectFit:'cover', borderRadius:'15px'}} src='https://www.irishtimes.com/resizer/v2/6LIXU2GRIM6YZMQFCBRDNZGYTE.jpg?auth=32210be2d91a8b228f25d66079c1e34860ab618cdec1757d1068816b96cdd820&smart=true&width=1024&height=576'
                    /> */}
                </div>
                <p style={{marginTop:'7%', fontSize:'18px', fontWeight:'bold', color:'grey'}}>Sport</p>
                <div style={{marginTop:'2%', fontWeight:500, width:'100%', height:'auto'}}>
                    <p style={{fontSize:'23px', lineHeight:'33px'}}>Exploring the Elegance and Power: Why the BMW 8 Series Is Your Ultimate Luxury Ride</p>
                </div>
            </Link>
            
        </div>
        <hr style={{marginTop:'15%'}} />
    </div>)
}