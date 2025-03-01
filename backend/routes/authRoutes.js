const express = require('express');
const { signUp, login, adminSignUp, adminLogin } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.post('/admin-signup', adminSignUp);
router.post('/admin-login', adminLogin);

module.exports = router;