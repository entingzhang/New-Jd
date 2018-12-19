<template>
	<div>
		<!--这个页面暂时还 没什么作用-->
	<button @click="$router.push('/')">首页</button>
	<button @click="$router.push('/listli')">分类</button>
	<!--<button @click="$router.push({name:'searcch',params:{userId123},query:{plan:'private'}})">搜索name</button>
	<button @click="$router.push({path:'searcch',params:{userId123},query:{plan:'private'}})">搜索path</button>-->
	<button>购物车</button>
	<button>个人中心</button>
	
	<router-link to='/'>首页</router-link>
	<router-link :to="{path:'/listli'}">分类</router-link>
	<router-link :to="{name:'search'}">搜索</router-link>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
</style>