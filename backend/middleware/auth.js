const jwt = require('jsonwebtoken');

// Hardcoded secret key (not recommended for production)
const JWT_SECRET_KEY = process.env.JWT_SECREAT_KEY;

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(403).json({
            message: "Access Denied: No Token Provided!",
            error: true
        });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({
            message: "Invalid Token!",
            error: true
        });
    }
};

module.exports = verifyToken;
