import React from 'react';

const News = ({articles}) => {
  return (
    <div>
      <h1>List Of New Articles</h1>
      {
        articles.map(article => (
          <div key={article.id}>
            <h2>{article.id} {article.title} | {article.category}</h2>
          </div>
        ))
      }
    </div>
  );
};

export default News;

export async function getServerSideProps() {
  const responce = await fetch('http://localhost:4000/news')
  const data = await responce.json()
  console.log(`Prerendering News Article List`);

  return {
    props: {
      articles: data
    }
  }
}