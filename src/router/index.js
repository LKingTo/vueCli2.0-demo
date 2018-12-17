import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Detail from '../pages/goodDetail'
import UserSettings from '../pages/userSettings'
import Others from '../pages/others'
import UserEmailSubscriptions from '../components/settings/userEmailSubscriptions'
import UserProfile from '../components/settings/userProfile'
import UserProfilePreview from '../components/settings/userProfilePreview'

Vue.use(Router)

const routes = new Router({
	routes: [
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
			//路由独享守卫，方法参数与全局前置守卫一样
			beforeEnter: (to, from, next) => {
				// console.log('Settings [beforeEnter] to:', to);
				// console.log('Settings [beforeEnter] from:', from);
				next()
			},
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
				},
				//路由元信息
				meta: {requiresAuth: true}
			}]
		},
		{
			name: 'others',
			path: '/others',
			component: Others
		}
	],
	/**
	 * 滚动行为
	 * 前置条件：支持 history.pushState 的浏览器
	 */
	scrollBehavior (to, from, savedPosition) {
		//按浏览器后退/前进时，savePosition生效，保持在原滚动位置
		// if (savedPosition) {
		// 	return savedPosition
		// } else {
		// 	return { x: 0, y: 0 }
		// }

		//滚动到锚点
		if (to.hash) { //锚点值需设置唯一值，否则会同步滚动所有含该hash的路由页面
			return {
				selector: to.hash
			}
		}
	}
})

/**
 * 完整导航解析流程：
 1.导航被触发。
 2.在失活的组件里调用离开 beforeRouteLeave 守卫。
 3.调用全局的 beforeEach 守卫。
 4.在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
 5.在路由配置里调用 beforeEnter。
 6.解析异步路由组件。
 7.在被激活的组件里调用 beforeRouteEnter。
 8.调用全局的 beforeResolve 守卫 (2.5+)。
 9.导航被确认。
 10.调用全局的 afterEach 钩子。
 11.触发 DOM 更新。
 12.用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
 */

/**
 * 全局前置守卫
 * @param to 即将进入的目标路有对象
 * @param from 当前正要离开的路有对象
 * @next Function	调用该方法来 resolve 这个钩子
 * 	next() resolved该钩子
 * 	next(false) 中断当前的导航，重置到from的路由地址
 * 	next(Router) 中断当前的导航，跳转到新的导航
 */
routes.beforeEach((to, from, next) => {
	console.log('[BeforeEach] to:', to);
	console.log('[BeforeEach] from:', from);
	next();
	// next({path:'/settings/profile'});
	// next(false);
})

/**
 * 2.5.0 全局解析守卫
 * 同时在所有组件内守卫和异步路由组件被解析之后
 */
routes.beforeResolve((to, from, next) => {
	// console.log('[BeforeResolve] to:', to);
	// console.log('[BeforeResolve] from:', from);
	next();
	// next({path:'/settings/profile'});
	// next(false);
})

/**
 * 全局后置守卫（钩子）
 */
routes.afterEach((to, from) => {
	// console.log('[AfterEach] to:', to);
	// console.log('[AfterEach] from:', from);
})

export default routes
