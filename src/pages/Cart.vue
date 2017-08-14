<template>
	<div>
		<pageHeader></pageHeader>
		<div v-if="pageShow">
			<div class="cartCon">
				<div class="cartHead">
					<input type="checkbox" @click="allCheck1" v-model="allCheck"/>
					<i class="iconfont icon-dianpu"></i>
					<span>店铺自营</span>
					<div @click="toProMount">{{ok?"完成":"编辑"}}</div>
				</div>
				<div class="proDetails" v-for="prod in cartPro" :data-name="prod.proName">
					<div class="proDetailscheckBOX">
						<input type="checkbox" class="proCheck" checked @click="toCheckPro"/>
					</div>
					<div class="proDetailsImgBOX">
						<img :src="proImg+(proData[prod.idx].pro)[prod.proName].src"/>
					</div>
					
					<div class="proDetailsText" v-show="!ok">
						<p class="proDetailsName">{{(proData[prod.idx].pro)[prod.proName].name}}</p>
						<p class="proDetailsIfy">{{prod.proTypeName}}{{prod.proTypeName?" : ":""}} {{prod.proType}}</p>
						<p class="proDetailsPrice">
							<span class="proDetailsNewPrice">{{(proData[prod.idx].pro)[prod.proName].newPrice}}</span>
							<span class="proDetailsOldPrice">{{(proData[prod.idx].pro)[prod.proName].oldPrice}}</span>
							<span class="nowNum"><i class="iconfont icon-chuyidong"></i><span class="pro_amout">{{prod.amount}} </span></span>
						</p>
					</div>
					<div v-show="ok">
						<div class="proDetailsAmountBox">
							<div class="minus" @click="toMinus"><i class="iconfont icon-jian"></i></div>
							<input type="text" id=""  class="amount" :value="prod.amount" :data-num="prod.amount" @input="change"/>
							<div class="add" @click="toAdd"><i class="iconfont icon-jia"></i></div>
						</div>
						<div class="proDetailsDelBox" @click="proDel">删除</div>
					</div>
				</div>
				
			</div>
			<div class="cartFoot">
				<div class="cartFootCheckBox">
					<input type="checkbox" v-model="allCheck" @click="allCheck1" checked/>
				</div>
				<div class="cartFootText">全选</div>
				<div class="cartFootCLear">去结算</div>
				<div class="cartFootPriceBox"><span>总计：</span><span class="totMoney"></span></div>
			</div>
		</div>
		<div v-if="!pageShow" class="nullBox">
			<div class="nullCart">
				<img src="http://www.chayebang.com.cn/mobile/themesmobile/68ecshopcom_mobile/images/flow/empty_cart.png" alt="" />
				<div>购物车还是空的</div>
			</div>
			<div @click="toHome" class="toHomeCart">马上逛逛</div>
		</div>
		
		
		
	</div>
</template>

<script>
	const PageHeader = r => require.ensure([], () => r(require('@/components/PageHeader.vue')), 'Login')
	import _ProData from '../../static/ProData.json'
	export default{
		data(){
			return{
				ok:false,
				pageShow:"",
				proData:_ProData,
				cartPro:[],
				proImg:"http://www.chayebang.com.cn/",
				allCheck:true,
				proChecked:true
			}
		},
		components:{
			'pageHeader':PageHeader
		},
		methods:{
			toProMount(){
				this.ok=!this.ok
			},
			toHome(){
				this.$router.push("/")
			},
			toMinus(e){
				var amountEle=$(e.target).parents(".proDetailsAmountBox").children(".amount")
				var num=amountEle.val()
				if(num==1){
					alert("数量不能小于1")
					var _amount=1
				}else{
					var _amount=--num
				}
				amountEle.val(_amount)
				this.num(_amount,e)
				this.totMoney()
			},
			toAdd(e){
				var amountEle=$(e.target).parents(".proDetailsAmountBox").children(".amount")
				var _name=$(e.target).parents(".proDetails")[0].dataset.name
				var num=amountEle.val()
				var _amount=++num
				amountEle.val(_amount)
				
				this.num(_amount,e)
				this.totMoney()
			},
			proDel(e){
				var $row=$(e.target).parents(".proDetails")
				var _name=$row[0].dataset.name
				var arr=JSON.parse( localStorage.getItem("cartPro"))||[]
				$(arr).each(function(idx,ele){
					if(_name==ele.proName){
						arr.splice(idx,1)
					}
				})
				$row.remove()
				localStorage.setItem("cartPro",JSON.stringify(arr))
				this.totMoney()
				if(arr.length==0){
					this.pageShow=false
				}
			},
			allCheck1(){
				this.allCheck=!this.allCheck
				$(".proCheck").prop("checked",this.allCheck)
				this.totMoney()
			},
			toCheckPro(e){
				var statu=$(e.target).prop("checked")
				if($('.proCheck:checked').length==$('.proCheck').length){
					this.allCheck=true
				}else{
					this.allCheck=false
				}
				this.totMoney()
			},
			change(e){
				var amountEle=$(e.target).parents(".proDetailsAmountBox").children(".amount")
				var _amount=amountEle.val()
				this.num(_amount,e)
				this.totMoney()
			},
			num(_amount,e){
				var _name=$(e.target).parents(".proDetails")[0].dataset.name
				var num=$(e.target).parents(".proDetails").find(".pro_amout").text(_amount)
				var cartPro=this.cartPro
				$(cartPro).each(function(idx,ele){
					if(_name==ele.proName){
						ele.amount=_amount
					}
				})
				localStorage.setItem("cartPro",JSON.stringify(cartPro))
			},
			totMoney(){
				var _totMoney=0;
				$('.proCheck:checked').each(function(idx,ele){
					var proPrice=$(ele).parents(".proDetails").find(".proDetailsNewPrice").text()
					var proAmount=$(ele).parents(".proDetails").find(".amount").val()
					 _totMoney+=proPrice*proAmount
				})
				$(".totMoney").text(_totMoney.toFixed(2))
			}
		},
		beforeMount(){
			var arr=JSON.parse( localStorage.getItem("cartPro"))||[]
			this.cartPro=arr
			if(arr.length==0){
				this.pageShow=false
			}else{
				this.pageShow=true
			}
		},
		mounted(){
			this.totMoney()
		}
	}
