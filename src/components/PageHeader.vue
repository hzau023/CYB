<template>
	<div>
		<div class="pageHeader">
			<div class="pageHeader_left" @click='goback'></div>
			<p class="pageHeader_title" v-if="headMsgShow">{{headMsg}}</p>
			<slot></slot>
			<div class="pageHeader_right" @click="showLittleNav" v-if="navShow"></div>
		</div>
		<div class="littleNav" v-if='show'>
			<div class="tag">
				<i class="iconfont icon-xiaosanjiao"></i>
			</div>
			<ul>
				<li @click="toHome"><i class="iconfont icon-shouye"></i>首页</li>
				<li @click="toProIfy"><i class="iconfont icon-fenlei"></i>分类</li>
				<li @click="toCart"><i class="iconfont icon-gouwucheshoppingcart"></i>购物车</li>
				<li class="lastLi" @click="toUser"><i class="iconfont icon-wode"></i>我的</li>
			</ul>		
		</div>
	</div>
	
</template>

<script>
	export default {
		data(){
			return{
				'show':false,
				headMsg:"",
				navShow:true,
				headMsgShow:true
			}
		},
		methods:{
			goback(){
				if(this.$route.path=="/login"){
					this.$router.push('/')
				}else{
					history.back()
				}
			},
			showLittleNav(){
				this.show=!this.show
			},
			toHome(){
				this.$router.push('/')
			},
			toProIfy(){
				this.$router.push('/proify')
			},
			toUser(){
				this.$router.push('/user')
			},
			toCart(){
				this.$router.push('/cart')
			}
		},
		beforeMount(){
			if(this.$route.path=="/register"){
				this.headMsg="用户注册"
				this.navShow=false
			}
			if(this.$route.path=="/proify"){
				this.headMsg="全部分类"
			}
			if(this.$route.path=="/login"){
				this.headMsg="会员登录"
				this.navShow=false
			}
			if(this.$route.path=="/loginerr"){
				this.headMsg="系统提示";
				this.navShow=false
			}
			if(this.$route.path=="/cart"){
				this.headMsg="购物车";
			}
			if(this.$route.path=="/goods"){
				this.headMsgShow=false
			}
		}
	}
</script>

<style>
	.goodHeadCart{
		font-size: 0.3rem;
		display: inline-block;
		margin: 0 0 0 .26rem;
	}
	.goodHead{
		width: 2.04rem;
		height: 0.35rem;
		float: left;
		margin-left: .16rem;
	}
	.pageHeader{
		background: white;
		height: 0.45rem;
		padding: .1rem 0rem 0 .15rem;
	}
	.pageHeader_title{
		color: black;
		font-size: 0.18rem;
		float: left;
		margin-left: 1.1rem;
	}
	.pageHeader_left{
		width: 0.3rem;
		height: 0.3rem;
		background:url("http://www.chayebang.com.cn/mobile/themesmobile/68ecshopcom_mobile/images/top.png") 
						no-repeat -0.05rem 0rem;
		background-size: 0.25rem;
		float: left;
	}
	.pageHeader_right{
		float: right;
		width: .3rem;
		height:.3rem;
		background:url("http://www.chayebang.com.cn/mobile/themesmobile/68ecshopcom_mobile/images/top.png") 
						no-repeat 0rem -0.35rem;;
		background-size: 0.25rem;
	}
	.littleNav{
		position: absolute;
		top: 0.35rem;
		right: 0;
		width: 1rem;
		z-index: 300;
	}
	.littleNav .tag{
		height: 0.13rem;
		width: 1rem;
		padding-left:0.7rem ;
	}
	.littleNav .tag .icon-xiaosanjiao{
		font-size: 0.2rem;
		color:rgba(27,27,27,0.9);
		
	}
	.littleNav ul{
		width: 1rem;
		height: 1.63rem;
		background: rgba(27,27,27,0.9);
	}
	.littleNav li{
		color: white;
		height: 0.4rem;
		line-height: 0.4rem;
		padding-left: 0.07rem;
		border-bottom:1px solid white ;
	}
	.littleNav .lastLi{
		border: none;
	}
	.littleNav li i{
		font-size: 0.18rem;
		margin-right: 0.07rem;
	}
</style>