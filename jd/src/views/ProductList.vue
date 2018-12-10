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
		<goods></goods>
		<comment></comment>
	</div>
</template>

<script>
	import TopBar from "@/components/TopBar.vue";
	import Goods from "@/components/Goods.vue";
	import Comment from "@/components/Comment.vue";
	
	export default{
		name:'product',
		components:{
			TopBar,
			Goods,
			Comment
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