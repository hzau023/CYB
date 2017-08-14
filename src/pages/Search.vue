<template>
	<div class="searchBox">
		<homeHeader></homeHeader>
		<div class="searchHeader">
			<span>关键搜索</span>
			<i class="iconfont icon-chuyidong" @click="toHome"></i>
		</div>
		<div class="search">
			<div class="searchChgBox">
				<div @click="change('searchProBox')" class="searchPro" :class="{searchActive:page=='searchProBox'?'searchActive':''}">宝贝</div>
				<div @click="change('searchShopBox')" class="searchShop" :class="{searchActive:page=='searchShopBox'?'searchActive':''}">店铺</div>
			</div>
			<component :is="page"></component>
		</div>
		<div class="searchRod">
			<i class="iconfont icon-huo"></i>
			<span>搜索记录</span>
			<div><i class="iconfont icon-chuyidong"></i><span>删除</span></div>
		</div>
		<div class="searchHot">
			<i class="iconfont icon-huo"></i>
			<span>热门搜索</span>
		</div>
		<div class="searchHotBtn">白茶，金骏眉，大板</div>
	</div>
</template>

<script>
	const HomeHeader = r => require.ensure([], () => r(require('@/components/HomeHeader.vue')), 'Header')
	import Vue from 'vue'
	
	
	var searchProBox={
		template:
			`<div>
				<input type="text" placeholder="请输入关键词"/>
				<button></button>
			</div>`
	}
	
	var searchShopBox={
		template:
			`<div>
				<input type="text" placeholder="请输入关键词"/>
				<button></button>
			</div>`
	}
	
	
	
	export default{
		data(){
			return{
				page:'searchProBox'
			}
		},
		components:{
			'homeHeader':HomeHeader,
			'searchProBox':searchProBox,
			'searchShopBox':searchShopBox
		},
		methods:{
			toHome(){
				this.$router.push("/")
			},
			change(val){
				this.page=val
			}
		}
	}
</script>

<style>
	.searchBox{
		background: white;
	}
	.searchHeader{
		height: 0.4rem;
		border-bottom: 1px solid #eee;
		background: white;
		line-height: 0.4rem;
		font-size: 0.2rem;
		padding-right: 0.12rem;
		color: #999999;
	}
	.searchHeader span{
		margin-left: 1.54rem;
	}
	.searchHeader .icon-chuyidong{
		float: right;
		font-size: 0.24rem;
	}
	.search{
		height: 0.7rem;
		margin: 0.2rem 0 0 .1rem;
		 
	}
	.searchChgBox{
		width: 3.58rem;
		height: 0.3rem;
	}
	.searchPro,.searchShop{
		height: .3rem;
		width: 0.7rem;
		line-height: 0.3rem;
		text-align: center;
		float: left;
	}
	.searchActive{
		background: #e31939;
		color: white;
	}
	.searchBox .search input{
		width: 3.2rem;
		height: .36rem;
		padding-left: .12rem;
		border: 2px solid #e31939;
		float: left;
		border-right:none ;
	}
	.searchBox .search button{
		float: left;
		height: .36rem;
		width: .36rem;
		border: 2px solid #e31939;
		border-left:none;
		background:white url("http://www.chayebang.com.cn/mobile/themesmobile/68ecshopcom_mobile/images/icosousuo.png") no-repeat;
		background-size:0.28rem 0.28rem;
		background-position: 0.03rem 0.02rem;
	}
	.searchBox .search button .icon-sousou{
		font-size: .24rem;
		color: white;
	}
	.searchRod{
		height: 0.6rem;
		line-height: 0.6rem;
		padding:0 .1rem 0 .1rem;
	}
	.searchRod div{
		float: right;
		width: .6rem;
		height: .2rem;
		border: 1px solid #999999;
		line-height: 0.2rem;
		margin-top: .2rem;
		border-radius:3px ;
		text-align: center;
	}
	.searchHot{
		padding: 0 0 0 .1rem;
		height: .5rem;
		line-height: .5rem;
	}
	.searchHotBtn{
		height: 0.3rem;
		width: 1.45rem;
		border: 1px solid #999;
		border-radius:5px;
		text-align: center;
		line-height: .3rem;
		font-size: .14rem;
		color: #999999;
		margin-left: .2rem;
	}
</style>