"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { getBlogDetail, getAssetDetail } from "@/api/blog";

export default function BlogDetail({ params }: { params: { id: string } }) {
  const { id } = React.use(params);
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
    <div style={{ marginTop: "10%", padding: "0 10%" }}>
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
      <center><img src={image?.file?.url ? image?.file?.url : "https://via.placeholder.com/150"} /></center>
      <hr></hr>
      <div>
        {blog?.content1?.content.map((item, index) => {
          return (
            <p key={index} className="mb-4">
              {" "}
              {item.content
                .map((item2, index) => {
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
