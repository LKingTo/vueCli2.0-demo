import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import GoodDetail from '../pages/goodDetail'

Vue.use(Router)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	}, {
		path: '/goodDetail',
		name: 'GoodDetail',
		component: GoodDetail
	}
];

export default new Router({
	routes
})
