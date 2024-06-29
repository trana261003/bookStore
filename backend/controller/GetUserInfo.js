const getUserDetailsFromToken = require('../helper/getUserDetailsFromToken');

const userDetails = async (req, res) => {
    try {
        const user = await getUserDetailsFromToken(req.cookies.token);

        return res.status(200).json({
            message: "User Details",
            data: user,
            role: req.user.role
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message || error,
        });
    }
};

module.exports = userDetails;
