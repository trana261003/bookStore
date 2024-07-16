const express = require('express');
const userRoutes = require('./UserRoutes');
const UploadBook = require('../controller/uploadbook');
const GetBooks = require('../controller/getbook');
const getBookById = require('../controller/getBookById');
const updateBook = require('../controller/updatebook');
const deleteBook = require('../controller/deletebook');
const addToCart = require('../controller/addToCart');
const router = express.Router();




router.use('/users',userRoutes)


router.post('/admin/uploadbook',UploadBook)
router.get('/admin/getbook',GetBooks)
router.get('/admin/getbook/:uuid',getBookById)
router.put('/admin/updatebook/:uuid', updateBook);
router.delete('/admin/deletebook/:uuid', deleteBook);
router.post('users/addtocart',addToCart);
module.exports = router;

