<template>
	<div>
		<pageHeader>
			<div class="goodLook" @click="change('goodLook')" :class="{goodActive:goodPage=='goodLook'?'goodActive':''}">商品</div>
			<div class="goodDet" @click="change('goodDet')"  :class="{goodActive:goodPage=='goodDet'?'goodActive':''}">详情</div>
			<div class="goodMsg" @click="change('goodMsg')"  :class="{goodActive:goodPage=='goodMsg'?'goodActive':''}">评价</div>
			<i class="iconfont icon-gouwucheshoppingcart goodHeadCart" @click="toCart"></i>
			<div class="cartNum1" v-show="cartNum==0?false:true">{{cartNum}}</div>
		</pageHeader>
		<div class="goods">
			<component :is="goodPage"></component>
		</div>
		<div class="goodFooter">
			<div class="toHome" @click="toHome"><i class="iconfont icon-shouye"></i><p>首页</p></div>
			<div class="tokefu"><i class="iconfont icon-dingwei"></i><p>客服</p></div>
			<div class="toshouchang"><i class="iconfont icon-shoucang"></i><p>收藏</p></div>
			<div class="toAddCart" @click="addCart">加入购物车</div>
			<div class="nowBuy" @click="addCart">立即购买</div>
		</div>
		
		<div class="goodChange">
			<div class="goodChangeDiv1">	
				<div class="goodChangeImg"><img src="http://www.chayebang.com.cn/images/201612/thumb_img/379_thumb_G_1482914881976.jpg"/></div>
				<div class="goodChangePrice">
					<p>价格：550</p>
					<p>库存：00000件</p>
				</div>
				<div class="goodChangeNo" @click="goodChangeNo">
					<i class="iconfont icon-chuyidong"></i>
				</div>
			</div>
			<div class="goodChangeDiv2">
				<p>购买数量</p>
				<div class="goodChangeNumBox">
					<div class="minus" @click="toMinus"><i class="iconfont icon-jian"></i></div>
					<input type="text" id=""  class="amount" :value="goodNum"/>
					<div class="add" @click="toAdd"><i class="iconfont icon-jia"></i></div>
				</div>
			</div>
			<div class="goodChangeBtn">提交</div>
			
		</div>
		
		
	</div>
</template>

