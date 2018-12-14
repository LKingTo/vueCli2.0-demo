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
		data() {
			return {
			}
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