<template>
	<div class="quick-nav clear">
		<div class="quick-nav-item" v-for="(item,index) in quickNavs">
			<a href="#">
				<img :src='item.image'/>
				<span v-text='item.title'></span>
			</a>
		</div>
	</div>
	
</template>
<script>
	export default {
		data: function() {
			return {
				quickNavs: [{
					title: '京东超市',
					image: '/images/1.png'
				}, {
					title: '京东超市',
					image: '/images/2.png'
				}, {
					title: '京东超市',
					image: '/images/3.png'
				}, {
					title: '京东超市',
					image: '/images/4.png'
				}, {
					title: '京东超市',
					image: '/images/5.png'
				}, {
					title: '京东超市',
					image: '/images/6.png'
				}, {
					title: '京东超市',
					image: '/images/7.png'
				}, {
					title: '京东超市',
					image: '/images/8.png'
				}, {
					title: '京东超市',
					image: '/images/9.png'
				}, {
					title: '京东超市',
					image: '/images/10.png'
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
	
	.quick-nav {
		background-color: #fff;
	}
	
	.quick-nav-item {
		padding-top: 10px;
		width: 20%;
		float: left;
		text-align: center;
	}
	
	.quick-nav-item a {
		text-decoration: none;
	}
	
	.quick-nav-item img {
		width: 20%;
	}
	
	.quick-nav-item span {
		display: block;
		color: #666;
		margin-top: 6px;
		font-size: 13px;
	}
</style>