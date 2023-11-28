import React from 'react';
import UserList from '../components/AdminPanel/UserList';
import BlogPostList from '../components/AdminPanel/BlogPostList';

const AdminPanel = () => {
  return (
    <div>
      <h1>Welcome to the Admin Panel</h1>
      <UserList />
      <BlogPostList />
    </div>
  );
};

export default AdminPanel;
