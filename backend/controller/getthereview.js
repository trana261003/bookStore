const { Review } = require('../models/ReviewsModel');

const gettheReviews = async (req, res) => {
    try {
        // Fetch all reviews from the database
        const reviews = await Review.find();

        if (reviews.length === 0) {
            return res.status(404).json({ message: 'No reviews found', error: true });
        }

        res.status(200).json({ message: 'Reviews fetched successfully', reviews });
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ message: 'An error occurred', error: true });
    }
};

module.exports = {
    gettheReviews
};
