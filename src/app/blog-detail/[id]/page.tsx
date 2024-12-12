import * as React from "react";
import { client } from "@/utils/contentfuil";

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const blog = (await client.getEntry((await params).id)) as any;

  console.log(blog.fields.content1.content[2]);

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
        {blog?.fields?.title}
      </h1>
      <center>
        <img
          src={blog.fields.image?.fields.file?.url}
          style={{ margin: "20px 0", borderRadius: "15px", height: "500px" }}
        />
      </center>
      <hr></hr>
      <div>
        {blog?.fields.content1?.content.map((item: any, index: number) => {
          return (
            <p key={index} className="mb-5" style={{ fontSize: "20px" }}>
              {" "}
              {item.content.map(
                (item2: { value: string; marks: Array<{ type: string }> }) => {
                  return item2.marks.length && item2.marks[0].type == "bold" ? (
                    <b>{item2.value}</b>
                  ) : (
                    item2.value
                  );
                }
              )}
            </p>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}
