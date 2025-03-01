import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Admin.css';

function Admin() {
  const [foodData, setFoodData] = useState({
    name: '',
    description: '',
    price: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin-login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData({
      ...foodData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('adminToken');
      await axios.post('http://localhost:3001/api/food', foodData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Food item added successfully!');
      setFoodData({ name: '', description: '', price: '' });
    } catch (error) {
      console.error('There was an error adding the food item!', error);
    }
  };

  return (
    <div className="admin-container">
      <h2>Add Food Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={foodData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" value={foodData.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" value={foodData.price} onChange={handleChange} required />
        </div>
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}

export default Admin;
