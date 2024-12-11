"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { getBlogDetail, getAssetDetail } from "@/api/blog";

export default function BlogDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const [blog, setBlog] = useState<any>(null);
  const [image, setImage] = useState(null);

  const handleGetBlogDetail = async () => {
    const blogDetail = await getBlogDetail(id);
    const assetDetail = await getAssetDetail(blogDetail?.image?.sys?.id);
    setBlog(blogDetail);
    setImage(assetDetail);
  };

  useEffect(() => {
    handleGetBlogDetail();
  }, []);

  return (
    <div style={{ marginTop: "100px", padding: "0 10%" }}>
      <h1
        style={{
          color: "black",
          fontSize: "30px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {blog?.title}
      </h1>
      <center><img src={image?.file?.url ? image?.file?.url : "https://via.placeholder.com/150"} style={{margin:'20px 0', borderRadius:'15px', height:'500px'}} /></center>
      <hr></hr>
      <div>
        {blog?.content1?.content.map((item, index) => {
          return (
            <p key={index} className="mb-5" style={{fontSize:'20px'}}>
              {" "}
              {item.content
                .map((item2) => {
                  return item2.value;
                })
                .join(" ")}{" "}
            </p>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}
