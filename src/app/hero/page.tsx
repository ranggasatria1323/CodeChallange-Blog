"use client";

import style from "./hero.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { client } from "@/utils/contentfuil";

export default function Homepage() {
  const [hero, setHero]: any | null = useState(null);
  const [fPost, setFpost]: Array<any> = useState([]);
  const [popularCategory, setPopularCategory]: any | null = useState(null);

  const fetchHero = async () => {
    const data = await client.getEntry("5EjztmfqBekVZuV8zYQ5JD");
    setHero(data);
  };

  const fetchFeaturePost = async () => {
    const data = await client.getEntries({
      limit: 3,
    });
    console.log(data.items);
    if (data.items.length) setFpost(data.items);
  };

  const fetchPopularCategory = async () => {
    const data = await client.getEntry("3VWww5If9h9Fth3StcCtu3");
    setPopularCategory(data);
  };

  useEffect(() => {
    fetchHero();
    fetchFeaturePost();
    fetchPopularCategory();
  }, []);

  return (
    <>
      <div className={style["container"]}>
        <div className={style["Hero"]}>
          <div
            style={{
              padding: "3% 5%",
              backgroundColor: "white",
              opacity: "80%",
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
            }}
            className={style["textHead"]}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "45px",
                lineHeight: "50px",
                opacity: "100%",
                marginBottom: "20px",
              }}
            >
              {hero?.fields?.title}
            </p>
            <p
              style={{
                fontWeight: "normal",
                fontSize: "19px",
                lineHeight: "50px",
                opacity: "100%",
                marginBottom: "30px",
              }}
            >
              {hero?.fields?.dateAt}
            </p>
            <Link
              style={{
                fontSize: "20px",
                backgroundColor: "#292929",
                opacity: "100%",
                borderRadius: "50px",
                padding: "10px",
                color: "white",
              }}
              href={`blog-detail/${hero?.sys.id}`}
            >
              Read Article
            </Link>
          </div>
        </div>
        <div style={{ marginTop: "50px" }}>
          <p
            style={{ fontSize: "30px", fontWeight: "bold" }}
            className={style["popular-text"]}
          >
            Featured Posts
          </p>
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
        <hr style={{ marginTop: "100px" }} />
        <div style={{ marginTop: "50px" }}>
          <p
            style={{ fontSize: "30px", fontWeight: "bold" }}
            className={style["popular-text"]}
          >
            Popular Category
          </p>
        </div>
        <div className={style["popular-category"]}>
          <Link
            href={`blog-detail/${popularCategory?.sys.id}`}
            className={style["postHover"]}
          >
            <div className={style["inlineGrid2"]}>
              <div>
                <img
                  src={"https:" + popularCategory?.fields.image.fields.file.url}
                  height={"550px"}
                  width={"400px"}
                  alt={popularCategory?.fields?.title}
                  style={{
                    borderRadius: "15px",
                    width: "100%",
                    height: "650px",
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
              {popularCategory?.fields?.dateAt}
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
                {popularCategory?.fields?.title}
              </p>
            </div>
          </Link>
        </div>
      </div>
      <hr style={{ marginTop: "60px" }} />
      <Footer />
    </>
  );
}
