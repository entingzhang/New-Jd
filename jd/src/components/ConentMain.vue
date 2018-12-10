<template>
	<div class="container">
		<div class="mainarea">
			<el-card class="box-card pull-right">
				<div slot="header" class="clearfix">
					<span>我的订单</span>
					<el-button style="float: right; padding: 3px 0" type="text"><i class="fa fa-eye"></i></el-button>
				</div>
				<div class="text item">
					<el-row>
						<el-button circle><i class="fa fa-credit-card"></i></el-button>
						<el-button circle><i class="fa fa-gift"></i></el-button>
						<el-button circle><i class="fa fa-list-alt"></i></el-button>
						<el-button circle><i class="fa fa-calendar-check-o"></i></el-button>
						<el-button circle><i class="fa fa-chevron-circle-right"></i></el-button>
					</el-row>
				</div>
			</el-card>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.mainarea {
		width: 68%;
		height: 100%;
	}
	
	.el-card {
		position: fixed;
		width: 53%;
		height: 100%;
	}
	.el-button{
		width: 80px;
		height: 80px;
		margin: 0px 30px;
	}
	.el-row i{
		font-size: 40px;
	}
</style>