<template>
	<div>
		<div class="check-area">
			<el-dropdown>
				<span class="el-dropdown-link">
    		综合<i class="fa fa-sort-down"></i>
 			</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>综合排序<i class="fa fa-check pull-right"></i></el-dropdown-item>
					<el-dropdown-item>新品优先<i class="fa fa-check pull-right"></i></el-dropdown-item>
					<el-dropdown-item>评论数从高到低<i class="fa fa-check pull-right"></i></el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<el-dropdown>
				<span class="el-dropdown-link" @click="sort('sales')">销量</span>
			</el-dropdown>
			<el-dropdown>
				<span class="el-dropdown-link">
    		价格<i class="fa fa-sort-up"></i><i class="fa fa-sort-down"></i>
 			</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>从高到低<i class="fa fa-check pull-right"></i></el-dropdown-item>
					<el-dropdown-item>从低到高<i class="fa fa-check pull-right"></i></el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<el-dropdown>
				<span class="el-dropdown-link">筛选<i class="fa fa-filter"></i></span>
			</el-dropdown>
		</div>
		<div class="check-btn">
			<button class="btn">12.12</button>
			<button class="btn">新品</button>
			<button class="btn">品牌</button>
			<button class="btn">版型</button>
		</div>
	</div>

</template>

<script>
</script>

<style>
	.check-area {
		height: 44px;
	}
	
	.check-btn {
		height: 50px;
		padding: 10px 0px;
		border-bottom: 1px solid #CCCCCC;
	}
	
	.check-btn .btn {
		width: 20%;
		margin-left: 3%;
		border-radius: 20px;
	}
	
	.el-dropdown,
	.el-dropdown-menu {
		width: 25%;
		line-height: 44px;
		text-align: center;
		border-bottom: 1px solid #CCCCCC;
		border-top: 1px solid #CCCCCC;
	}
	
	.fa-sort-down,
	.fa-sort-up,
	.fa-filter,
	.fa-check
	{
		color: #E93B3D;
	}
</style>