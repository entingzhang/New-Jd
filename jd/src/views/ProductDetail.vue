<template>
	<div>
		<top-bar>
			<ul>
				<li :class="{active:navIndex==index}" v-for="(item,index) in nav" @click="navIndex=index;scroll(item.ref)"><span v-text="item.title"></span></li>
			</ul>
		</top-bar>
		<div id="product" ref="product" style="height: 600px;">
			<product-goods></product-goods>
		</div>
		<div id="comment" ref="comment" style="height: 600px;background-color: pink;">
			<product-comment></product-comment>
		</div>
		<div id="detail" ref="detail" style="height: 600px;background-color: deeppink;">
			<product-xiang></product-xiang>
		</div>
		<div id="recommend" ref="recommend" style="height: 600px;background-color: green;">
			<product-recommend></product-recommend>
		</div>
		<product-footer></product-footer>
	</div>
</template>

<script>
	import TopBar from "@/components/TopBar.vue";
	import ProductGoods from "@/components/ProductGoods.vue";
	import ProductComment from "@/components/ProductComment.vue";
	import ProductXiang from "@/components/ProductXiang.vue";
	import ProductRecommend from "@/components/ProductRecommend.vue";
	import ProductFooter from "@/components/ProductFooter.vue";
	export default {
		data() {
			return {
				navIndex: 0,
				nav: [{
					ref: 'product',
					title: '商品'
				}, {
					ref: 'comment',
					title: '评价'
				}, {
					ref: 'detail',
					title: '详情'
				}, {
					ref: 'recommend',
					title: '推荐'
				}]
			}
		},
		methods: {
			scroll(ref) {
				console.log(this.$refs[ref]);
				var top = this.$refs[ref].offsetTop;
				document.documentElement.scrollTop = top;
			}
		},
		mounted() {
			console.log(document.body.scrollTop);
		},
		components: {
			TopBar,
			ProductGoods,
			ProductComment,
			ProductXiang,
			ProductRecommend,
			ProductFooter
		}
	}
</script>

<style scoped="scoped">
	.top-bar {
		width: 100%;
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 99999;
	}
	
	.top-bar ul {
		margin: 0px;
		padding: 0px 40px;
		text-align: center;
		list-style: none;
	}
	
	.top-bar ul li {
		float: left;
		width: 25%;
	}
	
	.top-bar ul li.active span {
		font-weight: bold;
		color: #e4393c;
		padding-left: 13px;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYBAMAAAABjmA/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURek7PUdwTO49Peg6Peo6Puc6Pek6POk6POg6POg7PeY8POg6POk6PApBjXgAAAANdFJOU/8ADttQPYvEqJYqW/KuifCQAAAAjklEQVQI10XOsRGCQBAF0D8eA6Imn4ERMh0tgDE2UDqgA2Ij7UA6gA6MjCnB0vzLBlxw92Z379+B/F7DgwQraI3C05AQc0ElfBCac40NOlzIE2LUuJM5gtpHMtPxc+yW1tuH15j8+hYHD1yhdPQoHO3yKG+GSNgbXsI81AocgNS+qlgLFwrrGNjFdFS9tj82HhIeoIR1QQAAAABJRU5ErkJggg==) no-repeat 0;
		background-size: 8px;
	}
</style>