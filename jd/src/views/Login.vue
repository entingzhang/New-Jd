<template>
	<div class="login-page">
		<top-bar><b>京东登录</b></top-bar>
		<div class="login-name">
			<input placeholder="邮箱 / 用户名 / 以验证手机" type="text" v-model="name"></input>
			<i class="fa fa-remove"></i>
		</div>
		<div class="login-pass">
		<input placeholder="请输入密码" type="password" v-model="pwd" @change="login"></input>
		<i class="fa fa-remove"></i>
		<i class="fa fa-eye"></i><i class="fa fa-eye-slash"></i>
		</div>
		<el-row>
			<el-button type="danger" :class="{'change':loginEnable}" @click="login" round>登录</el-button>
		</el-row>
		<div id="loadingToast" :class="{'toast-hidden':loading}">
			<div class="weui-mask_transparent"></div>
			<div class="weui-toast">
				<i class="weui-loading weui-icon_toast"></i>
				<p class="weui-toast__content">登录中</p>
			</div>
		</div>

		<div id="toast" class="toast-hidden">
			<div class="weui-mask_transparent"></div>
			<div class="weui-toast">
				<i class="weui-icon-success-no-circle weui-icon_toast"></i>
				<p class="weui-toast__content">已完成</p>
			</div>
		</div>
	</div>
</template>

<script>
	import TopBar from "@/components/TopBar.vue";
	import axios from "axios";
	import qs from "qs";
	export default {
		data() {
			return {
				loginUrl: "http://api.niyinlong.com/index.php/api/index/login",
				name: '',
				pwd: '',
				loading: 'ture',
				from: '',
				check:'false'
			};
		},
		components: {
			TopBar
		},
		props: [],
		methods: {
			login() {
				if(this.loginEnable) {
					this.loading = false;
					axios.post(this.loginUrl, qs.stringify({
						name: this.name,
						pwd: this.pwd,
					})).then(res => {
						alert(res.data.msg);
						if(res.data.code > 0) {
							this.$store.commit('setLoginState', true);
							switch(this.from){
								case '/cart':this.$router.push('/cart');break;
								case '/allbig':this.$router.push('/allbig');break;
								default:this.$router.push('/');break;
							}
						}
						this.loading = true;
					}).catch(err => {
						this.loading = true;
					});
				}
			}
		},
		computed: {
			loginEnable() {
				if(this.name.length > 4 && this.pwd.length > 4) {
					return true;
				} else {
					return false;
				}
			}

		},
		watch: {

		},
		created() {
			this.from = this.$route.query.from;

		}
	}
</script>

<style scoped="scoped">
	.login-name,
	.login-pass{
		width: 80%;
		margin: 30px 10%;
		height: 50px;
		border-bottom:1px solid #CCCCCC;
	}
	input {
		width: 85%;
		height: 45px;
		border: 0px;
	}
	i.change{
		display: none;
	}
	.el-row {
		width: 80%;
		margin: 0 10%;
	}
	
	.el-button {
		width: 100%;
		background-color: #ffcaba;
		border-color: #ffcaba;
	}
	
	.change {
		background-color: #ff4f18;
		border-color: #ff4f18;
	}
	
	.toast-hidden {
		opacity: 0!important;
		display: none!important;
	}
</style>