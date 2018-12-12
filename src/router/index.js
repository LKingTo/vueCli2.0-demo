import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Detail from '../pages/goodDetail'

Vue.use(Router)

const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/detail',
		component: Detail,
	}
]

export default new Router({
	routes
})