<script>
	const PageHeader = r => require.ensure([], () => r(require('@/components/PageHeader.vue')), 'PageHeader')
	import _ProData from '../../static/ProData.json'
	
	var goodMsg={
		template:
		`<div class="noMsg">暂时还没有任何用户评论</div>`
	}
	var goodDet={
		template:
		`<div class="goodDetImg">
			<p v-for="img in imgs"><img :src="beSrc+img"/></p>
		</div>`,
		data(){
			return {
				paroData:_ProData,
				goodName:"",
				imgs:[],
				beSrc:"http://www.chayebang.com.cn/"
			}
		},
		beforeMount(){
			var _goodName=JSON.parse( localStorage.getItem("goodName"))||{}
			this.goodName=_goodName
			var paroData=this.paroData
			var imgObj=((paroData[_goodName.proIdx]).pro)[_goodName.goodName].imgs
			this.imgs=imgObj
		}
	}
	var goodLook={
		template:
			`<div :data-name="goodName" class="goodProBox">	
				<div class="swiper-container">
				  	<div class="swiper-wrapper gunImgBox">
				    	<li class="swiper-slide " v-for="gImg in proObj.gunImgs"><img :src="beSrc+gImg" class="gunImg"/></li>
				    	
				  	</div>
				  	<div class="swiper-pagination"></div>
				</div>
				<div class="goodName">
					<p>{{proObj.name}}</p>
					<div><i class="iconfont icon-gouwucheshoppingcart"></i><span>分享</span></div>
				</div>
				<div class="mail">
					<div class="mailPrice">{{proObj.newPrice}}</div>
					<div class="mailIf">包邮</div>
				</div>
				<div class="goodActivePriceBox">
					<div>价格:0</div>
					<div>赠送积分：0</div>
				</div>
				<div class="goodAnother">
					<div>折扣：0折</div>
					<div>0人评价</div>
					<div>0人已购</div>
				</div>
				<div class="memberPrice">
					<div>会员价格等级</div>
					<div>></div>
				</div>
				<div class="memberPrice">
					<div>产品参数</div>
					<div>></div>
				</div>
				<div class="memberPrice">
					<div>查看自提点</div>
					<div>></div>
				</div>
			</div>`,
		data(){
			return {
				paroData:_ProData,
				goodName:"",
				beSrc:"http://www.chayebang.com.cn/",
				proObj:""
				
			}
		},
		beforeMount(){
			var paroData=this.paroData
			var _goodName=JSON.parse( localStorage.getItem("goodName"))||{}
			this.goodName=_goodName.goodName
			var proObj=((paroData[_goodName.proIdx]).pro)[_goodName.goodName]
			this.proObj=proObj
		},
		mounted(){
			var mySwiper = new Swiper('.swiper-container',{
				paginationClickable :true,
				loop : true,
				pagination : '.swiper-pagination',
				autoplay : 2000
			})
		}
	}
	
	
	
	
	export default{
		data(){
			return{
				goodPage:'goodLook',
				imgSrc:"http://www.chayebang.com.cn/",
				cartNum:1,
				goodNum:1
			}
			
		},
		
		
		components:{
			'pageHeader':PageHeader,
			'goodLook':goodLook,
			'goodDet':goodDet,
			'goodMsg':goodMsg
		},
		methods:{
			change(val){
				this.goodPage=val
			},
			toHome(){
				this.$router.push("/")
			},
			toCart(){
				this.$router.push("/cart")
			},
			addCart(){
				$(".goodChange").slideDown(600)
			},
			goodChangeNo(){
				$(".goodChange").slideUp(600)
			},
			toMinus(){
				
			},
			toAdd(){
				
			}
		},
		beforeMount(){
			var arr=JSON.parse( localStorage.getItem("cartPro"))||[] 
			this.cartPro=arr
			this.cartNum=arr.length
		}
	}
	
	

</script>

