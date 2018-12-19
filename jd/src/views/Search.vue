<template>
	<div>
		<input type="text" v-model="keyword" @focus="show=true" />
		<search-button v-model="show"></search-button>
		<search-products v-for="(item,index) in products" :id="item.id" :title="item.title" :price="item.price" :image="item.image" :key="index"></search-products>
		<!--<search-bar v-model="keywords" @change="search"></search-bar>
		<div class="product" v-for="(item,index) in products">
			<a href="#">
				<div class="product-image">
					<img :src="item.image" />
				</div>
				<div class="product-title" v-text="item.title"></div>
				<div class="product-info">
					<div class="product-price">￥<span v-text="item.price"></span></div>
					<div class="product-similar"></div>
				</div>
				<div class="similar-info">
				</div>
			</a>
		</div>-->
		<search-page v-model="show" @search="search"></search-page>
		<dibu></dibu>
	</div>
</template>

<script>
	import axios from 'axios';
	import qs from "qs";
	import Dibu from '@/components/Footer.vue';
	import SearchBar from '@/components/Search.vue';
	import SearchProducts from '@/components/SearchProducts.vue';
	import SearchButton from '@/components/SearchButton.vue';
	import SearchPage from '@/components/SearchPage.vue';
	export default {
		data() {
			return {
				keyword: '',
				products: [],
				show: false,
				fixed: false
			}
		},
		methods: {
			search(val){
				this.products=val;
			}
		},
		components: {
			SearchBar,
			SearchProducts,
			SearchButton,
			SearchPage,
			Dibu
		},
		created(){
			if(this.route.params.product!=null)
			this.products=this.route.params.product;
		}
	}
</script>

<style>
	img {
		border: 0 none;
		vertical-align: top;
	}
	.search-page header input{
		border:0px;
		/*border:1px solid #CCCCCC;*/
	}
	.left {
		float: left;
	}
	
	.right {
		float: right;
	}
	
	.clear:after {
		display: block;
		content: "";
		height: 0;
		clear: both;
		visibility: hidden;
	}
	
	.product {
		width: 50%;
		float: left;
		padding-right: 2px;
		padding-bottom: 4px;
		box-sizing: border-box;
	}
	
	.product a {
		background-color: #FFFFFF;
		display: block;
		text-decoration: none;
	}
	
	.product:nth-child(2n) {
		padding-right: 0px;
		padding-left: 2px;
	}
	
	.product-image img {
		width: 100%;
	}
	
	.product-title {
		box-sizing: border-box;
		height: 31px;
		font-size: 13px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-word;
		color: #232326;
		margin-top: 5px;
		line-height: 16px;
		margin-bottom: 3px;
		padding: 0 4px;
		background-color: #fff;
	}
	
	.product-price {
		color: #f23030;
		display: inline-block;
		padding: 0 5px 0 4px;
		position: relative;
		top: 1px;
		height: 25px;
		line-height: 25px;
	}
	
	.similar-info {
		height: 26px;
	}
</style>