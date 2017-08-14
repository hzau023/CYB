<template>
	<div>
		<div class="homeHeader">
			<div class="homeHeader_left" @click="goProIfy"></div>
			<p class="homeHeader_title">茶叶帮</p>
			<div class="homeHeader_right" @click="toCart"></div>
		</div>
		
	</div>
	
</template>

<script>
	import Router from 'vue-router'
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			goProIfy(){
				this.$router.push('proify')
			},
			toCart(){
				this.$router.push('/cart')
			}
		}
	}
</script>

<style land="SCSS">
	.homeHeader{
		background: red;
		height: 0.45rem;
		width: 3.75rem;
		padding: .1rem 0.15rem 0 .15rem;
		display: flex;
		justify-content: space-between;
	}
	.homeHeader_title{
		color: white;
		font-size: 0.18rem;
	}
	.homeHeader_left{
		width: 0.30rem;
		height: 0.30rem;
		background:red url("http://www.chayebang.com.cn/mobile/themesmobile/68ecshopcom_mobile/images/pub_flow.png") 
						no-repeat -0.1rem -.1rem;
		background-size: 0.50rem;
	} 
	.homeHeader_right{
		width: .3rem;
		height:.3rem;
		background:red url("http://www.chayebang.com.cn/mobile/themesmobile/68ecshopcom_mobile/images/pub_flow.png") 
						no-repeat -0.1rem -.5rem;
		background-size: 0.50rem;
	}
	
</style>