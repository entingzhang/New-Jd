<template>
	<div class="container">
		<el-card class="box-card">
			<div slot="header">
				<b>我的关注</b>
			</div>
			<div class="text item">
				<el-badge value="2" class="item">
					<el-button size="small">评论</el-button>
				</el-badge>
				<el-badge value="5" class="item">
					<el-button size="small">回复</el-button>
				</el-badge>
			</div>
		</el-card>
		<el-card class="box-card">
			<div slot="header">
				<b>我的浏览记录</b>
			</div>
			<div class="text item">
				<el-row>
					<el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
						<el-card :body-style="{ padding: '0px' }">
							<img src="../../public/images/productimage_01.jpg" class="images"/>
							<div style="padding: 14px;">
								<span>好吃的汉堡</span>
								<div class="bottom clearfix">
									<time class="time">{{ currentDate }}</time>
									<el-button type="text" class="button">操作按钮</el-button>
								</div>
							</div>
						</el-card>
					</el-col>
				</el-row>
			</div>
		</el-card>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currentDate: new Date()
			};
		}
	}
</script>

<style scoped="scoped">
	.item {
		margin-top: 10px;
		margin-right: 40px;
		float: left;
	}
	
	.time {
		font-size: 13px;
		color: #999;
	}
	
	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}
	
	.button {
		padding: 0;
		float: right;
	}
	.image {
		width: 80px;
		display: block;
	}
	
	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}
	
	.clearfix:after {
		clear: both
	}
</style>