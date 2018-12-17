<template lang="pug">
	.content
		ul
			li
				router-link(:to="{path: '#hash1'}", replace) hash1
			li
				router-link(:to="{path: '#hash2'}", replace) hash2
			li
				router-link(:to="{path: '#hash3'}", replace) hash3
		.block#hash1 block hash 1
		.block#hash2 block hash 2
		.block#hash3 block hash 3
		common-footer
</template>

<script>
	import CommonFooter from '../components/commonFooter'
	export default {
		name: "others",
	  components: {
		  CommonFooter
	  },
	}
</script>

<style lang="stylus" scoped>
	ul
		display flex
		li
			flex 1
			text-align center
	.block
		width auto
		height 500px
		text-align center
		line-height 500px
	#hash1
		background #42b983
	#hash2
		background #EEEEEE
	#hash3
		background burlywood
</style>