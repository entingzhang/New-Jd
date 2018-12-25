<template>
	<div class="category-page">
		<search-bar></search-bar>
		<div class="container weui-flex">
			<div class="aside" ref="aside" @touchstart="asideTouchStart" @touchmove="asideTouchMove" @touchend="asideTouchEnd">
				<ul ref="aside-ul" :style="{top:asideTop+'px'}" :class="{transition:transition}">
					<li :class="{active:navIndex==index}" v-for="(item,index) in nav" v-text="item.title" @click="navIndex=index;getContentList(item.id);"> </li>
				</ul>
			</div>
			<div class="content weui-flex__item" ref="content" @touchstart="contentTouchStart" @touchmove="contentTouchMove" @touchend="contentTouchEnd">
				<div class="category-list" ref="category-list" :style="{top:contentTop+'px'}">
					<div class="category-image">
						<img :src="products.image">
					</div>
					<div class="category-jd" v-for="(row,i) in products.category">
						<div class="title" v-text="row.title"></div>
						<ul class="clear">
							<li class="product left" v-for="(col,j) in row.list">
								<img :src="col.image" />
								<div class="product-name" v-text="col.name"></div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<dibu></dibu>
	</div>
</template>

<script>
	import SearchBar from "@/components/Search.vue";
	import Dibu from "@/components/Footer.vue";
	export default {
		data() {
			return {
				navIndex: 0,
				asideTop: 0,
				asideTopTmp: 0,
				asideStartY: 0,
				minTop: 0,
				transition: 'false',

				products: [],
				contentTop: 0,
				contentTopTmp: 0,
				contentStartY: 0,
				contentMinTop: 0,
				nav: [{
					id: 1,
					title: '热门分类'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 3,
					title: '国际名牌'
				}, {
					id: 4,
					title: '海囤全球'
				}, {
					id: 5,
					title: '电脑办公'
				}, {
					id: 6,
					title: '京东美妆'
				}, {
					id: 7,
					title: '京东图书'
				}, {
					id: 8,
					title: '家用电器'
				}, {
					id: 9,
					title: '食品生鲜'
				}, {
					id: 10,
					title: '京东超市'
				}, {
					id: 11,
					title: '酒水饮料'
				}, {
					id: 12,
					title: '玩具乐器'
				}, {
					id: 13,
					title: '热门分类'
				}, {
					id: 14,
					title: '手机数码'
				}, {
					id: 15,
					title: '国际名牌'
				}, {
					id: 16,
					title: '海囤全球'
				}, {
					id: 17,
					title: '电脑办公'
				}, {
					id: 18,
					title: '京东美妆'
				}, {
					id: 19,
					title: '京东图书'
				}, {
					id: 20,
					title: '家用电器'
				}, {
					id: 21,
					title: '食品生鲜'
				}, {
					id: 22,
					title: '京东超市'
				}, {
					id: 23,
					title: '酒水饮料'
				}, {
					id: 24,
					title: '玩具乐器'
				}],
				category: [{
					image: '/images/listli-image.png',
					category: [{
						title: '热门分类',
						list: [{
							image: '/images/phone.jpg',
							name: '手机'
						}, {
							image: '/images/phone.jpg',
							name: '手机'
						}, {
							image: '/images/phone.jpg',
							name: '手机'
						}, {
							image: '/images/phone.jpg',
							name: '手机'
						}, {
							image: '/images/phone.jpg',
							name: '手机'
						}, {
							image: '/images/phone.jpg',
							name: '手机'
						}, {
							image: '/images/phone.jpg',
							name: '手机'
						}, {
							image: '/images/phone.jpg',
							name: '手机'
						}, {
							image: '/images/phone.jpg',
							name: '手机'
						}, {
							image: '/images/phone.jpg',
							name: '手机'
						}]
					}, {
						title: '手机数码',
						list: [{
							image: '/images/1.jpg',
							name: '热水壶'
						}, {
							image: '/images/1.jpg',
							name: '热水壶'
						}, {
							image: '/images/1.jpg',
							name: '热水壶'
						}, {
							image: '/images/1.jpg',
							name: '热水壶'
						}, {
							image: '/images/1.jpg',
							name: '热水壶'
						}, {
							image: '/images/1.jpg',
							name: '热水壶'
						}, {
							image: '/images/1.jpg',
							name: '热水壶'
						}, {
							image: '/images/1.jpg',
							name: '热水壶'
						}]
					}]
				}, {
					image: '/images/listli-image2.jpg',
					category: [{
						title: '国际名牌',
						list: [{
							image: '/images/2.jpg',
							name: '计生用品'
						}, {
							image: '/images/2.jpg',
							name: '计生用品'
						}, {
							image: '/images/2.jpg',
							name: '计生用品'
						}, {
							image: '/images/2.jpg',
							name: '计生用品'
						}, {
							image: '/images/2.jpg',
							name: '计生用品'
						}, {
							image: '/images/2.jpg',
							name: '计生用品'
						}, {
							image: '/images/2.jpg',
							name: '计生用品'
						}, {
							image: '/images/2.jpg',
							name: '计生用品'
						}, {
							image: '/images/2.jpg',
							name: '计生用品'
						}, {
							image: '/images/2.jpg',
							name: '计生用品'
						}, {
							image: '/images/2.jpg',
							name: '计生用品'
						}, {
							image: '/images/2.jpg',
							name: '计生用品'
						}, {
							image: '/images/2.jpg',
							name: '计生用品'
						}, {
							image: '/images/2.jpg',
							name: '计生用品'
						}]
					}, {
						title: '海囤全球',
						list: [{
							image: '/images/6.jpg',
							name: '化妆品'
						}, {
							image: '/images/6.jpg',
							name: '化妆品'
						}, {
							image: '/images/6.jpg',
							name: '化妆品'
						}, {
							image: '/images/6.jpg',
							name: '化妆品'
						}, {
							image: '/images/6.jpg',
							name: '化妆品'
						}, {
							image: '/images/6.jpg',
							name: '化妆品'
						}, {
							image: '/images/6.jpg',
							name: '化妆品'
						}]
					}]
				}]

			}
		},
		methods: {
			asideTouchStart(event) {
				this.transition = false;
				this.asideStartY = event.changedTouches[0].clientY;
				console.log(event.changedTouches[0].clientY);
			},
			asideTouchMove(event) {
				var y = event.changedTouches[0].clientY;
				var t = this.asideTopTmp + y - this.asideStartY;
				/// 限定上拉的阈值;
				t = t < this.minTop ? this.minTop : t;
				/// 限定下拉的阈值;
				t = t > 150 ? 150 : t;
				this.asideTop = t;
				console.log(this.asideTop);
			},
			asideTouchEnd(event) {
				this.transition = true;
				//在往下拉的过程中如果顶部已经到达顶端故移动停止的时候回归到top等于0的地方
				this.asideTop = this.asideTop > 0 ? 0 : this.asideTop;
				//在上拉的过程中如果上拉的点到低端的距离超过150，故移动停止的时候最下端到底部的回归到0
				this.asideTop = this.asideTop < (this.minTop + 150) ? (this.minTop + 150) : this.asideTop;
				this.asideTopTmp = this.asideTop;
			},
			getContentList(id) {
				this.products = { ...this.category[(Math.random() > 0.5 ? 0 : 1)]
				};
				console.log(this.products)
			},
			contentTouchStart(event) {
				this.transition = false;
				this.contentStartY = event.changedTouches[0].clientY;
				console.log(event.changedTouches[0].clientY);
			},
			contentTouchMove(event) {
				var y = event.changedTouches[0].clientY;
				var t = this.contentTopTmp + y - this.contentStartY;
				/// 限定上拉的阈值;
				t = t < this.contentMinTop ? this.contentMinTop : t;
				/// 限定下拉的阈值;
				t = t > 150 ? 150 : t;
				this.contentTop = t;
				console.log(this.contentTop);
			},
			contentTouchEnd(event) {
				this.transition = true;
				//在往下拉的过程中如果顶部已经到达顶端故移动停止的时候回归到top等于0的地方
				this.contentTop = this.contentTop > 0 ? 0 : this.contentTop;
				//在上拉的过程中如果上拉的点到低端的距离超过150，故移动停止的时候最下端到底部的回归到0
				this.contentTop = this.contentTop < (this.contentMinTop + 150) ? (this.contentMinTop + 150) : this.contentTop;
				this.contentTopTmp = this.contentTop;
			},
		},
		mounted() {
			//使用dom方法获取上下拉的高度的
			console.log(document.querySelector(".category-page .aside").clientHeight);
			console.log(document.querySelector(".category-page .aside ul").clientHeight);
			//使用vue方法获取上下拉的高度的
			console.log(this.$refs['aside'].clientHeight);
			console.log(this.$refs['aside-ul'].clientHeight);

			//得到的是ul上移动的距离，上移动的距离是负值故是aside-ul的高度减去aside的高度
			this.minTop = this.$refs['aside'].clientHeight - 150 - this.$refs['aside-ul'].clientHeight;

			console.log(this.minTop);
			//			this.contentMinTop = this.$refs['content'].clientHeight - 150 - this.$refs['category-list'].clientHeight;
		},
		created() {
			this.getContentList();
		},
		updated() {
			this.contentMinTop = this.$refs['content'].clientHeight - 150 - this.$refs['category-list'].clientHeight;
		},
		components: {
			SearchBar,
			Dibu
		}
	}
