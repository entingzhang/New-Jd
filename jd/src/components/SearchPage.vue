<template>
	<div class="search-page" v-show="show">
		<header class="weui-flex">
			<div class="go-back">
				<a href="#" @click.prevent="hide"><i class="fa fa-angle-left"></i></a>
			</div>
			<div class="search weui-flex-item">
				<input type="search" placeholder="请输入关键字..." />
			</div>
			<div class="search-button">
				<a href="">搜索</a>
			</div>
		</header>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			};
		},
		props: ['value'],
		created() {
			this.show=this.value;
			console.log(this.show)
		},
		watch: {
			value(val) {
				this.show = val;
				if(val) {
					document.body.style.overflow = "hidden";
				} else {
					document.body.style.overflow = "atuo";
				}
			}
		},
		methods: {
			hide() {
				this.show = false;
				this.$emit('input', false);
				document.body.style.overflow = "atuo";
			}
		}

	}
</script>

<style>
	.search-page {
		height: 100%;
		width: 100%;
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		z-index: 99999;
		background-color: #ffffff;
	}
	
	.search-page header .search {
		padding-top: 7px;
	}
	
	.search-page header input {
		width: 100%;
		height: 30px;
		border-radius: 15px;
		border: solid 1px #CCCCCC;
		outline: none;
		padding-left: 40px;
		background-color: #fff;
		box-sizing: border-box;
	}
	
	.search-page header .search-button {
		width: 60px;
	}
	
	.search-page header .search-button a {
		position: static;
		padding: 6px;
		box-sizing: border-box;
		background-color: #e93b3d;
		color: #fff;
		border-radius: 4px;
		font-size: 14px;
		line-height: 44px;
		text-decoration: none;
	}
</style>