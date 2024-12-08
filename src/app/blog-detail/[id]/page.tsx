"use client"

import * as React from 'react' 
import { useState, useEffect } from "react"
import { documentToHtmlString  } from '@contentful/rich-text-html-renderer';
import { Interweave } from 'interweave';
import { getBlogDetail } from "./../../../api/blog"

export default function BlogDetail({ params }:{ params:{ id:string }}){
    const { id } = React.use(params)
    const [blog, setBlog] = useState<any>(null)

    const handleGetBlogDetail = async () => {
        
        const blogDetail = await getBlogDetail(id)
        console.log("blogDetail = ", blogDetail)
        setBlog(blogDetail)
    }

    useEffect(() => {
        handleGetBlogDetail()
    },[])

    return (<div>
        <h1> Title : {JSON.stringify(blog?.title)} </h1>
        <hr></hr>
        <div> 
            <Interweave content={documentToHtmlString(blog?.body)} />
        </div>
    </div>)
}