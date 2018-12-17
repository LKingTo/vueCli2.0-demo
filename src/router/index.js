import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Detail from '../pages/goodDetail'
import UserSettings from '../pages/userSettings'
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
		}]
	}
)

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
//todo 不理解与beforeEach区别
// routes.beforeResolve((to, from, next) => {
// 	console.log('[BeforeResolve] to:', to);
// 	console.log('[BeforeResolve] from:', from);
// 	next();
// 	// next({path:'/settings/profile'});
// 	// next(false);
// })

/**
 * 全局后置守卫（钩子）
 */
routes.afterEach((to, from) => {
	console.log('[AfterResolve] to:', to);
	console.log('[AfterResolve] from:', from);
})

export default routes
