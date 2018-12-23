<template>
	<el-container>
		<el-header>
			<search-bar></search-bar>
		</el-header>
		<el-main>
			<el-tabs :tab-position="tabPosition">
				<el-carousel :interval="4000" type="card" height="200px">
					<el-carousel-item v-for="(item,index) in images" :key="item">
						<img :src='item.image' />
					</el-carousel-item>
				</el-carousel>
				<el-tab-pane label="热门分类">
					<b>热门分类</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="手机数码">
					<b>手机数码</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="国际名牌">
					<b>国际名牌</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="海囤全球">
					<b>海囤全球</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="电脑办公">
					<b>电脑办公</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="京东美妆">
					<b>京东美妆</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="京东图书">
					<b>京东图书</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="家用电器">
					<b>家用电器</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="食品生鲜">
					<b>食品生鲜</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="京东超市">
					<b>京东超市</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="酒水饮料">
					<b>酒水饮料</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="玩具乐器">
					<b>玩具乐器</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="手机数码">
					<b>手机数码</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="国际名牌">
					<b>国际名牌</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="海囤全球">
					<b>海囤全球</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="电脑办公">
					<b>电脑办公</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="京东美妆">
					<b>京东美妆</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="京东图书">
					<b>京东图书</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="家用电器">
					<b>家用电器</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="食品生鲜">
					<b>食品生鲜</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="京东超市">
					<b>京东超市</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="酒水饮料">
					<b>酒水饮料</b>
					<list-nav></list-nav>
				</el-tab-pane>
				<el-tab-pane label="玩具乐器">
					<b>玩具乐器</b>
					<list-nav></list-nav>
				</el-tab-pane>
			</el-tabs>
		</el-main>
		<el-footer>
			<dibu></dibu>
		</el-footer>
	</el-container>
</template>

<script>
	import SearchBar from "@/components/Search.vue";
	import ListNav from "@/components/ListNav.vue";
	import Dibu from "@/components/Footer.vue";
	export default {
		data() {
			return {
				tabPosition: 'left',

				images: [{
					id: 1,
					image: '/images/listli-image.png'
				}, {
					id: 2,
					image: '/images/listli-image2.jpg'
				}, {
					id: 3,
					image: '/images/listli-image3.jpg'
				}, {
					id: 4,
					image: '/images/listli-image4.jpg'
				}]
			}
		},
		components: {
			SearchBar,
			ListNav,
			Dibu
		}
	}
</script>

<style>
	main.el-main {
		padding: 0px;
		z-index: 0;
	}
	
	.el-tabs {
		height: 100%;
		overflow-y: auto;
	}
	
	div.el-tabs__item {
		padding-left: 0px;
		background-color: pink;
	}
	
	div.el-tabs__item.is-active {
		color: #F23030;
	}
	
	.el-tabs__active-bar {
		background-color: #F23030!important;
	}
	
	.el-tab-pane b {
		margin-left: 13%;
		font-size: 20px;
	}
</style>