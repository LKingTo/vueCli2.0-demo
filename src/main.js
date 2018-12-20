// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'
import Axios from 'axios'

Vue.use(VueResource)

/** 修改Axios实例默认配置 start **/
//create([options]) 设置一些axios的默认配置
// const axios = Axios.create({
// 	baseURL: 'http://localhost:8080/',  	 //通常配置基础的接口入口地址
// 	timeout: 5000,    						//请求超时时间
// 	headers: {       						 //设置所有的请求头
// 		'Content-Type': 'application/x-www-form-urlencoded', //该项建议设置 如果未 POST请求时 数据未做处理时会出现错误，最理想的解决方法就是 直接设置该项
// 	},
// 	withCredentials:true,					//是否允许发送Cookie 如果为true 则服务器的 Access-control-Allow-Credentials 必须为 true 来源为 XMLHttpRequest的withCredentials配置项
//
// });
// axios.all = Axios.all; 		//由于使用create方法返回的 实例缺少了 all 方法 在这里 加进去 all() 方法主要用于并发请求
//为了全部组件都能使用axios命令，将axios添加为Vue的原型属性
// Vue.prototype.$axios = axios;  //$http键名已被vue-resource占用
/** 修改Axios实例默认配置 end **/

Vue.prototype.$axios = Axios;  //$http键名已被vue-resource占用

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
})