</script>

<style>
	.cartCon{
		overflow: auto;
	}
	.nullBox{
		height: 6.22rem;
		background: #eee;
	}
	.nullCart{
		padding: .7rem 0 .5rem 0;
		height: 2.55rem;
		text-align: center;
	}
	.nullCart div{
		margin-top: 0.2rem;
		font-size: 0.2rem;
		color: #999;
	}
	.toHomeCart{
		background: red!important;
		height: 0.45rem;
		width: 2.25rem;
		color: white;
		border-radius:5px  ;
		text-align: center;
		line-height: .45rem;
		margin: auto;
	}
	.nullCart img{
		width: 1rem ;
		height: .95rem;
	}
	body{
		background: white;
	}
	.cartCon{
		height: 5.72rem;
	}
	.cartHead{
		height: .4rem;
		padding-left:.14rem ;
		line-height: .4rem;
		background: white;
	}
	.cartHead .icon-dianpu{
		margin-left: 0.18rem;
	}
	.cartHead span{
		font-size: 0.12rem;
	}
	.cartHead div{
		float: right;
		border-left:1px solid #eee ;
		height: .2rem;
		line-height: .2rem!important;
		width: .55rem;
		text-align: center;
		margin-top: .11rem;
	}
	.proDetails{
		height: 0.9rem;
		margin-bottom:0.08rem ;
		background: #f5f5f5;
	}
	.proDetailscheckBOX{
		line-height: 0.9rem;
		text-align: center;
		width: .4rem;
		float: left;
	}
	.proDetailsImgBOX{
		width: 0.8rem;
		float: left;
		padding-top: 0.05rem;
	}
	.proDetailsImgBOX img{
		width: 0.8rem;
		height: 0.8rem;
	}
	.proDetailsAmountBox{
		width: 1.95rem;
		height: 0.9rem;
		float: left;
		padding: .05rem 0 0 .24rem;
	}
	.minus,.add{
		width: .3rem;
		height: .3rem;
		border: 1px solid #ccc;
		text-align: center;
		line-height: .3rem;
		float: left;
	}
	.add{
		color: red;
	}
	.amount{
		width: .76rem;
		border: 1px solid #ccc;
		float: left;
		height: .3rem;
		margin: 0 .08rem 0 .08rem;
		text-align: center;
		color: #999;
	}
	.proDetailsDelBox{
		float: left;
		width: .6rem;
		height: .9rem;
		color: white;
		background: red;
		text-align: center;
		line-height: 0.9rem;
	}
	.proDetailsText{
		width: 2.33rem;
		float: left;
		margin:.05rem 0 0 .22rem;
		
	}
	.proDetailsName{
		font-size:.14rem ;
		color: #666666;
		width: 2.33rem;
		padding-right: 0.08rem;
		height: 0.38rem;
	}
	.proDetailsIfy{
		font-size: .12rem;
		color: #999999;
		line-height: .2rem;
		width: 2.33rem;
		height: .2rem;
	}
	.proDetailsPrice{
		width: 2.33rem;
		line-height: .24rem;
		padding-right: 0.08rem;
		
	}
	.proDetailsNewPrice{
		color: red;
		font-size: .14rem;
	}
	.proDetailsOldPrice{
		text-decoration: line-through;
		font-size: .12rem;
		margin-left: .08rem;
	}
	.nowNum{
		float: right;
	}
	.cartFoot{
		height: .5rem;
	}
	.cartFootCheckBox{
		float: left;
		width: .38rem;
		text-align: center;
		line-height: .5rem;
	}
	.cartFootText{
		line-height: .5rem;
		font-size: .14rem;
		float: left;
	}
	.cartFootPriceBox{
		line-height: .5rem;
		float: right;
		color: red;
		margin-right:0.08rem ;
	}
	.cartFootCLear{
		float: right;
		line-height: .5rem;
		width: 1rem;
		background: red;
		color: white;
		text-align: center;
	}
</style>