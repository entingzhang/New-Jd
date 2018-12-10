<template>
	<div class="container">
		<el-card class="box-card">
			<div slot="header">
				<b>订单中心</b>
			</div>
			<div class="text item">
				<p>我的订单</p>
				<p>评价晒单</p>
			</div>
		</el-card>
		<el-card class="box-card">
			<div slot="header">
				<b>我的钱包</b>
			</div>
			<div class="text item">
				<p>优惠券</p>
				<p>京豆</p>
				<p>白条</p>
				<p>红包</p>
				<p>礼品卡</p>
				<p>更多&nbsp;&nbsp;<i class="fa fa-angle-right"></i></p>
			</div>
		</el-card>
		<el-card class="box-card">
			<div slot="header">
				<b>我的关注</b>
			</div>
			<div class="text item">
				<p>关注商品</p>
				<p>关注店铺</p>
				<p>内容收藏</p>
			</div>
		</el-card>
		<el-card class="box-card">
			<div slot="header">
				<!-- class="clearfix"-->
				<b>我的活动</b>
			</div>
			<div class="text item">
				<p>我的预约</p>
				<p>我的拍卖</p>
				<p>我的回收单</p>
				<p>我的必购码</p>
				<p>礼我的口令</p>
				<p>更多&nbsp;&nbsp;<i class="fa fa-angle-right"></i></p>
			</div>
		</el-card>
		<el-card class="box-card">
			<div slot="header">
				<b>客户服务</b>
			</div>
			<div class="text item">
				<p>返修退换货</p>
				<p>价格保护</p>
				<p>我的发票</p>
				<p>购买咨询</p>
				<p>交易纠纷</p>
				<p>更多&nbsp;&nbsp;<i class="fa fa-angle-right"></i></p>
			</div>
		</el-card>
		<el-card class="box-card">
			<div slot="header">
				<b>特色业务</b>
			</div>
			<div class="text item">
				<p>我的营业厅</p>
				<p>京东通信</p>
				<p>节能补贴</p>
				<p>医疗服务</p>
				<p>流量加油站</p>
				<p>更多&nbsp;&nbsp;<i class="fa fa-angle-right"></i></p>
			</div>
		</el-card>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.container{
		
		height: 100%;
		box-sizing: border-box;
	}
	.box-card{
		max-width: 188px;
		margin-left: 55px;
	}
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
</style>