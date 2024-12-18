"use client"

import axios from "axios"
const access_token = "4i4y8ZV_mvVTa7P2fz1-RxkYeMVyp3Z0WfZUzHMBGFI"

export async function getBlogs(){
    const res = await axios.get(`https://cdn.contentful.com/spaces/lvj02o4fveu0/environments/master/entries?access_token=${access_token}&include=1`)
    const assets = res.data.includes.Asset
    const blogs = res.data.items.map((item:any,index:number) => {
        return {
            ...item,
            id:item?.sys?.id,
            image_url:assets[index]?.fields?.file?.url
        }
    })

    return blogs
}

export async function getBlogDetail(entriesId:string){
    const res = await axios.get(`https://cdn.contentful.com/spaces/lvj02o4fveu0/environments/master/entries/${entriesId}/?access_token=${access_token}&include=1`)  
    const blogDetail = res.data.fields
    return blogDetail
}

export async function getAssetDetail(assetId:string){
    const res = await axios.get(`https://cdn.contentful.com/spaces/lvj02o4fveu0/environments/master/assets/${assetId}?access_token=${access_token}`)  
    const assetDetail = res.data.fields
    return assetDetail
}