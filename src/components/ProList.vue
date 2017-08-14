<template>
	<div :data-num="cartNum" class="allProBox">
		<div class="proList" v-for='(proList,idx) in proData' :data-idx='idx'>
			<div class="proListHead">
				<div>
					<span>{{proList.id}}</span>
					<span>更多></span>
				</div>
			</div>
			<div class="swiper-container-pro">
				<div class="swiper-wrapper">
					<ul class="swiper-slide">
						<li v-for='(p,proName) in proList.pro' class="homeProBox" :data-title="proName">
							<img :src="proImg+p.src" @click="toGoods"/>
							<p class="proName" @click="toGoods">{{p.name}}</p>
							<div class="priceBox">
								<p class="newPrice">{{p.newPrice}}</p>
								<p class="oldPrice">{{p.oldPrice}}</p>
							</div>
							<div class="cartBox" @click="addCart">
								<img class="cartImg" src="http://www.chayebang.com.cn/mobile/themesmobile/68ecshopcom_mobile/images/index_flow.png"/>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="changeProList" v-if="show" v-for="(l,type) in proDataList">
			<div class="changeProListHead">请选择商品属性</div>
			<div class="changeProListText" :data-type="type">{{type}}</div>
			<div class="changePro" v-for="(d,idx) in l">
				<input type="radio" name="proRadio" v-model="picked" :value="d"/>
				<span>{{d}}</span>
			</div>
			<div class="changeProListBtn">
				<div class="changeProListSure" @click="changeSure">确定</div>
				<div class="changeProListChace" @click="changeEsc">取消</div>
			</div>
		</div>
		<div class="bodyOver" v-if="overShow"></div>
		<div class="cartNum" v-show="cartNum==0?false:true">{{cartNum}}</div>
	</div>
	
</template>

<script>
	export default {
		data(){
			return{
				proImg:"http://www.chayebang.com.cn/",
				proDataList:"",
				show:false,
				picked:"",
				overShow:false,
				proName:"",
				proTypeName:"",
				cartPro:[],
				objIdx:0,
				cartNum:0
			}
		},
		mounted(){
			var arr=JSON.parse( localStorage.getItem("cartPro"))||[] 
			this.cartPro=arr
			this.cartNum=arr.length
		},
		methods:{
			addCart(e){
				var _this=this
				let _ProData=this.proData
				let _proListIdx=$(e.target).parents(".proList")[0].dataset.idx
				this.objIdx=_proListIdx
				let _proName=$(e.target).parents(".homeProBox")[0].dataset.title
				this.proName=_proName
				let _proData=_ProData[_proListIdx].pro[_proName]
				if(_proData.list){
					this.proDataList=_proData.list
					this.show=true
					this.overShow=true
					setTimeout(function(){
						$($(".changePro")[0]).children("input").prop("checked",true)
						_this.picked=$($(".changePro")[0]).children("input").val()
						_this.proTypeName=$(".changeProListText")[0].dataset.type
					},100)
				}else{
					var proList={
						proName:this.proName,
						idx:this.objIdx,
						amount:1
					}
					var _arr=this.cartPro
					var index=this.indexOf(proList.proName,this.cartPro)
					if(index==-1){
						_arr.push(proList)
					}else{
						_arr[index].amount++
					}
					localStorage.setItem("cartPro",JSON.stringify(_arr))
				}
				
				var num =this.cartPro.length
				this.cartNum=num
				
			},
			indexOf(name,pro){
				for(var i=0 ,len=pro.length;i<len;i++){
					if(pro[i].proName==name){
						return i
					}
				}
				return -1;
			},
			changeEsc(){
				this.show=false
				this.proDataList=""
				this.overShow=false
			},
			changeSure(e){
				this.show=false
				this.proDataList=""
				this.overShow=false
				var proList={
					proName:this.proName,
					proTypeName:this.proTypeName,
					proType:this.picked,
					idx:this.objIdx,
					amount:1
				}
				var _arr=this.cartPro
				var index=this.indexOf(proList.proName,this.cartPro)
				
				if(index==-1){
					_arr.push(proList)
				}else{
					_arr[index].amount++
				}
				
				localStorage.setItem("cartPro",JSON.stringify(_arr))
				
				var num =this.cartPro.length
				this.cartNum=num
			},
			toGoods(e){				
				let _proName=$(e.target).parents(".homeProBox")[0].dataset.title
				let _proListIdx=$(e.target).parents(".proList")[0].dataset.idx
				
				var goodObj={
					goodName:_proName,
					proIdx:_proListIdx
				}
				
				localStorage.setItem("goodName",JSON.stringify(goodObj))
				this.$router.push("/goods")
			},
			pushNum(){
				this.$emit("cartNum",this.cartNum)
			}
		},
		props:[
			"proData"
		]
	}
