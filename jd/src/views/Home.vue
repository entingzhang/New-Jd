<template>
	<div class="home">
		<search-bar></search-bar>
		<swiper-bar></swiper-bar>
		<quick-nav></quick-nav>
		<product></product>
		<dibu></dibu>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Dibu from "@/components/Footer.vue";
	import SearchBar from "@/components/Search.vue";
	import SwiperBar from "@/components/Swiper.vue";
	import QuickNav from "@/components/QuickNav.vue";
	import Product from "@/components/Product.vue";
	import axios from "axios";
	import qs from "qs"
	export default {
		data(){
			return {
				product:[]
			}
		},
		name: 'home',
		components: {
			SearchBar,
			SwiperBar,
			QuickNav,
			Product,
			Dibu
		},
		
	}
</script>
<style>
	
</style>