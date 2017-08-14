<template>
	<div class="userBOx">
		<div class="user">
			<div class="userHeader">
				<div class="userSet"><i class="iconfont icon-banshou001"></i><span>设置</span></div>
				<div class="userMid">
					<div class="headPort"></div>
					<div class="userName">{{id}}<i class="iconfont icon-wode"></i></div>
					<div class="userLevel">普通会员</div>
				</div>
			</div>
			<div class="userOrder">
				<div class="userOrderHeader">
					<span>全部订单</span>
					<span>查看全部订单 ></span>
				</div>
				<div class="userOrderImg">
					<li><i class="iconfont icon-daifukuan1"></i><p>待付款</p></li>
					<li><i class="iconfont icon-weibiaoti111"></i><p>待发货</p></li>
					<li><i class="iconfont icon-daishouhuo"></i><p>待收货</p></li>
					<li><i class="iconfont icon-complete"></i><p>已完成</p></li>
				</div>
			</div>
			<div class="userOrder">
				<div class="userOrderHeader">
					<span>我的资产</span>
					<span>全部资产/充值 ></span>
				</div>
				<div class="userOrderImg">
					<li><i class="iconfont icon-unie63a"></i><p>红包</p></li>
					<li><i class="iconfont icon-fukuan"></i><p>在线充值</p></li>
					<li><i class="iconfont icon-tixian-copy"></i><p>提现</p></li>
					<li><i class="iconfont icon-iconfontmjihuachongzhi"></i><p>储值卡</p></li>
				</div>
			</div>
			<div class="func1">
				<li>
					<div class="func1Img1Box">
						<div class="func1Img1">
							<i class="iconfont icon-fenxiao"></i>
						</div>
					</div>
					<div class="func1Text1">
						<span>我的分销</span>
						<span>查看分销信息 ></span>
					</div>
				</li>
				<li>
					<div class="func1Img1Box">
						<div class="func1Img1 func1Img2">
							<i class="iconfont icon-pingjia"></i>
						</div>
					</div>
					<div class="func1Text1">
						<span>评价/晒单</span>
						<span>查看评价/晒单 ></span>
					</div>
				</li>
				<li>
					<div class="func1Img1Box">
						<div class="func1Img1 func1Img3">
							<i class="iconfont icon-fenxiao"></i>
						</div>
					</div>
					<div class="func1Text1">
						<span>我的收藏</span>
						<span>商品收藏/店铺收藏 ></span>
					</div>
				</li>
				
			</div>
			<div class="func1">
				<li>
					<div class="func1Img1Box">
						<div class="func1Img1 func1Img4">
							<i class="iconfont icon-cf-c46"></i>
						</div>
					</div>
					<div class="func1Text1">
						<span>收货地址</span>
						<span>添加/修改 ></span>
					</div>
				</li>
				<li>
					<div class="func1Img1Box">
						<div class="func1Img1 func1Img5">
							<i class="iconfont icon-tuijian"></i>
						</div>
					</div>
					<div class="func1Text1">
						<span>我的推荐</span>
						<span>></span>
					</div>
				</li>
				<li>
					<div class="func1Img1Box">
						<div class="func1Img1 func1Img6">
							<i class="iconfont icon-liuyan-copy"></i>
						</div>
					</div>
					<div class="func1Text1">
						<span>我的留言</span>
						<span> ></span>
					</div>
				</li>
			</div>
			<li class="userEsc" @click="escUser">
				<div class="func1Img1Box">
					<div class="func1Img1 func1Img7">
						<i class="iconfont icon-caozuo_zhuxiao_tuichudenglu"></i>
					</div>
				</div>
				<div class="func1Text1">
					<span>注销登录</span>
					<span></span>
				</div>
			</li>
			
			<ul class="userChanggeBox">
		    	<li>{{id}}</li>
		    	<li>注册</li>
		    	<li>回顶部</li>
		   </ul>
		    <div class="regChanggeImg">
		    	<li><i class="iconfont icon-bangzhushouji"></i><p>客户端</p></li>
		    	<li><i class="iconfont icon-hongpingban"></i><p>触屏版</p></li>
		    	<li><i class="iconfont icon-diannaoban"></i><p>电脑版</p></li>
		    	
		    </div>
		    <div class="regFooter">© 2005-2017 茶叶帮 版权所有，并保留所有权利。</div>
		</div>
		<homeFooter></homeFooter>
	</div>
	
</template>

<script>
	const HomeFooter = r => require.ensure([], () => r(require('@/components/HomeFooter.vue')), 'HomeFooter')
	export default{
		data(){
			return {
				id:""
			}
		},
		components:{
			'homeFooter':HomeFooter
		},
		beforeCreate(){
			let arr=JSON.parse(localStorage.getItem("userData"))||[];
			if(arr.length==0){
				this.$router.push("/login")
			}
		},
		beforeMount(){
			let arr=JSON.parse(localStorage.getItem("userData"))||[];
			this.id=arr.id
		},
		methods:{
			escUser(){
				localStorage.removeItem("userData")
				this.$router.push("/login")
			}
		}
	}
