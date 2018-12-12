<template>
	<router-link :to="{path:'/product',query:{id:id}}">
		<div class="product-list">
			<div class="product-image">
				<img :src="image" />
			</div>
			<div class="product-info">
				<div class="product-title" v-text="title"></div>
				<div class="product-price">
					￥<span v-text="price"></span>
				</div>
			</div>
		</div>
	</router-link>

</template>

<script>
	export default {
		data() {
			return {};
		},
		props: {
			id: {
				type: Number,
				default: 0
			},
			image: {
				type: String,
				default: ''
			},
			title: {
				type: String
			},
			price: {
				type: Number,
			}
		}

	}
</script>
<style scoped="scoped">
	.search-products {
		margin-top: 44px;
		margin-bottom: 50px;
	}
	
	a {
		display: block;
		text-decoration: none;
	}
	
	.product-list {
		display: flex;
		display: -webkit-flex;
		padding: 5px 0px 2px;
	}
	
	.product-image {
		width: 120px;
		height: 120px;
	}
	
	.product-image img {
		width: inherit;
		height: inherit;
	}
	
	.product-info {
		flex: 1;
		-webkit-flex: 1;
		height: 120px;
		padding: 0px 10px 8px;
		box-sizing: border-box;
		border-bottom: 1px solid #cccccc;
		/*background-color: red;*/
	}
	
	.product-title {
		margin-top: 8px;
		font-size: 13px;
		line-height: 1.5em;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		word-break: break-all;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		height: 39px;
		color: #333;
	}
	
	.product-price {
		margin-top: 13px;
		display: inline-block;
		height: 18px;
		min-width: 40px;
		color: #e93b3d;
	}
</style>