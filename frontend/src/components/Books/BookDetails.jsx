import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header1 from "../Header/Header1";
import Footer1 from "../Footer/Footer1";
import { FaStar } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookInfo = () => {
  const location = useLocation();
  const { book } = location.state;
  const [isBookInCart, setIsBookInCart] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(book.rating || 0);
  const [reviewText, setReviewText] = useState('');
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [showMoreReviews, setShowMoreReviews] = useState(false);

  const checkIfBookInCart = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/api/users/getcartitems', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (data.cartItems) {
        setIsBookInCart(data.cartItems.some(item => item.bookUuid === book.uuid));
      }
    } catch (error) {
      error('An error occurred while checking cart items.');
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/review/getreviews/${book.uuid}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch reviews');
      }
      const data = await response.json();
      console.log('Fetched reviews:', data); // Add this line to log the fetched data
      if (data.error) {
        toast.error(data.message);
      } else {
        setReviews(data.reviews);
        const avgRating = data.reviews.reduce((acc, review) => acc + review.rating, 0) / data.reviews.length;
        setAverageRating(avgRating.toFixed(1));
      }
    } catch (error) {
      console.error('Error fetching reviews:', error); // Log the error to the console
      error('An error occurred while fetching reviews.');
    }
  };

  const addToCart = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/api/users/addtocart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ bookUuid: book.uuid, quantity: 1 })
      });
      const data = await response.json();
      if (data.error) {
        toast.error(data.message);
      } else {
        toast.success('Book added to cart...');
        setIsBookInCart(true);
      }
    } catch (error) {
      toast.error('An error occurred while adding the book to the cart.');
    }
  };

  const handleReviewToggle = () => {
    setIsReviewFormVisible(!isReviewFormVisible);
  };

  const handleReviewChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleReviewSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/api/review/addreview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ bookUuid: book.uuid, comment: reviewText, rating: selectedRating })
      });
      const data = await response.json();
      if (data.error) {
        toast.error(data.message);
      } else {
        toast.success('Review submitted successfully!');
        setReviews([...reviews, { username: 'Current User', rating: selectedRating, comment: reviewText }]);
        setReviewText('');
        setIsReviewFormVisible(false);
        const newAvgRating = ([...reviews, { rating: selectedRating }].reduce((acc, review) => acc + review.rating, 0) / ([...reviews, { rating: selectedRating }].length)).toFixed(1);
        setAverageRating(newAvgRating);
      }
    } catch (error) {
      toast.error('An error occurred while submitting the review.');
    }
  };

  const openBookPdf = () => {
    if (book.pdfUrl) {
      window.open(book.pdfUrl, '_blank');
    } else {
      toast.error('PDF URL not available.');
    }
  };

  useEffect(() => {
    checkIfBookInCart();
    fetchReviews();
  }, []);

  const renderStars = (rating, setRating, hover, setHover) => {
    const totalStars = 5;
    return (
      <div className="flex text-yellow-400">
        {[...Array(totalStars)].map((_, index) => (
          <FaStar
            key={index}
            className={`w-7 h-7 cursor-pointer ${index < (hover || rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(index + 1)}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <Header1 />
      <div className="flex flex-wrap max-w-screen-xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-1/3 flex flex-col items-center p-4">
          <img src={book.coverImage} alt={book.title} className="w-64 h-96 rounded-r-xl shadow-slate-800 mb-4" />
          <button
            className="w-full px-4 py-2 bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] rounded-3xl text-white font-medium flex items-center justify-center mb-2"
            onClick={openBookPdf}
          >
            Want to Read
          </button>
          <button 
            className="w-full px-4 py-2 bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] rounded-3xl text-white font-medium flex items-center justify-center"
            onClick={addToCart}
            disabled={isBookInCart}
          >
            <MdAddShoppingCart className="h-6 mr-2" />
            {isBookInCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
          <div className="flex items-center mt-4">
            {renderStars(selectedRating, setSelectedRating, hoverRating, setHoverRating)}
            <span className="ml-2 font-medium text-xl">{selectedRating.toFixed(1)}</span>
          </div>
          <h1 className="text-lg font-medium mb-2">Rate this book</h1>
        </div>
        <div className="w-full md:w-2/3 px-8">
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <h2 className="text-xl text-black mb-4">by {book.author}</h2>
          <h2 className="text-xl text-gray-500 mb-4">{book.genre}</h2>
          <div className="text-lg font-serif mb-4">
            <p><strong>Price:</strong> ₹{book.price}</p>
            <p className="mt-4"><strong>Description:</strong> {book.description}</p>
          </div>
          <div className="flex items-center mt-4">
            <div className="flex items-center mt-4">
              {renderStars(averageRating, () => {}, 0, () => {})}
              <span className="ml-2 font-medium text-xl">{averageRating}</span>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold">Reviews & Ratings</h3>
            <div className="flex flex-col items-center mt-4">
              <h1 className="text-lg font-medium mb-2">What do you think?</h1>
              {isReviewFormVisible ? (
                <>
                  <textarea
                    value={reviewText}
                    onChange={handleReviewChange}
                    rows="4"
                    className="w-full p-2 border rounded-md"
                    placeholder="Write your review here..."
                  />
                  <button
                    className="mt-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-medium"
                    onClick={handleReviewSubmit}
                  >
                    Send Review
                  </button>
                </>
              ) : (
                <button
                  className="mt-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-medium"
                  onClick={handleReviewToggle}
                >
                  Write a Review
                </button>
              )}
            </div>
            <div className="mt-8 w-full">
              {reviews.length > 0 ? (
                <>
                  {reviews.slice(0, showMoreReviews ? reviews.length : 3).map((review, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow mb-4 w-full bg-white">
                      <div className="flex items-center mb-2">
                        <FaStar className="text-yellow-400 w-6 h-6" />
                        <span className="ml-2 font-semibold">{review.rating.toFixed(1)}</span>
                      </div>
                      <p className="text-gray-800 mb-1 font-semibold">{review.username}</p>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                  {reviews.length > 3 && (
                    <button
                      className="mt-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-medium"
                      onClick={() => setShowMoreReviews(!showMoreReviews)}
                    >
                      {showMoreReviews ? 'Show Less' : 'Show More'}
                    </button>
                  )}
                </>
              ) : (
                <p className="text-gray-500">No reviews yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default BookInfo;
