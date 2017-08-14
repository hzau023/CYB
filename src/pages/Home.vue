<template>
	<div>
		<homeHeader></homeHeader>
		<div class="home">
			<div class="swiper-container">
				<ul class="banner swiper-wrapper" >
					<li v-for="img in  BannerData" class="swiper-slide"><img :src="dataUrl+img.src" alt="" /></li>
				</ul>
				<div class="swiper-pagination"></div>
			</div>
			<div class="homeSearch" @click="toSearch">
				<div class="homeSearchText">请输入您所搜索的商品</div>
				<div class="homeSearchBtn">
					<img src="http://www.chayebang.com.cn/mobile/themesmobile/68ecshopcom_mobile/images/icosousuo.png"/>
				</div>
			</div>
			<div class="homeNav">
				<a  v-for='nav in navImg' class="navBox" :href="hash+nav.link" key='nav.id'>
					<img :src="dataUrl+nav.src"/>
					<div>{{nav.name}}</div>
				</a>
			</div>
			<div class="headLine">
				<div class="headLineImg">
					<img src="http://www.chayebang.com.cn/mobile/themesmobile/68ecshopcom_mobile/images/Headlines.jpg"/>
				</div>
				<div class="upAndDown swiper-container-up"> 
					<div class="swiper-wrapper upAndDownBox">
						<div class="swiper-slide toText">
							<div>
								<span>精品推荐</span>
								<span>更多></span>
							</div>
						</div>
						<div class="swiper-slide toPro">
							<li><img src="http://www.chayebang.com.cn/images/201707/thumb_img/439_thumb_G_1501401578458.jpg"/></li>
							<li><img src="http://www.chayebang.com.cn/images/201707/thumb_img/438_thumb_G_1501400094446.jpg"/></li>
							<li><img src="http://www.chayebang.com.cn/images/201707/thumb_img/437_thumb_G_1501395952143.jpg"/></li>
						</div>
						<div class="swiper-slide toRed">
							<span>推荐</span>
							<span>ecshop开发中心官方微信开通...</span>
						</div>
					</div>
				</div>
			</div>
			<div class="midBanner">
				<img src="http://www.chayebang.com.cn/mobile/data/afficheimg/1483842719657582509.jpg" />
			</div>
			<proList :proData="proData"></proList>
			<div class="goodsd" @click="toclick">————精品推荐————</div>
			<goodPro :goodPro="goodPro" v-if='show'></goodPro>
			
		</div>
		<homeFooter></homeFooter>
		
	</div>
	
</template>

<script>
	import _ProData from '../../static/ProData.json'
	import _GoodPro from '../../static/GoodPro.json'
	const HomeHeader = r => require.ensure([], () => r(require('@/components/HomeHeader.vue')), 'Header')
	const HomeFooter = r => require.ensure([], () => r(require('@/components/HomeFooter.vue')), 'HomeFooter')
	const ProList = r => require.ensure([], () => r(require('@/components/ProList.vue')), 'ProList')
	const GoodPro = r => require.ensure([], () => r(require('@/components/GoodPro.vue')), 'GoodPro')
	export default {
		data(){
			return {
				proData:_ProData,
				goodPro:_GoodPro,
				show:false,
				hash:"#",
				dataUrl:"http://www.chayebang.com.cn/mobile/",
				BannerData:[
					{src:"data/afficheimg/1481943693844464823.jpg"},
					{src:"data/afficheimg/1482290163783924599.jpg"},
					{src:"data/afficheimg/1481853285838755959.jpg"}
				],
				navImg:[
					{src:"images/201603/1458379366066881920.png",name:"商品分类",link:"/proify",id:1},
					{src:"images/201603/1458379393020351679.png",name:"团购活动"},
					{src:"images/201603/1458379414416900416.png",name:"积分兑换"},
					{src:"images/201603/1458379366066881920.png",name:"优惠活动"},
					{src:"images/201603/1458379450725165370.png",name:"品牌街"},
					{src:"images/201603/1458379473071020374.png",name:"购物车",link:"/cart",id:5},
					{src:"images/201603/1458379492296814740.png",name:"个人中心",link:"/user",id:7},
					{src:"images/201605/1463227637417376339.png",name:"附近商店"},
					{src:"images/201605/1463231672647836010.png",name:"预售活动"},
					{src:"images/201605/1463227653885965238.png",name:"拍卖活动"}
				]
			}
		},
		components:{
			'homeHeader':HomeHeader,
			'homeFooter':HomeFooter,
			'proList':ProList,
			'goodPro':GoodPro
		},
		methods:{
			toSearch(){
				this.$router.push("/search")
			},
			toclick(){
				this.show=true
			}
		},
		mounted(){
			var mySwiper = new Swiper('.swiper-container',{
				paginationClickable :true,
				loop : true,
				pagination : '.swiper-pagination',
				autoplay : 2000
			})
			var mySwiperUp = new Swiper('.swiper-container-up',{
				autoplay : 2000,
				speed:1000,
				loop : true,
				direction : 'vertical'
			})
		}
	}
	
