const express = require('express');
const funController = require('../controllers/funController');

const router = express.Router();

 router.get('/user-profile/:userId', funController.userProfile)
router.post('/new-user', funController.creatuser);
router.post('/send-notification', funController.sendNotification)
router.get('/matches/:userId', funController.matches)
router.get('/my-transactions/:userId',funController.myTransactions)
router.get('/wallet/:userId', funController.wallet)
router.get('/balance/:userId',funController.balance)
router.post('/add-cash', funController.addCash)

module.exports = router;
