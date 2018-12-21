const Mock = require('mockjs');
const util = require('./util');	//自定义工具模块

module.exports = (app) => {
	//监听http请求
	app.get('/mock/goods', (rep, res) => {
		//每次响应请求时读取mock data的json文件
		//util.getJsonFile方法定义了如何读取json文件并解析成数据对象
		let json = util.getJsonFile('./goods.json');
		//将json传入 Mock.mock 方法中，生成的数据返回给浏览器
		res.json(Mock.mock(json));
	})

	/** 其余mock api在此扩展 **/
	app.get('/mock/user', (rep, res) => {
		let json = util.getJsonFile('./user.json');
		res.json(Mock.mock(json));
	})
}
