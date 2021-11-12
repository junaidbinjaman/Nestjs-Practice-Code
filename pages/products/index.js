import Link from "next/link";
import React from "react";

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>List Of Post</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`} passHref>
            <h2>
              {" "}
              {product.id}, {product.title}{" "}
            </h2>
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProductList;

export async function getStaticProps() {
  const responce = await fetch("http://localhost:4000/product/");
  const data = await responce.json();
  return {
    props: {
      products: data
    },
  };
}