</script>

<style>
	html,
	body,
	#app,
	.category-page {
		height: 100%;
	}
	
	.category-page .container {
		padding: 44px 0px 50px;
		height: 100%;
		box-sizing: border-box;
	}
	
	.category-page .aside {
		margin: 0;
		padding: 0;
		width: 85px;
		background-color: #C0BFC4;
		height: 100%;
		overflow: hidden;
		position: relative;
	}
	
	.category-page .aside ul {
		margin: 0;
		padding: 0;
		list-style: none;
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		border-right: solid 1px #CCCCCC;
		border-top: solid 1px #CCCCCC;
		box-sizing: border-box;
	}
	
	.category-page .aside ul li {
		height: 46px;
		line-height: 46px;
		font-size: 14px;
		text-align: center;
		border-bottom: 1px solid #CCCCCC;
		box-sizing: border-box;
		color: #333;
	}
	
	.transition {
		-webkit-transition: top 0.3s linear;
		transition: top 0.3s linear;
	}
	
	.category-page .container .aside ul li.active {
		color: #F23030!important;
	}
	
	.category-page .content {
		overflow: hidden;
		position: relative;
	}
	
	.category-list {
		width: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
	}
	
	.category-image {
		margin: 7px 7px 0px;
		box-sizing: border-box;
	}
	
	.category-image img {
		width: 100%;
	}
	
	.category-jd {
		padding: 19px 7px 0px;
		box-sizing: border-box;
	}
	
	.category-jd .title {
		font-size: 14px;
		font-weight: 700;
		color: #333;
		margin: 0;
		padding: 0;
	}
	
	.category-jd ul {
		margin: 9px 9px 0px;
		padding: 0;
	}
	
	.category-jd ul li {
		width: 33.33%;
		text-align: center;
		list-style: none;
	}
	
	.category-jd ul li img {
		width: 70px;
		height: 70px;
	}
	
	.category-jd li .product-name {
		color: #333;
		height: 35px;
		margin-top: 2px;
	}
</style>