import React from 'react';
import useSWR from 'swr';

const DashboardSwr = () => {

  const fetcher = async () => {
    const responce = await fetch('http://localhost:4000/dashboard')
    const data = await responce.json()
    return data
  }

  const {data, error} = useSWR('dashboard', fetcher)

  if(error) {
    return 'An Error has occured'
  }

  if(!data) {
    return 'Loading'
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Post - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
    </div>
  );
};

export default DashboardSwr;