<template lang="pug">
	.container
		home-header
		.content
			ul.cont-ul
				list(v-for="(item, $index) in items", :key="$index", :price="item.price", :title="item.title", :img="item.img")
		common-footer
</template>

<script>
	import HomeHeader from '../components/homeHeader'
	import List from '../components/list'
	import CommonFooter from '../components/commonFooter'
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
			this.$axios.get('/mock/goods').then((data) => {
				console.log(data);
		  	this.items = data.goods;
		  })
			this.$axios.get('/mock/user').then((data) => {
				console.log(data);
			})
		}
	}
</script>

<style lang="stylus" scoped>
	.container
		width 100%
		margin 0 auto
		.content
			margin-top 1.8rem
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