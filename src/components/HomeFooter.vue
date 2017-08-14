<template>
	<div class="homeFooter">
		<li @click="toHome"><i class="iconfont icon-shouye"></i><p>首页</p></li>
		<li><i class="iconfont icon-dingwei"></i><p>客服</p></li>
		<li @click="toProIfy"><i class="iconfont icon-fenlei"></i><p>分类</p></li>
		<li @click="toCart"><i class="iconfont icon-gouwucheshoppingcart"></i><p>购物车</p></li>
		<li @click="toUser"><i class="iconfont icon-wode"></i><p>我的</p></li>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			toHome(){
				this.$router.push('/')
			},
			toUser(){
				this.$router.push('/user')
			},
			toProIfy(){
				this.$router.push('/proify')
			},
			toCart(){
				this.$router.push('/cart')
			}
		}
	}
</script>

<style>
	.homeFooter{
		height: .5rem;
		width: 3.75rem;
		padding-top: 0.05rem;
		background:rgba(238,238,238,0.9);
		display: flex;
		justify-content: space-around;
		
	}
	.homeFooter li{
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		flex: 1;
		position: relative;
	}
	.homeFooter li i{
		font-size: 0.22rem!important;
	}
	.homeFooter li p{
		margin-top: ;
		font-size: 0.12rem;
	}
</style>