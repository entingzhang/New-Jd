<template>
	<div class="container">
		<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#E3E4E5" text-color="#9999AD" active-text-color="#E2231A">
			<el-menu-item index="1">京东首页</el-menu-item>
			<el-submenu index="2">
				<template slot="title"><i class="fa fa-map-marker">&nbsp;&nbsp;我的定位</i></template>
				<el-menu-item index="2-1">北京</el-menu-item>
				<el-menu-item index="2-2">广州</el-menu-item>
				<el-menu-item index="2-3">天津</el-menu-item>
				<el-submenu index="2-4">
					<template slot="title">上海</template>
					<el-menu-item index="2-4-1">浦东新区</el-menu-item>
					<el-menu-item index="2-4-2">徐汇</el-menu-item>
					<el-menu-item index="2-4-3">静安</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-menu-item index="3"><i class="fa fa-user"></i>小姐姐的京东</el-menu-item>
			<el-menu-item index="4"><i class="fa fa-list">&nbsp;&nbsp;我的订单</i></el-menu-item>
			<el-submenu index="5">
				<template slot="title"><i class="fa fa-home">&nbsp;&nbsp;我的京东</i></template>
				<el-menu-item index="5-1">待处理订单</el-menu-item>
				<el-menu-item index="5-2">返修订换货</el-menu-item>
				<el-menu-item index="5-3">降价商品</el-menu-item>
				<el-menu-item index="5-4">我的京豆</el-menu-item>
				<el-menu-item index="5-5">我的白条</el-menu-item>
			</el-submenu>
			<el-menu-item index="6"><i class="fa fa-user-circle-o">&nbsp;&nbsp;京东会员</i></el-menu-item>
			<el-submenu index="7">
				<template slot="title"><i class="fa fa-group">&nbsp;&nbsp;企业采购</i></template>
				<el-menu-item index="7-1">企业购</el-menu-item>
				<el-menu-item index="7-2">礼品卡</el-menu-item>
				<el-menu-item index="7-3">工艺品</el-menu-item>
			</el-submenu>
			<el-submenu index="8">
				<template slot="title"><i class="fa fa-user-plus">&nbsp;&nbsp;客服服务</i></template>
				<el-submenu index="8-1">
					<template slot="title">客户</template>
					<el-menu-item index="8-1-1">帮助中心</el-menu-item>
					<el-menu-item index="8-1-2">电话客服</el-menu-item>
					<el-menu-item index="8-1-3">在线客服</el-menu-item>
				</el-submenu>
				<el-submenu index="8-2">
					<template slot="title">商户</template>
					<el-menu-item index="8-2-1">合作招商</el-menu-item>
					<el-menu-item index="8-2-2">商家后台</el-menu-item>
					<el-menu-item index="8-2-3">商家帮助</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-submenu index="9">
				<template slot="title"><i class="fa fa-mobile-phone">&nbsp;&nbsp;手机京东</i></template>
				<el-menu-item index="9-1"><img src="../../public/images/logo21.gif" /></el-menu-item>
			</el-submenu>
		</el-menu>
		<navbar>
			<navbar-form left>
				<a class="navbar-brand" slot="brand" href="#">我的京东</a>
				<dropdown append-to-body>
					<btn class="dropdown-toggle">首页&nbsp;&nbsp;<i class="fa fa-angle-down"></i></btn>
					<template slot="dropdown">
						<li>
							<a role="button">订单中心</a>
						</li>
						<li>
							<a role="button">我的钱包</a>
						</li>
						<li>
							<a role="button">我的关注</a>
						</li>
						<li>
							<a role="button">我的活动</a>
						</li>
						<li>
							<a role="button">客户服务</a>
						</li>
					</template>
				</dropdown>
				<!-- dropdown with append-to-body + menu-right -->
				<dropdown append-to-body menu-right>
					<btn class="dropdown-toggle">账户内容&nbsp;&nbsp;<i class="fa fa-angle-down"></i></btn>
					<template slot="dropdown">
						<li>
							<a role="button">个人信息</a>
						</li>
						<li>
							<a role="button">账户安全</a>
						</li>
						<li>
							<a role="button">收货地址</a>
						</li>
						<li>
							<a role="button">快捷支付</a>
						</li>
						<li>
							<a role="button">账户绑定</a>
						</li>
					</template>
				</dropdown>
				<!-- dropdown with append-to-body + dropup -->
				
				<dropdown append-to-body dropup>
					<btn class="dropdown-toggle">
						消息&nbsp;&nbsp;<i class="fa fa-angle-down"></i>
					</btn>
					<template slot="dropdown">
						<li>
							<a role="button">系统消息</a>
						</li>
						<li>
							<a role="button">私信</a>
						</li>
						<li>
							<a role="button">消息设置</a>
						</li>
					</template>
				</dropdown>
			</navbar-form>
			<navbar-form right>
				<div class="form-group">
					<input type="text" class="form-control" placeholder="Search">
				</div>
				<btn>搜索</btn>
				<span>&nbsp&nbsp</span>
				<dropdown ref="dropdown">
					<btn type="primary" class="dropdown-toggle "><i class="fa fa-shopping-cart">&nbsp;&nbsp;我的购物车</i><span class="caret"></span></btn>
					<template slot="dropdown">
						<li>
							<a href="/cart" role="button">我的订单1</a>
						</li>
						<li>
							<a href="/cart" role="button">我的订单2</a>
						</li>
						<li>
							<a href="/cart" role="button">我的订单3</a>
						</li>
					</template>
				</dropdown>
			</navbar-form>
		</navbar>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1'
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style scoped="scoped">
	.form-control {
		border: 1px solid #E2231A;
		border-radius: 0px;
	}
	.el-submenu__title{
		color:#E2231A ;
	}
	button {
		background-color: #E2231A;
		border: 1px solid #E2231A;
		color: #FFFFFF;
		border-radius: 0px;
	}
	.navbar-brand{
		line-height: 10px;
	}
	/*.btn-group.dropdown open{
		background-color: #E2231A;
		
	}*/
</style>