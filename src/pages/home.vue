<template lang="pug">
	.container
		home-header
		.content
			ul.cont-ul
				list(v-for="(item) in items", :price="item.price", :title="item.title", :img="item.img")
		common-footer
</template>

<script>
	import HomeHeader from '../components/homeHeader.vue'
	import List from '../components/list.vue'
	import CommonFooter from '../components/commonFooter.vue'
	export default {
		name: "home",
		data () {
			return {
				items: []
			}
		},
		components: {
			HomeHeader,
			List,
			CommonFooter
		},
		created () {

		}
	}
</script>

<style lang="stylus" scoped>
	.container
		width 100%
		margin 0 auto
		.content
			margin-bottom 1.8rem
		.cont-ul
			padding-top 0.5rem
			background-color #ccc
			&:after
				content ''
				display block
				clear both
				width 0
				height 0
</style>