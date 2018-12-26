<template>
	<div class="product-goods">
		<div class="block">
			<el-carousel height="385px">
				<el-carousel-item v-for="(item,index) in nav" :key="item">
					<img :src="item.image"/>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="title">
			<span>Canada Goose加拿大鹅男款羽绒男装派克大衣3808M红色XL</span><i class="fa fa-heart-o"><p>关注</p></i>
		</div>
		<div class="title2">
			<span>【圣诞奢品特惠12.18-12.25】</span><span><a href="#">满减+白条6期免息【库存有限】更多优惠点击</a></span>
		</div>
		<div class="price">
			<span><i class="fa fa-jpy"></i><b>6580.00</b></span><span class="text">降价提醒</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nav: [{
					id: 1,
					image: '/images/goods1.jpg'
				},{
					id: 2,
					image: '/images/goods4.jpg'
				},{
					id: 3,
					image: '/images/goods3.jpg'
				},{
					id: 4,
					image: '/images/goods2.jpg'
				}]
			}
		}
	}
</script>

<style scoped="scoped">
	.product-goods {
		/*margin: 45px auto;*/
	}
	
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}
	.el-carousel__item img{
		width: 100%;
	}
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
	.title span{
		float: left;
		width: 87%;
		font-weight: bold;
		font-size: 18px;
		color: #666;
	}
	.title i{
		width: 10%;
		font-weight: bold;
		font-size: 16px;
		color: #666;
		text-align: center;
		margin: 2px 2px;
	}
	.title2 span {
		color: #E4393C;
		font-size: 13px;
	}
	.title2 span a{
		color: #E4393C;
		text-decoration: underline;
	}
	.price span{
		color: #E4393C;
	}
	.price{
		
	}
	.price b{
		font-size: 16px;
	}
	.price .text{
		float: right;
		margin-right: 10px;
		padding: 3px;
		text-align: right;
		color: #666;
		border: 1px solid #CCCCCC;
	}
</style>