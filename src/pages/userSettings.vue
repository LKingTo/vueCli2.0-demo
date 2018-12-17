<template lang="pug">
	.settings
		h1 User Settings
		nav-bar
		.main
			ul
				router-link(to="/settings/emails", tag="li", replace) emails
				router-link(
				:to="{name:'profile', params: {name: name, options: options, filter: sFilter}}",
				tag="li",
				replace) profile
			router-view
				router-view(name="default")
				<!--router-view(name="preview")-->
		common-footer
</template>

<script>
	/**
	 * settings组件采用路由嵌套视图
	 * NavBar、CommonFooter为常规组件
	 * 子路由切换采用$router.replace替换当前栈
	 */
	import NavBar from '../components/settings/navBar'
	import CommonFooter from '../components/commonFooter'

	export default {
		name: "user-settings",
		components: {
			NavBar,
			CommonFooter
		},
		beforeRouteEnter: (to, from, next) => {
			// console.log('Settings [beforeRouteEnter] to:', to);
			// console.log('Settings [beforeRouteEnter] from:', from);
			next()
		},
		beforeRouteUpdate: (to, from, next) => {
			// console.log('Settings [beforeRouteUpdate] to:', to);
			// console.log('Settings [beforeRouteUpdate] from:', from);
			next()
		},
		data() {
			return {
				name: 'toto',
				options: {
					mobile: '1234567890',
					salary: 18888
				},
				sFilter: (val) => {
					return val.toFixed(2);
				}
			}
		},
		created() {
			//校验路由传参props属性是否为动态更新
			setTimeout(() => {
				this.$nextTick(() => {
					console.log('time out');
					// this.$set(this.$data, 'name', 'Litaly');
					// this.$set(this.$data.options, 'mobile', '999');
					// this.$set(this.$data, 'sFilter', (val) => {return val.toFixed(3)});
					// this.$router.replace({name: 'profile', params: {
					// 	name: 'Litaly',
					// 	options: this.options,
					// 	filter: this.sFilter
					// }});
					this.$router.replace({path: '/settings/emails'});
				})
			}, 5000)
		}
	}
</script>

<style lang="stylus" scoped>
	.settings
		.main
			position fixed
			right 0
			width 80%
			height 100%
			ul
				display flex
				li
					flex 1
					text-align center
</style>