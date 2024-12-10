"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { getBlogDetail } from "@/api/blog";

export default function BlogDetail({ params }: { params: { id: string } }) {
  const { id } = React.use(params);
  const [blog, setBlog] = useState<any>(null);

  const handleGetBlogDetail = async () => {
    const blogDetail = await getBlogDetail(id);
    console.log("blogDetail = ", blogDetail);
    setBlog(blogDetail);
  };

  useEffect(() => {
    handleGetBlogDetail();
  }, []);

  return (
    <div style={{ marginTop: "10%", padding:'0 10%'}}>
      <h1 style={{ color: "black" }}>
        {" "}
        Title : {JSON.stringify(blog?.title)}{" "}
      </h1>
      <hr></hr>
      <div>{blog?.content1?.content.map((item, index) => {
            return <p key={index} className="mb-4"> {item.content.map((item2, index) => {
                return item2.value
            }).join(" ")} </p>
        })}</div>
      <div>
      </div>
    </div>
  );
}
