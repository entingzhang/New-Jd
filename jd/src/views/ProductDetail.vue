<template>
	<div>
		<top-bar>
			<ul>
				<li></li>
			</ul>
		</top-bar>
	</div>
</template>

<script>
	import TopBar from "@/components/TopBar.vue";
	export default {
		data() {
			return {
				nav: [{
					ref: 'product',
					title: '商品'
				},{
					ref: 'comment',
					title: '评价'
				},{
					ref: 'detail',
					title: '详情'
				},{
					ref: 'recommend',
					title: '推荐'
				}]
			}
		},
		components: {
			TopBar
		}
	}
</script>

<style>

</style>