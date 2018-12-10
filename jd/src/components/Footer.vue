<template>
	<footer>
		<ul>
			<li v-for="(item,index) in nav" :key="index">
				<router-link :to="item.to">
				<span class="fa" :class="item.icon"></span>
				<span class="title" v-text="item.title"></span>
				</router-link>
			</li>
		</ul>
	</footer>
</template>
<script>
	export default {
		data() {
				return {
					nav: [{
						title: '首页',
						icon: 'fa-home',
						to:'/'
					}, {
						title: '分类',
						icon: 'fa-list',
						to:'/listli'
					}, {
						title: '搜索',
						icon: 'fa-search',
						to:'/search'
					}, {
						title: '购物车',
						icon: 'fa-shopping-cart',
						to:'/cart'
					}, {
						title: '我的',
						icon: 'fa-user',
						to:'/allbig'
					}]
				}
			},
			methods: {},
	}
</script>
<style scoped>
	footer {
		width: 100%;
		height: 50px;
		background-color: pink;
		position: fixed;
		bottom: 0px;
		left: 0px;
		text-align: center;
		box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
		-webkit-box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
		-moz-box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
	}
	footer a{
		color: #fff;
		text-decoration: none;
	}
	footer a.router-link-exact-active{
		color: #E93B3D;
	}
	footer ul {
		margin: 0;
		padding: 0;
		display: flex;
		display: -webkit-flex;
		list-style: none;
	}
	
	footer ul li {
		margin-top: 5px;
		flex: 1;
		color: #fff;
	}
	footer ul li span.fa{
		font-size: 20px;
	}
	footer ul li .title{
		display: block;
		font-size: 12px;
	}
</style>