</script>

<style>
	
	body{
		background: #eee;
	}
	.home{
		height: 5.72rem;overflow-y: auto;width: 3.75rem;
	}
	.banner li{
		background: white;opacity: 0.8;
	}
	.swiper-pagination-bullet-active{
		background: red;
	}
	.banner li img{
		
		height: 2rem;width: 3.75rem;
	}
	.homeSearch{
		width: 3.57rem;height: .57rem;padding:.2rem 0 0 .18rem;background: white;
	}
	.homeSearchText{
		float: left;color: #999999;width: 2.9rem;height: .36rem;line-height: .36rem;
		font-size: .14rem;padding: 0 0 0 0.05rem;border: 1px solid #999999;
	}
	.homeSearchBtn{
		float: left;color: #999999;width:0.44rem;height: .36rem;border: 1px solid #999999;
		border-left:none ;
	}
	.homeSearchBtn img{
		width: 0.3rem;height: 0.3rem;margin:0.04rem 0 0 0.04rem;
	}
	.homeNav{
		height: 1.9rem;width: 3.75rem;display: flex;flex-flow: wrap;border-bottom: 1px solid #999999;
		background: white;
	}
	.navBox{
		width: 0.75rem;display: flex;flex-direction: column;justify-content: center;align-items: center;
	}
	.navBox img{
		width: 0.5rem;height: 0.5rem;
	}
	.navBox div{
		font-size: 0.12rem;margin-top: 0.05rem;color: black;
	}
	.headLine{
		background: white;
		height: 0.4rem;
		padding:0 0 0 0.1rem;
	}
	.headLineImg{
		margin-top: 0.05rem;
		float: left;
		height: 0.3rem;
		width: 0.57rem;
		border-right:1px solid #ccc;
		padding:0.05rem ;
	}
	.headLineImg img{
		height: 0.2rem;
	}
	.upAndDown{
		overflow: hidden;
		float: left;
		width: 3.08rem;
		height: 0.4rem;
	}
	.upAndDownBox{
		height: 0.4rem;
	}
	.toText{
		border-bottom: 1px solid #ccc;
	}
	.toText div{
		margin: 0.08rem 0 0 0.1rem;
		height: 0.24rem;
		border-left:2px solid red ;
		padding: 0 0 0 0.1rem;
		width: 2.8rem;
	}
	.toText div span:nth-child(1){
		font-weight: 900;
		font-size: .14rem;
	}
	.toText div span:nth-child(2){
		float:right ;
	}
	.toPro{
		display: flex;
	}
	.toPro li{
		margin-left: 0.2rem;
	}
	.toPro li img{
		height: 0.4rem;
		width: 0.7rem;
	}
	.toRed{
		padding: 0.1rem;
	}
	.toRed span:nth-child(1){
		display: inline-block;
		border: 1px solid red;
		border-radius:2px ;
		height: 0.2rem;
		width: 0.45rem;
		text-align: center;
		line-height: 0.2rem;
		font-size: 0.14rem;
		color: red;
	}
	
	.toRed span:nth-child(2){
		font-size: 0.14rem;
	}
	.midBanner img{
		height: 0.94rem;
		width: 3.75rem;
	}
	.goodsd{
		height: 0.5rem;
		width: 3.75rem;
		text-align: center;
		line-height: 0.5rem;
		color: #999999;
	}
</style>