import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Detail from '../pages/goodDetail'

Vue.use(Router)

const routes = [
	{
		name: 'home',
		path: '/',
		component: Home,
	},
	{
		name: 'detail',
		path: '/detail',
		component: Detail,
	}
]

export default new Router({
	routes
})
