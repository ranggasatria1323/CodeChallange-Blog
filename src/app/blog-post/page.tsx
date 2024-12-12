"use client";

import style from "./blog-post.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/utils/contentfuil";

export default function BlogPost() {
  const [fPost, setFpost]: Array<any> = useState([]);

  const fetchFeaturePost = async () => {
    const data = await client.getEntries();
    console.log(data.items);
    if (data.items.length) setFpost(data.items);
  };

  useEffect(() => {
    fetchFeaturePost();
  }, []);

  return (
    <>
      <div className={style["container"]}>
        <div className={style["container-post"]}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems:'center'}}>
            <h1 style={{fontSize:'36px', fontWeight:'bold'}}>Blog Post</h1>
            <input
              style={{
                borderRadius: "5px",
                padding: "10px",
                boxShadow: "0px 0px 15px rgba(0,0,0,15%)",
              }}
              placeholder="Search..."
              type="text"
              name="search"
            />
          </div>
          <div style={{ marginTop: "50px" }} className="grid grid-cols-3 gap-5">
            {fPost.map((item: any, index: number) => {
              return (
                <Link
                  href={`blog-detail/${item?.sys.id}`}
                  className={style["postHover"]}
                  key={index}
                >
                  <div className={style["inlineGrid1"]}>
                    <div>
                      <img
                        src={item?.fields.image?.fields?.file?.url}
                        height={"350px"}
                        width={"400px"}
                        alt={item?.fields?.title}
                        style={{
                          borderRadius: "15px",
                          width: "100%",
                          height: "250px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                  <p
                    style={{
                      marginTop: "7%",
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "grey",
                    }}
                  >
                    {item?.fields?.dateAt}
                  </p>
                  <div
                    style={{
                      marginTop: "2%",
                      fontWeight: 500,
                      width: "100%",
                      height: "auto",
                    }}
                  >
                    <p style={{ fontSize: "23px", lineHeight: "33px" }}>
                      {item?.fields?.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
