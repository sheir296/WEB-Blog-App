import React, { useState } from 'react';
import api from '../../services/api';

const FollowButton = ({ userId, onFollowToggle }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = async () => {
    try {
      if (isFollowing) {
        await api.post(`/unfollow/${userId}`);
      } else {
        await api.post(`/follow/${userId}`);
      }

      setIsFollowing(!isFollowing);
      onFollowToggle(); 
    } catch (error) {
      // Handle error
      console.error('Error toggling follow:', error);
    }
  };

  return (
    <button onClick={handleFollowToggle}>
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  );
};

export default FollowButton;
