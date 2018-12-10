<template>
	<div class="allbig">
		<header>
			<router-view name="header"></router-view>
		</header>
		<div class="main">
			<div class="aside">
				<router-view name="aside"></router-view>
			</div>
			<div class="content">
				<router-view name="conenttop" class="conttop"></router-view>
				<router-view name="conentright" class="contright"></router-view>
				<router-view class="contmain"></router-view>
			</div>
		</div>

	</div>
</template>

<script>
</script>

<style scoped="scoped">
	html,
	body,
	#app,
	.allbig,
	.main {
		height: 100%;
	}
	
	.allbig {
		height: 100%;
		width: 100%;
	}
	
	.allbig header {
		height: 100%;
		width: 100%;
		position: fixed;
		top: 0px;
		left: 0px;
	}
	
	.allbig .main {
		/*padding-top: 60px;*/
		box-sizing: border-box;
	}
	
	.allbig .aside {
		width: 260px;
		height: 100%;
		position: fixed;
		top: 128px;
		left: 0px;
		box-sizing: border-box;
	}
	
	.allbig .content {
		height: 100%;
		width: 100%;
		padding-left: 260px;
		padding-top: 128px;
		box-sizing: border-box;
		overflow-x: auto;
		overflow-y: auto;
	}
	
	.content .conttop {
		width: 100%;
		height: 200px;
		position: fixed;
		top: 128px;
		left: 260px;
	}
	
	.content .contright {
		width: 20%;
		position: fixed;
		right: 70px;
		top: 330px;
		height: 300px;
	}
	
	.content .contmain {
		position: fixed;
		margin-top: 200px;
		width: 80%;
	}
</style>