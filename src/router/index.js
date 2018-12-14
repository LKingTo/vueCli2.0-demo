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
		props: true,	//通过组件props属性解耦路由传参，相当于route.params
		// redirect: '/settings', 		//重定向：路径方式，字符串路径
		// redirect: {name: 'settings'}, //重定向：命名方式，路有对象
		// redirect: to => {
		// 	//重定向：方法，返回字符串路径或路有对象
		// 	return '/settings/profile';
		// },
	},
	{
		name: 'settings',
		path: '/settings',
		alias: '/emails',	//别名
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
			},
			props: {
				//命名视图对应设置props
				default: true,
				preview: false
			}
		}]
	}
]

export default new Router({
	routes
})
