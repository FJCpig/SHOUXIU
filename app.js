// 导包



const express = require('express');

const bodyParser = require('body-parser');

var session = require('express-session');


const router = require('./router');

// 实例化对象


const app = express();

// 配置包express-session；

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));


// 配置模板引擎
app.engine('html', require('express-art-template'));

// 静态处理资源
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));

// 配置body-parser
app.use(bodyParser.urlencoded({ extended: false }));

	// 挂载路由

app.use(router);

app.listen(12345,()=>{
	console.log('run----')
});





