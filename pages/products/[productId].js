import { useRouter } from "next/router";
import React from "react";

const PostId = ({ product }) => {
  const router = useRouter();

  if (router.isFallback === true) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h2>
        {product.id} {product.title}
      </h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default PostId;

export async function getStaticProps(context) {
  const { params } = context;
  console.log( `Regenerating Product ${params.productId}`);
  const responce = await fetch(
    `http://localhost:4000/product/${params.productId}`
  );
  const data = await responce.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product: data,
    },
    revalidate: 10
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "1" },
      },
    ],
    fallback: true,
  };
}
