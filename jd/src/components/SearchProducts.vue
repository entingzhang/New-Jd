<template>
	<div class="search-products container">
		<el-dropdown>
			<span class="el-dropdown-link">
    		综合<i class="fa fa-angle-down"></i>
 			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item>综合排序<i class="fa fa-check pull-right"></i></el-dropdown-item>
				<el-dropdown-item>新品优先<i class="fa fa-check pull-right"></i></el-dropdown-item>
				<el-dropdown-item>评论数从高到低<i class="fa fa-check pull-right"></i></el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<el-dropdown>
			<span class="el-dropdown-link">销量</span>
		</el-dropdown>
		<el-dropdown>
			<span class="el-dropdown-link">
    		价格<i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i>
 			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item>从高到低<i class="fa fa-check pull-right"></i></el-dropdown-item>
				<el-dropdown-item>从低到高<i class="fa fa-check pull-right"></i></el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<div class="shopping-list">
			<div class="item weui-flex" v-for="(item,index) in products">
				<div class="select">
					<span class="check-box" :class="{checked:item.select}" @click="select(index)"></span>
				</div>
				<div class="product-image">
					<router-link :to="'/product/'+item.id"><img :src="item.image"></router-link>
				</div>
				<div class="product-content weui-flex__item">
					<router-link :to="'/product/'+item.id">
						<div class="title" v-text="item.title"></div>
					</router-link>
					<div class="product-line weui-flex">
						<div class="price weui-flex__item">￥:<span v-text="item.price"></span></div>
						<div class="num">
							<span class="fa fa-minus" @click="item.count=item.count>1?--item.count:item.count"></span>
							<span class="count" v-text="item.count"></span>
							<span class="fa fa-plus" @click="item.count++"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				products: [{
					title: 'OPPO Find X曲面全景屏 冰珀蓝8GB+128GB 全网通 移动联通电信全网通4G 双卡双待手机',
					price: 199,
					id: '1',
					image: '/images/1.jpg',
					select: false,
					count: 1
				}, {
					title: 'OPPO Find X曲面全景屏 冰珀蓝8GB+128GB 全网通 移动联通电信全网通4G 双卡双待手机',
					price: 299,
					id: '2',
					image: '/images/11.jpg',
					select: false,
					count: 1
				}, {
					title: 'OPPO Find X曲面全景屏 冰珀蓝8GB+128GB 全网通 移动联通电信全网通4G 双卡双待手机',
					price: 199,
					id: '3',
					image: '/images/12.jpg',
					select: false,
					count: 1
				}, {
					title: 'OPPO Find X曲面全景屏 冰珀蓝8GB+128GB 全网通 移动联通电信全网通4G 双卡双待手机',
					price: 399,
					id: '4',
					image: '/images/13.jpg',
					select: false,
					count: 1
				},{
					title: 'OPPO Find X曲面全景屏 冰珀蓝8GB+128GB 全网通 移动联通电信全网通4G 双卡双待手机',
					price: 299,
					id: '1',
					image: '/images/16.jpg',
					select: false,
					count: 1
				}, {
					title: 'OPPO Find X曲面全景屏 冰珀蓝8GB+128GB 全网通 移动联通电信全网通4G 双卡双待手机',
					price: 299,
					id: '2',
					image: '/images/2.jpg',
					select: false,
					count: 1
				}, {
					title: 'OPPO Find X曲面全景屏 冰珀蓝8GB+128GB 全网通 移动联通电信全网通4G 双卡双待手机',
					price: 129,
					id: '3',
					image: '/images/3.jpg',
					select: false,
					count: 1
				}, {
					title: 'OPPO Find X曲面全景屏 冰珀蓝8GB+128GB 全网通 移动联通电信全网通4G 双卡双待手机',
					price: 269,
					id: '4',
					image: '/images/4.jpg',
					select: false,
					count: 1
				}
				],
				selects: [],
				all: false
			}
		}
	}
</script>
<style>
	.search-products {
		margin-top: 44px;
		margin-bottom: 50px;
	}
	
	.el-dropdown,
	.el-dropdown-menu {
		width: 30%;
	}
	
	.fa-angle-down,
	.fa-check,
	.fa-angle-up {
		color: #E93B3D;
	}
	.shopping-list{
		margin-top: 10px;
		overflow-y: auto;
	}
</style>