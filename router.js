// 导包
// 

const express = require('express');
const user = require('./controllers/c_user');
const router = express.Router();


// 



 // 登录页面
router.get('/signin',user.showSignin);

	.post('/handleSignin', user.handleSignin);





// 导出
module.exports = router;

