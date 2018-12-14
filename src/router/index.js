import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Detail from '../pages/goodDetail'
import UserSettings from '../pages/userSettings'
import UserEmailSubscriptions from '../components/settings/userEmailSubscriptions'
import UserProfile from '../components/settings/userProfile'
import UserProfilePreview from '../components/settings/userProfilePreview'

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
	},
	{
		name: 'settings',
		path: '/settings',
		component: UserSettings,
		//嵌套子路由
		children: [{
			name: 'emails',
			path: 'emails',
			component: UserEmailSubscriptions
		}, {
			name: 'profile',
			path: 'profile',
			components: {
				//命名视图：通过router-view设置name=xx属性，指定视图组件
				default: UserProfile,	//该路由默认视图组件
				preview: UserProfilePreview
			}
		}]
	}
]

export default new Router({
	routes
})