</script>

<style>
	.userHeader{
		height: 1.1rem;
		background: #ff5101;
	}
	body,html{
		background: #eee;
	}
	.user{
		height: 6.17rem;
		overflow: auto;
		
	}
	.userSet{
		height: 0.3rem;
		text-align: right;
		line-height: 0.3rem;
		padding:0 0.16rem 0 0 ;
	}
	.userSet span {
		font-size: 0.14rem;
		color: white;
	}
	.icon-banshou001{
		font-size: 0.12rem;
		color: white;
	}
	.userMid{
		height: 0.6rem;
		padding-left:.1rem ;
	}
	.headPort{
		float: left;
		height: 0.6rem;
		width: 0.6rem;
		border-radius:0.6rem ;
		background:url("http://www.chayebang.com.cn/mobile/themesmobile/68ecshopcom_mobile/images/user/user68.jpg") no-repeat ;
		background-size:0.6rem ;
	}
	.userName{
		color: white;
		float: left;
		margin: 0.16rem 0 0 0.1rem;
		font-size: 0.20rem;
	}
	.userName i{
		margin-left: 0.08rem;
	}
	.userLevel{
		width: 0.68rem;
		height: 0.26rem;
		float: right;
		background: rgba(27,27,27,0.3);
		border-bottom-left-radius: 0.13rem;
		border-top-left-radius: 0.13rem;
		color: white;
		font-size: 0.14rem;
		text-align: center;
		line-height: 0.26rem;
		margin-top: 0.34rem;
	}
	.userOrder{
		height: 1.2rem;
		width: 3.75rem;
		margin-top: 0.1rem;
		background: white;
	}
	.userOrderHeader{
		padding:0 .1rem 0 .1rem;
		height: 0.5rem;
		line-height: 0.5rem;
		border-bottom:1px solid #eee ;
		display: flex;
		justify-content: space-between;
	}
	.userOrderHeader span{
		font-size: 0.14rem;
	}
	.userOrderHeader span:nth-child(2){
		color: #999999;
	}
	.userOrderImg{
		height: 0.7rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.userOrderImg li{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.userOrderImg li i{
		font-size: .24rem;
		color: #6d6d6d;
	}
	.userOrderImg li p{
		font-size: .12rem;
		color:#6d6d6d ;
	}
	.func1{
		margin-top: 0.1rem;
		height: 1.5rem;
		background: white;
		
	}
	.func1 li,.userEsc{
		height: .5rem;
		background: white;
	}
	.func1Img1Box{
		width: .55rem;
		height: .5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		float: left;
	}
	.func1 li .func1Img1,.userEsc .func1Img1{
		float: left;
		height: 0.24rem;
		width: 0.24rem;
		background: green;
		color:white;
		text-align: center;
		line-height: 0.24rem;
		border-radius:.03rem ;
	}
	.func1Text1{
		float: left;
		border-bottom:1px solid #eee ;
		height: 0.5rem;
		width:3.2rem ;
		padding:0 .1rem 0 .1rem;
		line-height: 0.5rem;
		border-bottom:1px solid #eee ;
		display: flex;
		justify-content: space-between;
	}
	.func1Text1 span{
		font-size: 0.14rem;
	}
	.func1Text1 span:nth-child(2){
		color: #999999;
	}
	.func1Img2{
		background: red!important;
	}
	.func1Img3{
		background: orange!important;
	}
	.func1Img4{
		background: blue!important;
	}
	.func1Img5{
		background:#FF5101!important;
	}
	.func1Img6{
		background: aqua!important;
	}
	.userEsc{
		margin-top:.1rem ;
	}
	.func1Img7{
		background: greenyellow!important;
	}
	.userChanggeBox{
		height: 0.46rem;
		width: 3.75rem;
		display: flex;
		justify-content: center;
		background: white;
		align-items: center;
	}
	.userChanggeBox li {
		border-right:1px solid #999999 ;
		height: 0.2rem;
		line-height: 0.2rem;
		text-align: center;
		font-size: 0.14rem;
		padding:0 .1rem 0.1rem;
		color: #82858a;
	}
	.userChanggeBox li:nth-child(3){
		border: none;
	}
	.regChanggeImg{
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		color: #82858a;
		background: white;
		height: 0.68rem;
		padding-top: 0.1rem;
	}
	.regChanggeImg li:nth-child(1),.regChanggeImg li:nth-child(2){
		margin-right: 0.4rem;
	}
	.regChanggeImg i{
		font-size: .34rem;
		
	}
	.regChanggeImg p{
		color: #82858a;
		font-size: 0.12rem;
	}
	.regFooter{
		height: 0.34rem;
		width: 3.75rem;
		color: #82858a;
		font-size: 0.12rem;
		text-align: center;
		line-height: 0.34rem;
		background: white;
	}
</style>