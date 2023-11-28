import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import api from '../../services/api';

const BlogPostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/blog-posts/${postId}`);
        setPost(response.data);
      } catch (error) {
        // Handle error
        console.error('Error fetching blog post:', error);
      }
    };

    fetchPost();
  }, [postId]);

  return (
    <div>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogPostDetail;
