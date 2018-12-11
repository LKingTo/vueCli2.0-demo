<template lang="pug">
	.head
		.header
			h4.header-cont 主页
</template>

<script>
	export default {
		name: "home-header"
	}
</script>

<style lang="stylus" scoped>
	.head
		width 100%
		height 2rem
		.header
			width 100%
			height 2rem
			position fixed
			left 0
			top 0
			background-color #fff
			border-bottom 2px solid #ff8000
			h4.header-cont
				width 100%
				text-align center
				line-height 2rem
				font-size 1.4rem
</style>