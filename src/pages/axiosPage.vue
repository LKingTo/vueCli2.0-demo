<template lang="pug">
	.content
		h3.title axios test page
</template>

<script>
	export default {
		name: "axios-page",
		created() {
			let $axios = this.$axios;
			// this.getStrategyList();
			// this.getShopRecommends();

			//并发多次请求
			let promises = [];
			promises.push(this.getStrategyList());
			promises.push(this.getShopRecommends());
			$axios.all(promises).then($axios.spread((res1, res2) => {
				console.log(res1, res2);
			})).catch((err) => {
				console.log(err);
			})
		},
		methods: {
			getStrategyList() {
		  	let url = '/api/robot/investment/2.0.0/strategy/allocation/list?status=normal&channel=gfit2%2Cgfit';
		  	return this.$axios.get(url);
			},

			getShopRecommends() {
				let url = '/ap/api/store/recommended_shop/';
				return this.$axios.get(url);
			}
		}
	}
</script>

<style scoped>

</style>