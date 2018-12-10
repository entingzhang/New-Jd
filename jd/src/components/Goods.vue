<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<img src="/images/productimage_02.jpg" />
			</div>
			<div class="swiper-slide">
				<img src="/images/productimage_12.jpg" />
			</div>
			<div class="swiper-slide">
				<img src="/images/productimage_03.jpg" />
			</div>
			<div class="swiper-slide">
				<img src="/images/productimage_10.jpg" />
			</div>
		</div>
		<div class="swiper-pagination"></div>
		<div>
			<div class="pull-left"><i class="fa fa-jpy"></i><b>198</b></div>
			<div class="pull-right">
				<i class="fa fa-comments-o"></i>降价通知
				<i class="fa fa-heartbeat"></i>关注
			</div>
			<div class="pull-left top-title">
				<i class="top-title1 fa fa-bullhorn">：迪拉娜2018棉服女冬装毛呢棉宽松长款新款大衣外套女双色可选</i>
				<p>专注品质 拼购更划算 七天无理由退换货 支持货到付款</p>
				<p>送至：<i class="fa fa-map-marker"></i>上海市浦东新区张江高科碧波路635号</p>
				<p>运费   免运费</p>
			</div>
			<div class="pull-left">
				<i class="fa fa-check">店铺发货&售后</i>
				<i class="fa fa-check">货到付款</i>
				<i class="fa fa-check">闪电退款</i>
				<i class="fa fa-check">7天无理由退货</i>
			</div>
		</div>
	</div>
</template>
<script>
	import Swiper from "swiper"
	export default {
		data: function() {
			return {}
		},
		methods: {},
		careated: function() {

		},
		mounted: function() {
			new Swiper('.swiper-container', {
				pagination: {
					el: 'swiper-pagination',
				},
				autoplay: true
			})
		}
	}
</script>
<style scoped>
	/*@import url("../assets/css/swiper.css");*/
	
	.swiper-container {
		width: 500px;
		color: #000000;
	}
	
	.swiper-container img {
		width: 500px;
	}
	
	.swiper-container a {
		display: block;
	}
	.fa-jpy{
		color: red;
	}
	b{
		color: red;
	}
	.top-title {
		margin-top: 20px;
		margin-left: 0px;
	}
	.top-title .top-title1{
		font-size: 18px;
		
	}
	.top-title p{
		font-size: 12px;
	}
	.pull-left i{
	font-size: 12px;
		
	}
</style>