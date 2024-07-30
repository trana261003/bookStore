// const express = require('express');
// const userRoutes = require('./UserRoutes');
// const UploadBook = require('../controller/uploadbook');
// const GetBooks = require('../controller/getbook');
// const getBookById = require('../controller/getBookById');
// const updateBook = require('../controller/updatebook');
// const deleteBook = require('../controller/deletebook');
// const addToCart = require('../controller/addToCart');
// const getCartItems = require('../controller/getCartItems');
// const deleteCartItem = require('../controller/deleteCartItem');
 

// const addFavoriteBook = require('../controller/addFavoriteBook');
// const removeFavoriteBook = require('../controller/removeFavoriteBook');
// const getFavoriteBooks = require('../controller/getFavoriteBooks');
// const addOrder = require('../controller/addOrder');
// const getAllOrders = require('../controller/getOrder');
// const getOrderById = require('../controller/getOrderById');
// const deleteOrderItemByBookUuid = require('../controller/deleteOrder');
// const addReview = require('../controller/addReviews');
// // const getAllReviews = require('../controller/getAllReviews');
// const deleteReview = require('../controller/deleteReviews');
// // const { updateOrderStatus, updatePaymentStatus } = require('../controller/Updateorderstatus');
// const { getAllReviews } = require('../controller/getAllReviews');



// const router = express.Router();

// router.use('/users', userRoutes);

// router.post('/admin/uploadbook', UploadBook);
// router.get('/admin/getbook', GetBooks);
// router.get('/admin/getbook/:uuid', getBookById);
// router.put('/admin/updatebook/:uuid', updateBook);
// router.delete('/admin/deletebook/:uuid', deleteBook);


// router.get('/admin/getorder',getAllOrders);
// // router.patch('/admin/updateorderstatus',updateOrderStatus);
// // router.patch('/admin/uploadpaymentstatus',updatePaymentStatus);
// router.patch('/admin/updateorderstatus',updateOrderStatus);
// router.patch('/admin/updatepayment',updatePaymentStatus);




// router.post('/users/addtocart', addToCart);
// router.get('/users/getcartitems', getCartItems);
// router.delete('/users/cartItems/:bookUuid', deleteCartItem);

// router.post('/review/addreview',addReview);
// // router.get('/review/getreviews', getAllReviews);
// router.get('/review/getreviews/:bookuuid', getAllReviews );
// router.delete('/review/deletereview/:id', deleteReview);

// router.post('/addorder',addOrder);
// router.get('/getorders',getAllOrders);
// // router.get('/getorder/:bookUuid', getOrderById);
// router.get('/getorder', getOrderById);
// router.delete('/deleteorder/:bookUuid', deleteOrderItemByBookUuid);

// router.post('/addfavouritebook', addFavoriteBook);
// router.get('/viewfavouritebook', getFavoriteBooks);
// router.delete('/removefavouritebook/:bookUuid', removeFavoriteBook);






// module.exports = router;






const express = require('express');
const userRoutes = require('./UserRoutes');
const UploadBook = require('../controller/uploadbook');
const GetBooks = require('../controller/getbook');
const getBookById = require('../controller/getBookById');
const updateBook = require('../controller/updatebook');
const deleteBook = require('../controller/deletebook');
const addToCart = require('../controller/addToCart');
const getCartItems = require('../controller/getCartItems');
const deleteCartItem = require('../controller/deleteCartItem');
 

const addFavoriteBook = require('../controller/addFavoriteBook');
const removeFavoriteBook = require('../controller/removeFavoriteBook');
const getFavoriteBooks = require('../controller/getFavoriteBooks');
const addOrder = require('../controller/addOrder');
const getAllOrders = require('../controller/getOrder');
const getOrderById = require('../controller/getOrderById');
const deleteOrderItemByBookUuid = require('../controller/deleteOrder');
const addReview = require('../controller/addReviews');
// const getAllReviews = require('../controller/getAllReviews');
// const deleteReview = require('../controller/deleteReviews');
const { updateOrderStatus, updatePaymentStatus } = require('../controller/updateOrder');
const { getAllReviews } = require('../controller/getAllReviews');
const { getAllUsers } = require('../controller/getAllUsers');
const { gettheReviews } = require('../controller/getthereview');
 


const router = express.Router();

router.use('/users', userRoutes);

router.post('/admin/uploadbook', UploadBook);
router.get('/admin/getbook', GetBooks);
router.get('/admin/getbook/:uuid', getBookById);
router.put('/admin/updatebook/:uuid', updateBook);
router.delete('/admin/deletebook/:uuid', deleteBook);

router.get('/admin/getusers',getAllUsers);

router.get('/admin/getorder',getAllOrders);
router.patch('/admin/updateorderstatus',updateOrderStatus);
router.patch('/admin/uploadpaymentstatus',updatePaymentStatus);





router.post('/users/addtocart', addToCart);
router.get('/users/getcartitems', getCartItems);
router.delete('/users/cartItems/:bookUuid', deleteCartItem);

router.post('/review/addreview',addReview);
// router.get('/review/getreviews', getAllReviews);
router.get('/review/getreviews/:bookuuid', getAllReviews );
// router.delete('/review/deletereview/:id', deleteReview);
router.get('/admin/getthereview',gettheReviews);




router.post('/addorder',addOrder);
router.get('/getorders',getAllOrders);
// router.get('/getorder/:bookUuid', getOrderById);
router.get('/getorder', getOrderById);
router.delete('/deleteorder/:bookUuid', deleteOrderItemByBookUuid);


router.post('/addfavouritebook', addFavoriteBook);
router.get('/viewfavouritebook', getFavoriteBooks);
router.delete('/removefavouritebook/:bookUuid', removeFavoriteBook);


module.exports = router;