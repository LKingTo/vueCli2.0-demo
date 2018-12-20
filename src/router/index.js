import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Detail from '../pages/goodDetail'
import AxiosPage from '../pages/axiosPage'

Vue.use(Router)

const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/detail',
		component: Detail,
	},
	{
		path: '/axiosPage',
		component: AxiosPage,
	}
]

export default new Router({
	routes
})
