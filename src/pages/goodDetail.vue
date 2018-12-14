<template lang="pug">
	.detail
		detail-header(:title="title")
		img(:src="img")
		p.site-title 树懒果园 泰国进口大金煌芒果
		p.site-cont 5斤装，约2-4个果，大！！！甜！！！
		common-footer
</template>

<script>
	import DetailHeader from '../components/detailHeader'
	import CommonFooter from '../components/commonFooter'
	export default {
		name: "good-detail",
		data() {
			return {
			}
		},
		props: ['title', 'img'],
		components: {
			DetailHeader,
			CommonFooter
		},
		created() {
		}
	}
</script>

<style lang="stylus" scoped>
	.detail
		padding 0.25rem
		font-size 12px
		> img
			display block
			width 80%
			margin  0 auto 0.5rem
		> p
			font-size 1.1rem
			line-height 1.5rem
			text-align left
			padding-bottom 0.5rem
		> p.site-title
			color #ff8000
		> p.site-cont
			color #666
			font-size 0.9rem
</style>