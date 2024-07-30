const { Review } = require('../models/ReviewsModel');

const getAllReviews = async (req, res) => {
    const { bookuuid } = req.params;

    try {
        const reviews = await Review.find({ bookuuid: bookuuid });

        if (reviews.length === 0) {
            return res.status(404).json({ message: 'No reviews found for this book', error: true });
        }

        res.status(200).json({ message: 'Reviews fetched successfully', reviews });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
};

module.exports = {
    getAllReviews
};