import Link from "next/link";
import React from "react";

const Post = ({ posts }) => {
  return (
    <div>
      <h1>List Of Post</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`} passHref>
            <h2>
              {" "}
              {post.id}, {post.title}{" "}
            </h2>
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Post;

export async function getStaticProps() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await responce.json();
  return {
    props: {
      posts: data
    },
  };
}
