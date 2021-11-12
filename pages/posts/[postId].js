import { useRouter } from "next/router";
import React from "react";

const PostId = ({ post }) => {
  const router = useRouter()

  if(router.isFallback === true) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostId;

export async function getStaticPaths() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await responce.json();

  // const paths = data.map(post => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     }
  //   }
  // })

  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await responce.json();
  if(!data.id) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      post: data,
    },
  };
}
