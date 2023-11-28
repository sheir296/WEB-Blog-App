import React, { useState } from 'react';
import api from '../../services/api';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await api.post('/register', formData);
      console.log('Registration successful!', response.data);
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <label>Username</label>
      <input type="text" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
      <label>Email</label>
      <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <label>Password</label>
      <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default RegistrationForm;
