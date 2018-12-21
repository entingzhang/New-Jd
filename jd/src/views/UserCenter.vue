<template>
	<div>
		<h2>个人中心</h2>
		<dibu></dibu>
	</div>

</template>

<script>
	import Dibu from "@/components/Footer.vue";
	export default {
		data() {
			return {

			}
		},
		methods: {},
		computed: {
			login(){
			return this.$store.state.user.login;
			}
		},
		created() {
			if(!this.login) {
				this.$router.push({
					path: '/login',
					query: {
						from:'/user',
					}
				})
			}
		},
		components: {
			Dibu
		}
	}
</script>

<style>

</style>