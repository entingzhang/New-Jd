<template>

	<div>

		<header class="fixed">
			<p>京东购物车</p>
			<a href="#" class="user">
				<i class="fa fa-search"></i>
			</a>
		</header>
		<ul>
			<li class="list1 clear-float" v-for="(item,index) in goods">
				<div class="left">
					<div class="check-box" :class="{'selected':item.selected}" @click="select(index)"></div>
				</div>
				<ul class="right">
					<li><img :src="item.image" /></li>
					<li class="clear-float">
						<p v-text="item.title"></p>
						<div class="price">
							￥:<span v-text="item.price"></span>
						</div>
						<div class="count">
							<span @click="item.count=item.count>1?--item.count:item.count">-</span>
							<span v-text="item.count">1</span>
							<span @click="item.count++">+</span>
						</div>
					</li>
				</ul>
			</li>
		</ul>
		
		<div class="dibu flex">
			<div class="all" :class="{'selected':all}" @click="selectAll" style="margin: 0.1rem;display: inline-block;">
				<div class="check-box" :class="{'selected':item.selected}" @click="select(index)"></div>
				<span>全选</span>
			</div>
			<div class="money">
				<span>合计：￥</span>
				<span></span>
			</div>
			<div class="go">
				去结算(<span></span>)
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data: function() {
			return {
				all: false,
				goods: [{
					id: 1,
					title: '01-OPPO Find X手机【6期免息】双曲面全景屏 8G运存+128G/256G内存双卡双待全网通 波尔多红（标准版）8GB+128GB',
					price: 4999,
					count: 1,
					image: 'img/phone.jpg',
					selected: false,
				}],
				selected: []

			},
			methods: {
					select: function(index) {
						this.goods[index].selected = !this.goods[index].selected;
						// 如果是true则添加到selected数组中
						if(this.goods[index].selected) {
							var flag = false;
							for(var i = 0; i < this.selected.length; i++) {
								if(this.selected[i].id == this.goods[index].id) {
									flag = true;
								}
							}
							// 如果数组中不存在则新增，如果存在则不再添加
							if(!flag)
								this.selected.push(this.goods[index]);
							// 如果是false则从selected中删除
						} else {
							// 如果数组中确实有这个数据则删除
							for(var i = 0; i < this.selected.length; i++) {
								if(this.selected[i].id == this.goods[index].id) {
									this.selected.splice(i, 1);
								}
							}
						}
						// 如果选中所有的商品则全选变成true，如果有一个没有选中则变成false
						if(this.goods.length == this.selected.length) {
							this.all = true;
						} else {
							this.all = false;
						}
					},

				},
				selectAll() {
					this.all = !this.all;
					if(this.all) {
						for(let i = 0; i < this.goods.length; i++) {
							this.selected.push(this.goods[i]);
							this.goods[i].selected = true;
						}
					} else {
						for(let i = 0; i < this.goods.length; i++) {
							this.goods[i].selected = false;
						}
						this.selected = [];
					}
				},
				created() {
					console.log(this.login);
				},
				computed: {
					total: function() {
						var sum = 0;
						for(var i = 0; i < this.selected.length; i++) {
							sum += this.selected[i].count;
						}
						return sum;
					},
					money: function() {
						var sum = 0;
						for(var i = 0; i < this.selected.length; i++) {
							sum += this.selected[i].count * this.selected[i].price;
						}
						return sum;
					}
					
				}
		}
	}
</script>
<style scoped>
	header {
		margin: 0;
		padding: 0;
		height: 50px;
		width: 100%;
		background: pink;
		font-size: 30px;
		position: fixed;
		top: 0px;
		left: 0px;
		text-align: center;
		line-height: 50px;
	}
	
	header a {
		display: block;
		position: fixed;
		top: 0px;
		right: 15%;
	}
	
	.shopping-cart-empty {
		padding: 30px 0 15px;
	}
	
	.shopping-cart-empty img {
		width: 90px;
	}
	
	.clear:after {
		display: block;
		content: "";
		height: 0;
		clear: both;
		visibility: hidden;
	}
	
	.clear-float {
		overflow: hidden;
		zoom: 1;
	}
	
	ul {
		margin: 20px auto;
		box-sizing: border-box;
		width: 100%;
		height: 750px;
		background: pink;
		cursor: pointer;
	}
	
	.list1 {
		padding: 10px;
		height: 230px;
	}
	
	li .left {
		float: left;
		width: 10%;
		text-align: center;
	}
	
	li .left img {
		width: 20px;
		margin-top: 100px;
	}
	
	ul li .right {
		float: right;
		width: 90%;
		height: 230px;
		background: #fff;
		padding-left: 25px;
	}
	
	ul li .right li img {
		float: left;
		width: 120px;
		margin-top: 25px;
		margin-right: 20px;
	}
	
	ul li .right li p {
		margin-top: 25px;
	}
	
	.right li div {
		float: left;
		margin-top: 10%;
	}
	
	.right li .price {
		margin-right: 65%;
	}
	
	.dibu {
		height: 50px;
	}
	
	.dibu div {
		float: left;
	}
	
	.dibu .money {
		margin: 0 30%;
	}
	
	.all {
		margin-left: 5%;
	}
	
	.all .check-box {
		width: 20px;
		margin-top: 5px;
	}
	
	.check-box {
		width: 20px;
		height: 20px;
		background-image: url(img/chooses.png);
		background-size: contain;
		margin-top: 100px;
		position: relative;
		text-align: center;
	}
	
	.check-box.selected {
		background-image: url(img/ok.png);
	}
</style>