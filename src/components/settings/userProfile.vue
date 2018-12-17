<template lang="pug">
	.user-profile profile
		.name {{name}}
		.mobile {{options.mobile}}
		.salary {{filter(options.salary)}}
</template>

<script>
	export default {
		name: "user-profile",
		props: [
			'name', 	 //prop为非对象类型，被视为静态属性，不会动态更新路由参数
			'options', //prop为对象类型，会动态更新
			'filter'	 //prop为函数，属性默认为状态，不会动态更新
		],
		//组件内守卫：进入前置
		beforeRouteEnter: (to, from, next) => {
			// console.log('user-profile [beforeRouteEnter] to:', to);
			// console.log('user-profile [beforeRouteEnter] from:', from);
			next(vm => {
				//可通过vm访问组件实例，周期在全局AfterEach钩子之后
				console.log('vm', vm);
				//todo this指向什么？
				// console.log('this', this);
			})
		},
		//2.2+ 组件内守卫：当前路由改变前置（组件被复用，参数变化）
		beforeRouteUpdate: (to, from, next) => {
			// console.log('user-profile [beforeRouteUpdate] to:', to);
			// console.log('user-profile [beforeRouteUpdate] from:', from);
			next()
		},
		//组件内守卫：离开前置
		beforeRouteLeave: (to, from, next) => {
			// console.log('user-profile [beforeRouteLeave] to:', to);
			// console.log('user-profile [beforeRouteLeave] from:', from);
			const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
			if (answer) {
				next()
			} else {
				next(false)
			}
		},
		data() {
			return {}
		},
		created() {
		}
	}
</script>

<style lang="stylus" scoped>
	.user-profile
		width 100%
		height 50%
		background palegoldenrod
</style>