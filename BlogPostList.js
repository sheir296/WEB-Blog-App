import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const BlogPostList = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await api.get('/blog-posts');
        setBlogPosts(response.data);
      } catch (error) {
        // Handle error
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostList;
