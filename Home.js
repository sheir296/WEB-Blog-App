import React from 'react';
import BlogPostList from '../components/BlogPost/BlogPostList';
import UserFeed from '../components/UserInteraction/UserFeed';
import SearchBar from '../components/Search/SearchBar';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Blogging Platform</h1>
      <BlogPostList />
      <UserFeed />
      <SearchBar />
    </div>
  );
};

export default Home;
