<template>
	<div class="home">
		<div>
			<h3>首页</h3>
			<ul>
				<li v-for="(item,index) in product" v-text="item.title" :key="index"></li>
			</ul>
		</div>
		<search-bar></search-bar>
		<swiper-bar></swiper-bar>
		<dibu></dibu>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Dibu from "@/components/Footer.vue";
	import SearchBar from "@/components/Search.vue";
	import SwiperBar from "@/components/Swiper.vue";
	import axios from "axios";
	export default {
		data(){
			return {
				product:[]
			}
		},
		name: 'home',
		components: {
			Dibu,
			SearchBar,
			SwiperBar
		},
		mounted(){
			axios.get("/data.json").then(res=>{
				console.log();
			}).catch(err=>{});
		}
	}
</script>
<style scoped>
	
</style>