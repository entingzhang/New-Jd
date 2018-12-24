<template>
	<div class="list-nav clear">
		<div class="list-nav-item" v-for="(item,index) in listNavs">
			<a href="#">
				<img :src='item.image' />
				<span v-text='item.title'></span>
			</a>
		</div>
	</div>

</template>
<script>
	export default {
		data: function() {
			return {
				listNavs: [{
					title: '马克杯',
					image: '/images/1.jpg'
				}, {
					title: '茶杯',
					image: '/images/11.jpg'
				}, {
					title: '家居类',
					image: '/images/b1.jpg'
				}, {
					title: '京东美妆',
					image: '/images/b2.jpg'
				}, {
					title: '京东家装',
					image: '/images/img1.jpg'
				}, {
					title: '手机',
					image: '/images/phone.jpg'
				}, {
					title: '小家电',
					image: '/images/12.jpg'
				}, {
					title: '护肤品',
					image: '/images/13.jpg'
				}, {
					title: '茶杯',
					image: '/images/16.jpg'
				}, {
					title: '调味瓶',
					image: '/images/2.jpg'
				}, {
					title: 'MG面膜',
					image: '/images/3.jpg'
				}, {
					title: '床头灯',
					image: '/images/4.jpg'
				}, {
					title: '巧克力',
					image: '/images/5.jpg'
				}, {
					title: '剃须刀',
					image: '/images/6.jpg'
				}, {
					title: '手动研磨机',
					image: '/images/9.jpg'
				}]
			}
		}
	}
</script>
<style scoped>
	.clear:after {
		display: block;
		content: "";
		clear: both;
	}
	
	.list-nav {
		background-color: #fff;
	}
	
	.list-nav-item {
		padding-top: 10px;
		width: 33%;
		float: left;
		text-align: center;
	}
	
	.list-nav-item a {
		text-decoration: none;
	}
	
	.list-nav-item img {
		width: 20%;
	}
	
	.list-nav-item span {
		display: block;
		color: #666;
		margin-top: 6px;
		font-size: 13px;
	}
</style>