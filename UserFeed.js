import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const UserFeed = () => {
  const [userFeed, setUserFeed] = useState([]);

  useEffect(() => {
    const fetchUserFeed = async () => {
      try {
        const response = await api.get('/user/feed');
        setUserFeed(response.data);
      } catch (error) {
        // Handle error
        console.error('Error fetching user feed:', error);
      }
    };

    fetchUserFeed();
  }, []);

  return (
    <div>
      <h2>Your Feed</h2>
      <ul>
        {userFeed.map((post) => (
          <li key={post.id}>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserFeed;
