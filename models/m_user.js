// 导入 数据模块
// 
const connection = require('../tools/db_config');


function checkEmail(email,callback){
		// 拼写SQ语句
	const sqlstr = 'SELECT *FROM  `users` WHERE `email`=?';
	// 检验数据
	connection.query(sqlstr,email,(err,results)=>{

		if(err){
			return callback(err);
		}
		callback(null, results);
	});
}
 exports.checkEmail = checkEmail;