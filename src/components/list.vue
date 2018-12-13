<template lang="pug">
	li.goods-list
		.goods-list-link(@click="viewDetail()")
			.goods-list-pic
				img(:src="img", alt="")
			.goods-list-desc
				p.goods-list-name {{ title }}
				p.goods-list-price {{ '￥' + Number(price).toFixed(2)}}
</template>

<script>
	export default {
		name: "list",
		props: ['price', 'title', 'img'],
		methods: {
			viewDetail() {
				//编程式路由跳转传参：$router.push + path + query
				// this.$router.push({path: 'detail', query: {title: this.title, img: this.img}})

				//编程式路由跳转传参：$router.push + name + params
				let onComplete = () => {console.log('route push onComplete')};
				let onAbort = () => {console.log('route push onAbort')};
				this.$router.push(
					{name: 'detail', params: {title: this.title, img: this.img}},
					onComplete,		//导航成功时回调，先于组件生命钩子beforeCreate
					onAbort				//导航流产或导航到错误路由时的回调
				)

				//router.replace
				// this.$router.replace({name: 'detail', params: {title: this.title, img: this.img}});

				//router.go(n)
				// this.$router.go(1);
			}
		}
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