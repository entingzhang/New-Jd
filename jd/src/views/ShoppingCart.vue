<template>
	<div class="shopping-cart">
		<top-bar>购物车</top-bar>
		<div class="shopping-list">
			<div class="item weui-flex" v-for="(item,index) in products">
				<div class="select">
					<span class="check-box " :class="{checked:item.select}" @click="select(index)"></span>
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
		<div class="fixbar weui-flex">
			<div class="select-all" @click="selectAll">
				<span class="check-box" :class="{checked:all}"></span>
				<span class="all">全选</span>
			</div>
			<div class="total weui-flex__item">
				总计:<span class="total-price">￥:<span v-text="sum"></span></span>
			</div>
			<a href="#" class="buy">去结算 <span class="total-count">(<span v-text="total"></span>件)</span>
			</a>
		</div>
		<dibu></dibu>
	</div>
</template>

<script>
	import Dibu from "@/components/Footer.vue";
	import TopBar from "@/components/TopBar.vue";
	export default {
		//		name:'cart',
		data: function() {
			return {
				products: [{
					title: 'OPPO Find X曲面全景屏 冰珀蓝8GB+128GB 全网通 移动联通电信全网通4G 双卡双待手机',
					price: 4999,
					id: '1',
					image: '/images/phone.jpg',
					select: false,
					count: 1
				}, {
					title: 'OPPO Find X曲面全景屏 冰珀蓝8GB+128GB 全网通 移动联通电信全网通4G 双卡双待手机',
					price: 5999,
					id: '2',
					image: '/images/phone.jpg',
					select: false,
					count: 1
				}, {
					title: 'OPPO Find X曲面全景屏 冰珀蓝8GB+128GB 全网通 移动联通电信全网通4G 双卡双待手机',
					price: 6999,
					id: '3',
					image: '/images/phone.jpg',
					select: false,
					count: 1
				}, {
					title: 'OPPO Find X曲面全景屏 冰珀蓝8GB+128GB 全网通 移动联通电信全网通4G 双卡双待手机',
					price: 3999,
					id: '4',
					image: '/images/phone.jpg',
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
			selectAll() {
				this.all = !this.all;
				if(this.all) {
					for(let i = 0; i < this.products.length; i++) {
						this.products[i].select = true;
						this.selects.push(this.products[i]);
					}
				} else {
					for(let i = 0; i < this.products.length; i++) {
						this.products[i].select = false;
					}
					this.selects = [];
				}
			}
		},
		computed: {
			total() {
				let n = 0;
				for(let i = 0; i < this.selects.length; i++) {
					n = n + this.selects[i].count;
				}
				return n;
			},
			sum() {
				let n = 0;
				for(let i = 0; i < this.selects.length; i++) {
					n += this.selects[i].count * this.selects[i].price;
				}
				return n;
			}
		},
		components: {
			Dibu,
			TopBar
		}
	}
</script>

<style>
	.shopping-list .item {
		position: relative;
		min-height: 75px;
		padding: 5px 10px 15px 0px;
		background: #fff;
		border-bottom: solid 1px #E5E5E5;
	}
	
	.shopping-list .select {
		height: 75px;
		line-height: 75px;
		width: 42px;
		text-align: center;
	}
	/* 单选样式 */
	
	.check-box {
		display: inline-block;
		width: 20px;
		height: 20px;
		background-size: contain;
		background-image: url(../../public/images/chooses.png);
	}
	/* 选中样式 */
	
	.checked {
		background-image: url(../../public/images/ok.png);
	}
	
	.shopping-list .product-image {
		width: 75px;
		height: 75px;
	}
	
	.shopping-list .product-image img {
		width: 75px;
		height: 75px;
	}
	
	.shopping-list .product-content {
		padding-left: 10px;
		min-height: 75px;
	}
	
	.shopping-list .title {
		font-size: 14px;
		margin-bottom: 5px;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.product-content .price {
		line-height: 30px;
		color: #e4393c;
		font-size: 16px;
	}
	
	.product-content .num span {
		position: relative;
		float: left;
		font-size: 13px;
		width: 30px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		background: #f7f7f7;
		font-weight: 100;
		color: #999;
	}
	
	.product-content .count {
		font-size: 16px;
		color: #333;
	}
	
	.fixbar {
		width: 100%;
		background-color: #fff;
		height: 50px;
		position: fixed;
		bottom: 50px;
		left: 0px;
		border-top: solid 1px #E5E5E5;
	}
	
	.fixbar .select-all {
		padding-top: 5px;
		width: 40px;
		font-size: 10px;
		text-align: center;
		height: 15px;
		color: #999;
	}
	
	.fixbar .select-all .all {
		display: block;
	}
	
	.fixbar .total {
		font-size: 16px;
		font-weight: bold;
		line-height: 50px;
		text-align: right;
	}
	
	.fixbar .total-price {
		color: #e4393c;
	}
	
	.fixbar a.buy {
		display: block;
		width: 110px;
		height: 50px;
		margin-left: 10px;
		line-height: 50px;
		font-size: 16px;
		text-align: center;
		font-weight: 700;
		background: #e4393c;
		color: #fff;
	}
	
	a.buy .total-count {
		font-weight: 400;
		font-size: 12px;
	}
</style>