</script>

<style>
	.cartNum{
		width: .12rem;
		height: .12rem;
		font-size: .1rem;
		background: red;
		color: white;
		position: absolute;
		bottom: 0.3rem;
		border-radius:.12rem ;
		text-align: center;
		line-height: .12rem;
		right: 1rem;
		z-index: 1;
	}
	.bodyOver{
		background: white;
		opacity: 0.6;
		height: 6.17rem;
		position: fixed;
		width:3.75rem ;
		top: 0;
		left: 0;
		z-index: 1;
	}
	.proList{
		margin-top: 0.1rem;
		height: 2.75rem;
		width: 3.75rem;
		background: white;
	}
	.proListHead{
		height: .4rem;
		width: 3.75rem;
		padding-top: 0.08rem;
		border-bottom: 1px solid #eee;
	}
	.proListHead div{
		height: 0.26rem;
		width: 3.75rem;
		border-left:2px solid red ;
		padding: 0 .1rem 0 .1rem ;
	}
	.proListHead div span:nth-child(1){
		font-size: 0.14rem;
		font-weight: 900;
	}
	.proListHead div span:nth-child(2){
		font-size: 0.14rem;
		float: right;
	}
	
	
	
	.swiper-container-pro li{
		height: 2rem;
		width: 1.14rem;
		margin-right: 0.08rem;
	}
	.swiper-container-pro ul{
		display: flex;
		padding: 0.1rem 0 0 0.08rem;
		width: 3.75rem;
		justify-content: space-around;
		
	}
	.swiper-container-pro li img{
		width: 1.14rem;
		height: 1.14rem;
	}
	.proName{
		font-size: 0.12rem;
		color: #999999;
		height: 0.42rem;
		width:1.14rem ;
		border-bottom: 1px solid #eee;
		overflow: hidden;
		white-space:wrap;
		text-overflow: ellipsis;
		
		
	}
	.priceBox{
		margin-top: 0.08rem;
		float: left;
	}
	.newPrice{
		color: red;
		font-size: .16rem;
	}
	.oldPrice{
		color: #999999;
		font-size: .12rem;
		text-decoration: line-through;
	}
	.cartBox{
		float: right;
		height: 0.24rem;
		width: .24rem;
		background: red;
		border-radius:0.24rem ;
		margin: 0.08rem 0.03rem 0 0;
	}
	.cartImg{
		height: 0.24rem!important;
		width: .24rem!important;
	}
	.changeProList{
		width: 3.3rem;
		position: fixed;
		z-index: 5;
		top:2rem;
		left: .24rem;
		background: white;
		border-radius:8px ;
	}
	.changeProListHead{
		width: 3.3rem;
		height: .35rem;
		background: red;
		color: white;
		font-size: .14rem;
		line-height: .35rem;
		padding-left:.14rem ;
		border-top-left-radius:8px ;
		border-top-right-radius:8px ;
	}
	.changeProListText{
		height: .5rem;
		line-height: .5rem;
		font-size: .16rem;
		padding-left:.14rem ;
	}
	.changePro{
		padding-left: 0.14rem;
		float: left;
		margin-bottom: .2rem;
	}
	.changePro span{
		font-size: .14rem;
	}
	.changeProListBtn{
		height: .5rem;
		width: 3.3rem;
		float: left;
	}
	.changeProListSure,.changeProListChace{
		background: red;
		width: 1.5rem;
		height: .3rem;
		border-radius:5px ;
		line-height: .3rem;
		text-align: center;
		color: white;
		margin-left: .1rem;
		float: left;
	}
	.changeProListChace{
		background: #25c6fc;
	}
</style>