<template>
	<div class="search-products container">
		<div class="check-area">
			<el-dropdown>
				<span class="el-dropdown-link">
    		综合<i class="fa fa-sort-down"></i>
 			</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>综合排序<i class="fa fa-check pull-right"></i></el-dropdown-item>
					<el-dropdown-item>新品优先<i class="fa fa-check pull-right"></i></el-dropdown-item>
					<el-dropdown-item>评论数从高到低<i class="fa fa-check pull-right"></i></el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<el-dropdown>
				<span class="el-dropdown-link" @click="sort('sales')">销量</span>
			</el-dropdown>
			<el-dropdown>
				<span class="el-dropdown-link">
    		价格<i class="fa fa-sort-up"></i><i class="fa fa-sort-down"></i>
 			</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>从高到低<i class="fa fa-check pull-right"></i></el-dropdown-item>
					<el-dropdown-item>从低到高<i class="fa fa-check pull-right"></i></el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<el-dropdown>
				<span class="el-dropdown-link" >筛选<i class="fa fa-filter"></i></span>
			</el-dropdown>
		</div>
		<div class="check-btn">
			<button class="btn">12.12</button>
			<button class="btn">新品</button>
			<button class="btn">品牌</button>
			<button class="btn">版型</button>
		</div>

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
						<div class="price weui-flex__item">￥:<span v-text="item.price"></span>
							<p class="sales">销量:<span v-text="item.sales"></span></p>
						</div>
						<div class="num">
							<span class="fa fa-minus" @click="item.count=item.count>1?--item.count:item.count"></span>
							<span class="count" v-text="item.count"></span>
							<span class="fa fa-plus" @click="item.count++"></span>
						</div>
						<button class="button-cart">添加到<i class="fa fa-shopping-cart"></i></button>
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
					sales: 48,
					select: false,
					count: 1
				}, {
					title: 'OPPO Find X曲面全景屏 冰珀蓝8GB+128GB 全网通 移动联通电信全网通4G 双卡双待手机',
					price: 299,
					id: '2',
					image: '/images/11.jpg',
					sales: 18,
					select: false,
					count: 1
				}, {
					title: 'OPPO Find X曲面全景屏 冰珀蓝8GB+128GB 全网通 移动联通电信全网通4G 双卡双待手机',
					price: 199,
					id: '3',
					image: '/images/12.jpg',
					sales: 58,
					select: false,
					count: 1
				}, {
					title: 'OPPO Find X曲面全景屏 冰珀蓝8GB+128GB 全网通 移动联通电信全网通4G 双卡双待手机',
					price: 399,
					id: '4',
					image: '/images/13.jpg',
					sales: 88,
					select: false,
					count: 1
				}, {
					title: 'OPPO Find X曲面全景屏 冰珀蓝8GB+128GB 全网通 移动联通电信全网通4G 双卡双待手机',
					price: 299,
					id: '1',
					image: '/images/16.jpg',
					sales: 8,
					select: false,
					count: 1
				}, {
					title: 'OPPO Find X曲面全景屏 冰珀蓝8GB+128GB 全网通 移动联通电信全网通4G 双卡双待手机',
					price: 299,
					id: '2',
					image: '/images/2.jpg',
					sales: 5,
					select: false,
					count: 1
				}, {
					title: 'OPPO Find X曲面全景屏 冰珀蓝8GB+128GB 全网通 移动联通电信全网通4G 双卡双待手机',
					price: 129,
					id: '3',
					image: '/images/3.jpg',
					sales: 180,
					select: false,
					count: 1
				}, {
					title: 'OPPO Find X曲面全景屏 冰珀蓝8GB+128GB 全网通 移动联通电信全网通4G 双卡双待手机',
					price: 269,
					id: '4',
					image: '/images/4.jpg',
					sales: 22,
					select: false,
					count: 1
				}],
				selects: [],
				all: false
			};
		},
		methods: {
			select(index) {
				this.products[index].select = !this.products[index].select;
				if(this.products[index].select) {
					let flag = false;
					//加
					for(let i = 0; i < this.selects.length; i++) {
						if(this.selects[i].id == this.products[index].id) {
							flag = true;
						}
					}
					if(!flag) {
						this.selects.push(this.products[index]);
					}
					console.log(this.selects);
				} else {
					//减
					for(let i = 0; i < this.selects.length; i++) {
						if(this.selects[i].id == this.products[index].id) {
							this.selects.splice(i, 1)
						}
					}
				}
				if(this.selects.length != this.products.length) {
					this.all = false;
				} else {
					this.all = true;
				}
			},
			sort(sales) {
				this.sortSales = sales;
				this.products.sort(this.compare(sales));
			},
			compar(attr) {
				return function(a, b) {
					var val1 = a[attr];
					var val2 = b[attr];
					return val2 - val1;
				}
			}
		}
	}
</script>
<style>
	.search-products {
		margin-top: 44px;
		margin-bottom: 50px;
	}
	
	.check-area {
		height: 44px;
	}
	.check-btn{
		height: 50px;
		padding: 10px 0px;
		border-bottom: 1px solid #CCCCCC;
	}
	.check-btn .btn{
		width: 20%;
		margin-left: 3%;
		border-radius: 20px;
	}
	.el-dropdown,
	.el-dropdown-menu {
		width: 25%;
		line-height: 44px;
		text-align: center;
		border-bottom: 1px solid #CCCCCC;
		border-top: 1px solid #CCCCCC;
	}
	
	.fa {
		color: #E93B3D;
	}
	
	.shopping-list {
		margin-top: 10px;
		overflow-y: auto;
	}
	
	.button-cart {
		width: 50px;
		height: 25px;
		font-size: 12px;
		color: #ffffff;
		background-color: #E93B3D;
		border-radius: 5px;
		border: 1px solid #E93B3D;
		margin-left: 10px;
	}
</style>