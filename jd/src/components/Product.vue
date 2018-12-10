<template>
	<!--这个是快速导航下面的商品内容-->
	<div class="product-list clear">
		<div class="product" v-for="(item,index) in products">
			<a href="#">
				<div class="product-image">
					<img :src="item.images"/>
				</div>
				<div class="product-title" v-text="item.title"></div>
				<div class="product-info">
					<div class="product-price">￥<span v-text="item.price"></span></div>
					<div class="product-similar"></div>
				</div>
				<div class="similar-info">
				</div>
			</a>
		</div>
	</div>
</template>
<script>
	export default {
		data: function() {
			return {
				products: [{
					title: '家装生活更多储物空间更多搭配选择',
					images: '/images/img1.jpg',
					price: '1988',
					id: '1'
				}, {
					title: '家装生活更多储物空间更多搭配选择',
					images: '/images/img1.jpg',
					price: '198',
					id: '2'
				}, {
					title: '家装生活更多储物空间更多搭配选择',
					images: '/images/img1.jpg',
					price: '188',
					id: '3'
				}, {
					title: '家装生活更多储物空间更多搭配选择',
					images: '/images/img1.jpg',
					price: '288',
					id: '4'
				}]
			}
		}
	}
</script>
<style scoped>
img{
	border: 0 none;
	vertical-align: top;
}
.left{
	float: left;
}
.right{
	float: right;
}
.clear:after{
	display: block;
	content: "";
	height: 0;
	clear: both;
	visibility: hidden;
}
.product{
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