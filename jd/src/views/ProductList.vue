<template>
	<div class="productlist">
		<!--{{route.params.id}}-->
		<!--<router-link :to="'/product/'+id+'/comment'">评价</router-link>
		<router-link :to="'/product/'+id+'/recommend'">推荐</router-link>-->
		<top-bar>
		<a href="#">商品</a>
		<a href="#">详情</a>
		<a href="#">评价</a>
		<a href="#">推荐</a>
		</top-bar>
		<comment></comment>
	</div>
</template>

<script>
	import TopBar from "@/components/TopBar.vue";
	
	export default{
		name:'product',
		components:{
			TopBar,
		}
//		data(){
//			return{
//				id:0,
//			};
//		},created(){
//			this.id=this.$route.params.id;
//		}
	}
</script>

<style scoped>
	a{
		margin-left: 15px;
	}
</style>