<template lang="pug">
	.settings
		h1 User Settings
		nav-bar
		.main
			ul
				router-link(:to="path='/settings/emails'", tag="li", replace) emails
				router-link(:to="path='/settings/profile'", tag="li", replace) profile
			router-view
				router-view(name="preview")
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