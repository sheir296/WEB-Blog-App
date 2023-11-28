import React from 'react';
import UserProfileInfo from '../components/UserProfile/UserProfileInfo';
import BlogPostList from '../components/BlogPost/BlogPostList';
import UserFeed from '../components/UserInteraction/UserFeed';

const UserProfile = () => {
  return (
    <div>
      <UserProfileInfo />
      <BlogPostList />
      <UserFeed />
    </div>
  );
};

export default UserProfile;
