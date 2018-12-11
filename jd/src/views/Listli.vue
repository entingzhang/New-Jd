<template>
	<div class="listli">
		<search-bar></search-bar>
		<dibu></dibu>
	</div>

</template>

<script>
	import SearchBar from "@/components/Search.vue";
	import Dibu from "@/components/Footer.vue";
	export default {
		components: {
			SearchBar,
			Dibu
		}
	}
</script>

<style>

</style>