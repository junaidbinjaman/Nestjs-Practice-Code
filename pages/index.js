import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Next Js Pre-rendering</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/posts">
        <a>
          <h2>post</h2>
        </a>
      </Link>
    </div>
  );
};

export default Home;
