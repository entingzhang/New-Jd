<template>
	<div class="comment">
		<div class="comment-title">
			<div class="pull-left">
				评价(400<i class="fa fa-plus"></i>)
			</div>
			<div class="pull-right">
				好评度99% <i class="fa fa-chevron-right"></i>
			</div>
			<div class="pull-left comment-area">
				<button>好评+</button>
				<button>时尚</button>
				<button>保暖</button>
				<button>舒服</button>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.comment{
		width: 500px;
		margin: 0 auto;
		list-style: none;
	}
	.fa{
		color: red;
	}
	button{
		width: 50px;
		height: 20px;
		margin-left: 5px;
		border-radius: 10px;
		border: 0;
		background-color: lightpink;
	}
	.comment-area{
		margin-top: 30px;
		margin-left: -60px;
	}
</style>