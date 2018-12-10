<template>
	<div class="container">
		<img src="../../public/images/logo22.png" />
		<el-card class="box-card pull-right">
			<div slot="header" class="clearfix">
				<span>我的钱包</span>
				<el-button style="float: right; padding: 3px 0" type="text"><i class="fa fa-eye"></i></el-button>
			</div>
			<div class="text item">
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="优惠券" name="first">领券</el-tab-pane>
					<el-tab-pane label="京豆" name="second">赚京豆|花京豆</el-tab-pane>
					<el-tab-pane label="余额" name="third">充值</el-tab-pane>
					<el-tab-pane label="暂未开启白条" name="fourth">立即开通</el-tab-pane>
					<el-tab-pane label="小金库昨日收益" name="fourth">转入小金库，马上赚钱</el-tab-pane>
				</el-tabs>
			</div>
		</el-card>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: 'second'
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		}
	};
</script>

<style scoped="scoped">
	.text {
		font-size: 14px;
	}
	
	.item {
		margin-bottom: 18px;
	}
	
	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}
	
	.clearfix:after {
		clear: both
	}
	
	.box-card {
		width: 480px;
	}
	
	.container img {
		width: 200px;
	}
	
	.el-card {
		position: fixed;
		left: 500px;
		top: 128px;
		width: 55%;
		height: 190px;
	}
</style>