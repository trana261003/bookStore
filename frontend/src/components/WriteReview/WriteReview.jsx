import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';

const WriteReview = ({ bookId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token'); // Get token from localStorage or cookies
      if (!token) {
        toast.error('Please log in to submit a review.');
        return;
      }

      await axios.post('http://localhost:8080/api/reviews/addreview', {
        bookId,
        rating,
        comment
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      toast.success('Review submitted successfully!');
      setRating(0);
      setComment('');
    } catch (error) {
      toast.error('An error occurred while submitting the review.');
    }
  };

  const renderStars = (rating) => {
    const totalStars = 5;
    return (
      <div className="flex text-yellow-400">
        {[...Array(totalStars)].map((_, index) => (
          <FaStar
            key={index}
            className={`w-7 h-7 cursor-pointer ${index < (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            onMouseEnter={() => setHoverRating(index + 1)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => setRating(index + 1)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Rating:</label>
          {renderStars(rating)}
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Comment:</label>
          <textarea
            rows="4"
            className="w-full p-2 border rounded-md"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Submit Review
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default WriteReview;
