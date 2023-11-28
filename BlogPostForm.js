import React, { useState } from 'react';
import api from '../../services/api';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('/login', formData);
      console.log('Login successful!', response.data);
    } catch (error) {
      setError('Login failed. Please check your email and password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Email</label>
      <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <label>Password</label>
      <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
