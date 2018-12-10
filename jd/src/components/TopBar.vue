<template>
	<div class="top-bar">
		<div class="go-back">
			<a href="#" @click.prevent="goBack"><i class="fa fa-angle-left"></i></a>
		</div>
		<div class="slot">
			<slot></slot>
		</div>
		<div class="menu">
			<a href="#" @click.prevent="menuShow=true"><i class="fa fa-ellipsis-h"></i></a>
			<ul class="menu-list" v-show="menuShow">
				<li v-for="(item,index) in menu" :key="index">
					<router-link :to="item.to">
						<i class="fa" :class="item.icon"></i>{{item.title}}
					</router-link>
				</li>
			</ul>
		</div>
		<div class="header-mask" v-show="menuShow" @click="menuShow=false;"></div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				menuShow: false,
				menu: [{
					title: '首页',
					to: '/',
					icon: 'fa fa-home'
				}, {
					title: '分类搜索',
					to: '/listli',
					icon: 'fa fa-search'
				}, {
					title: '购物车',
					to: '/cart',
					icon: 'fa fa-shopping-cart'
				}, {
					title: '我的京东',
					to: '/user',
					icon: 'fa fa-user'
				}, {
					title: '浏览记录',
					to: '/history',
					icon: 'fa fa-paw'
				}]
			}
		},
		methods: {
				goback: function() {

				}
			}
	}
</script>

<style>
	.top-bar {
		width: 100%;
		background-color: #fff;
		color: #252525;
		height: 44px;
		text-align: center;
		display: flex;
		border-bottom: solid 1px #e5e5e5;
	}
	
	.top-bar a {
		color: #252525;
	}
	
	.top-bar .slot {
		line-height: 44px;
		flex: 1;
	}
	
	.top-bar .go-back,
	.top-bar .menu {
		width: 40px;
		height: 44px;
		font-size: 22px;
		line-height: 44px;
		position: relative;
	}
	
	.top-bar .menu-list {
		position: absolute;
		z-index: 9999;
		width: 125px;
		top: 53px;
		right: 10px;
		font-size: 14px;
		margin: 0;
		padding: 0px;
		list-style: none;
		text-align: left;
		background: rgba(0, 0, 0, .9);
	}
	
	.top-bar .menu-list a {
		color: #fff;
		text-decoration: none;
	}
	
	.top-bar .menu-list li {
		height: 40px;
		line-height: 40px;
		margin-left: 40px;
		position: relative;
		border-bottom: 1px solid hsla(0, 0%, 100%, .2);
	}
	
	.top-bar .menu-list i.fa {
		width: 40px;
		height: 40px;
		line-height: 40px;
		display: block;
		text-align: center;
		position: absolute;
		top: 0px;
		font-size: 15px;
		left: -40px;
	}
	
	.top-bar .header-mask {
		position: fixed;
		top: 0px;
		bottom: 0px;
		left: 0px;
		right: 0px;
		z-index: 9998;
		/*background-color: rgba(0,0,255,0.3);*/
	}
</style>