<style>
	.goodChangeBtn{
		background: red;
		color: white;
		width: 100%;
		text-align: center;
		line-height: .45rem;
		bottom: 0;
	}
	.goodChangeNumBox div{
		width: .3rem;
		height: .3rem;
		border: 1px solid #ccc;
		text-align: center;
		line-height: .3rem;
		color: red;
	}
	.goodChangeNumBox input{
		width: .42rem;
		border: 1px solid #ccc;
		height: .3rem;
		text-align: center;
		color: #999;
	}
	
	.goodChangeNumBox{
		display: flex;
		margin-top: .1rem;
	}
	.goodChangeDiv2{
		height: 3.2rem;
		padding-left: 0.15rem;
	}
	.goodChangeDiv2 p{
		font-size: .16rem;
		width: 100%;
		line-height: .2rem;
		color: #666;
	}
	.goodChangeDiv1{
		height: 1.4rem;
	}
	.goodChangeNo{
		text-align: center;
		padding-top: .12rem;
	}
	.goodChangeNo i{
		font-size: .3rem;
		color: #666;
	}
	.goodChangePrice{
		width: 1.66rem;
		height: 0.43rem;
		float: left;
		padding-top: .12rem;
	}
	.goodChangePrice p{
		float: left;
		width: 1.66rem;
		padding-left: .12rem;
		line-height: .24rem;
		font-size: .12rem;
		color: #666;
	}
	.goodChangeImg{
		margin: -0.15rem 0 0 .15rem;
		border: 1px solid #e5e5e5;
		padding: 0.05rem;
		height: 1.37rem;
		width: 1.37rem;
		background: white;
		float: left;
	}
	.goodChangeImg img{
		height: 1.25rem;
		width: 1.25rem;
	}
	.goodChange{
		background: white;
		display: none;
		position: absolute;
		bottom: 0;
		width: 3.75rem;
		z-index: 100;
		height: 5.04rem;
		
	}
	.cartNum1{
		width: .12rem;
		height: .12rem;
		font-size: .1rem;
		background: red;
		color: white;
		position: absolute;
		top: 0.12rem;
		border-radius:.12rem ;
		text-align: center;
		line-height: .12rem;
		right: 0.53rem;
		z-index: 10;
	}
	.gunImg{
		width:3.75rem;
	}
	.gunImgBox{
		height: 3.75rem;
	}
	.noMsg{
		height: .5rem;
		margin-top: 1rem;
		text-align: center;
		line-height: .5rem;
		font-size: .14rem;
		color: #666;
	}
	.goodDetImg img{
		width: 3.75rem;
	}
	.goodActive{
		border-bottom: 2px solid #dd2726;
	}
	.goods{
		height: 5.72rem!important;
		overflow: auto;
	}
	.goodFooter{
		height: .5rem;
		display: flex;
		background: #f8f8f8;
	}
	.goodFooter div{
		height: .5rem;
	
	}
	.toHome,.tokefu,.toshouchang{
		width: .5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-right:1px solid #eee ;
	}
	.goodFooter i{
		font-size: .18rem;
		color: #666;
	}
	.goodFooter p{
		font-size: .12rem;
		color: #6666;
	}
	.toAddCart,.nowBuy{
		width: 1.12rem;
		line-height:.5rem;
		text-align: center;
		color: white;
	}
	.toAddCart{
		background: #ff9c00;
	}
	.nowBuy{
		background:#dd2726;
	}
	
	.memberPrice{
		margin: 0.06rem 0 .06rem 0;
		height: .4rem;
		background: white;
		display: flex;
		justify-content: space-between;
		padding:  0 .1rem 0 .1rem;
	}
	
	.memberPrice div{
		line-height: .4rem;
		font-size: .12rem;
		color: #666;
	}
	body{
		background: #eee;
	}
	.goodAnother{
		height: .3rem;
		display: flex;
		justify-content: space-between;
		padding: 0 .1rem 0 .1rem;
		background: white;
		
	}
	.goodAnother div{
		font-size: .14rem;
		color: #666;
		line-height: .3rem;
	}
	.goodActivePriceBox{
		height: .3rem;
		padding-left:.1rem ;
		background: white;
	}
	.goodActivePriceBox div:nth-child(1){
		color: #666;
		font-size: .12rem;
		line-height: .3rem;
		float: left;
	}
	.goodActivePriceBox div:nth-child(2){
		float: left;
		padding: 0 .06rem 0 .06rem;
		color: white;
		background: red;
		font-size: .12rem;
		line-height: .15rem;
		margin: .06rem 0 0 .06rem;
	}
	.mail{
		width: 3.75rem;
		height: .33rem;
		padding-left: .1rem;
		background: white;
	}
	.mail div{
		float: left;
		line-height: .33rem;
		text-align: center;
	}
	.mailPrice{
		font-size: .24rem;
		color: red;
	}
	.mailIf{
		line-height: .15rem;
		color: white;
		background: red;
		font-size: .12rem;
		line-height: .15rem!important;
		margin: 0.1rem 0 0 0.1rem;
		padding: 0 .06rem 0 .06rem;
	}
	.goodName{
		height: 0.5rem;
		padding:.08rem 0 0 .1rem  ;
		background: white;
	}
	.goodName p{
		width: 3rem;
		height: 0.4rem;
		border-right:1px solid #ccc;
		padding-right: 0.3rem;
		font-size: 0.16rem;
		float: left;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.goodName div{
		float: right;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: .65rem;
	}
	.goodName i{
		font-size: 0.24rem;
		color: #999;
	}
	.goodName span{
		font-size: .12rem;
		
	}
	.goodLook,.goodDet,.goodMsg{
		float: left;
		line-height: .33rem;
		width: .68rem;
		text-align: center;
		
	}
	.goodHeadCart{
		font-size: 0.3rem;
		display: inline-block;
		margin: 0 0 0 .26rem;
	}
	.goodLook{
		margin-left: .16rem;
		
	}
	.goodImgs{
		height: 3.75rem;
	}
	.swiper-pagination-bullet-active{
		background:red!important;
	}
	.swiper-pagination-bullet{
		background: white;
	}
</style>