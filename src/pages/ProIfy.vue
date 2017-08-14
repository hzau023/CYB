<template>
	<div>
		<pageHeader></pageHeader>
		<div class="ifyCon">
			<ul class="clearfix" >
				<li v-for="d in proData" @click="handleClick">{{d.id}}</li>
		   </ul>
		   <div>
			   	<div class="ifyDetails" v-for="d in proData" v-show='show'>
			   		<div class="goBtn">进入{{d.id}}频道</div>
			   		<div v-for="(pro,key) in d.pro" >
			   			<div class="proTit" >{{key}}</div>
			   			<div class="proBtn">{{key}}</div>
			   		</div>
			   </div>
		   </div>
		</div>
	</div>
</template>

<script>
	const PageHeader = r => require.ensure([], () => r(require('@/components/PageHeader.vue')), 'PageHeader');
//	import data from '../../static/ProData.json';
	import axios from 'axios';
	import Vue from 'vue';
	Vue.prototype.$axios = axios;
	
	export default {
		data(){
			return{
				proData:"",
				proVar:'红茶',
				show:false,
				num:0
			}
		},
		components:{
			"pageHeader":PageHeader
		},
		methods:{
			handleClick(e){
				$(e.target).addClass('cur').siblings().removeClass('cur');
				this.num=$(e.target).parent().children().index($(".cur"))
				$($(".ifyDetails")[this.num]).css("display","block")
				$($(".ifyDetails")[this.num]).siblings().css("display","none")
			}
		},
		updated(){
			$(".clearfix li:first-child").addClass('cur')
			$($(".ifyDetails")[this.num]).css("display","block")
		},
		created(){
			var _this=this
			this.$axios.get("../../static/ProData.json").then((res)=>{
				_this.proData=res.data
			},(err)=>{
				console.log(err)
			})
		}
	}
</script>

<style>
	.ifyCon{
		width: 3.75rem;
		height: 6.22rem;
		background: #f5f5f5;
	}
	.clearfix{
		width: 0.94rem;
		float: left;
	}
	.clearfix li{
		width: 0.94rem;
		height: 0.5rem;
		margin-bottom: 2px;
		background: white;
		line-height: 0.5rem;
		text-align: center;
	}
	.cur{
		color: red;
		background: #f5f5f5!important;
		border-left:3px solid red ;
	}
	.ifyDetails{
		float: left;
		width: 2.8rem;
		padding: 0.1rem 0 0 0.12rem;
	}
	.ifyDetails .goBtn{
		background: red;
		color: white;
		height: 0.35rem;
		width: 2.6rem;
		border-radius:0.05rem;
		line-height: .35rem;
		text-align: center;
	}
	.proTit{
		height: 0.28rem;
		line-height: 0.28rem;
		margin-top: 0.08rem;
	}
	.proBtn{
		height: 0.36rem;
		width: 0.8rem;
		background: white;
		border: 1px solid #ccc;
		text-align: center;
		line-height: 0.36rem;
		color: #999999;
		margin: 0.06rem 0 0 0.02rem;
	}
</style>