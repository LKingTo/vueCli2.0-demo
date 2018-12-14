<template lang="pug">
	.footer
		ul.footer-cont
			router-link(:to="path='/'", tag="li") home
			router-link(:to="path='/settings/emails'", tag="li") settings
</template>

<script>
	export default {
		name: "common-footer"
	}
</script>

<style lang="stylus" scoped>
	.footer
		height 1.8rem
		width 100%
		position fixed
		bottom 0
		left 0
		border-top 2px solid #ccc
		background-color #fff
		ul.footer-cont
			display flex
			li
				flex 1
				height 1.8rem
				line-height 1.8rem
				font-size 1.4rem
				color #ff8000
				text-align center
				&:active
					background-color #ccc
				&:after
					content ''
					display block
					clear both
					width 0
					height 0
</style>