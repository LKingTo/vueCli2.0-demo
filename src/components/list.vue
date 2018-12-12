<template lang="pug">
	li.goods-list
		router-link.goods-list-link(to="/detail")
			.goods-list-pic
				img(:src="img", alt="")
			.goods-list-desc
				p.goods-list-name {{ title }}
				p.goods-list-price {{ '￥' + Number(price).toFixed(2)}}
</template>

<script>
	export default {
		name: "list",
		props: ['price', 'title', 'img']
	}
</script>

<style lang="stylus" scoped>
	.goods-list
		width 50%
		float left
		box-sizing border-box
		margin-bottom 0.2rem
		&:nth-of-type(odd)
			border-right 0.15rem solid #ccc
			.goods-list-link
				margin-left 0
		&:nth-of-type(even)
			border-left 0.15rem solid #ccc
			.goods-list-link
				margin-right 0

		.goods-list-link
			display block
			padding 0.5rem 0
			margin 0 0.3rem
			text-align center
			background-color #fff

		.goods-list-pic
			padding 0.5rem
			> img
				width auto
				height 4rem

		.goods-list-desc
			padding 0 0.5rem
			&:after
				display block
				content ''
				clear both

		.goods-list-name,.goods-list-price
			width 50%
			height 1.2rem
			line-height 1.2rem
			font-size 0.8rem
			color #333
			float left
			overflow hidden
			text-overflow ellipsis
			white-space nowrap

		.goods-list-price
			color #ff8000
			float right
</style>