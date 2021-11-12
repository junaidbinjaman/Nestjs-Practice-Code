import React from 'react';

const ArticleListByCategory = ({articles, category}) => {
  return (
    <div>
      <h1>Showing News For Categories</h1>
      {
        articles.map(article => (
          <div key={article.id}>
            <h2>{article.is} {article.title}</h2>
            <p>| {article.description}</p>
            <hr />
          </div>
        ))
      }
    </div>
  )
}

export default ArticleListByCategory

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log(query);
  console.log(req.headers.cookie);
  res.setHeader('Set-Cookie', ['name=junaid jwolt'])
  const { category } = params;
  const responce = await fetch(`http://localhost:4000/news?category=${category}`)
  const data = await responce.json()
  console.log(`Prerendering News Article for category ${category}`);
  return {
    props: {
      articles: data,
      category
    }
  }
}
