<template>
	<div class="login">
		<pageHeader></pageHeader>
		<div class="logIptBox">
			<div class="logIpt">
				<label>用户名</label>
				<input type="text" placeholder="用户名/邮箱/手机号" v-model="id"/>
			</div>
			<div class="logIpt">
				<label>密码</label>
				<input type="password" placeholder="密码" v-model="pwd" v-if="passwordShow"/>
				<input type="text" placeholder="密码" v-model="pwd" v-if="textShow"/>
				<i class="iconfont icon-pwd-show" @click="showPwd"></i>
			</div>
		</div>
		<button class="logBtn" @click="login">登录</button>
		<div class="logLast">
			<input type="checkbox" class="aotuLogBtn" v-model="checked"/>
			<span class="aotuLogText">自动登录</span>
			<span class="forgetPwd">忘记密码？</span>
			<span class="toRegis" @click="toRegis">免费注册</span>
		</div>
		<div class="otherLog">———— 第三方登录 ————</div>
		<ul class="otherBox">
			<li><a href="http://www.chayebang.com.cn/mobile/user.php?act=oath&type=qq" class="qqLog"></a></li>
			<li><a href="http://www.chayebang.com.cn/mobile/user.php?act=oath&type=qq" class="sinaLog"></a></li>
		</ul>
	</div>
	
</template>

<script>
	const PageHeader = r => require.ensure([], () => r(require('@/components/PageHeader.vue')), 'Login')
	import Vue from 'vue'
	export default{
		data(){
			return {
				id:"",
				pwd:"",
				textShow:false,
				passwordShow:true,
				checked:false
			}
		},
		components:{
			'pageHeader':PageHeader
		},
		methods:{
			login(){
				var userData={
					id:this.id,
					pwd:this.pwd,
					checked:this.checked
				}
				let arr=JSON.parse(localStorage.getItem("userRegData"))||[];
				var _this=this;
				arr.forEach(function(ele,idx){
					if(ele.id==_this.id){
						if(ele.pwd==_this.pwd){
							localStorage.setItem("userData",JSON.stringify(userData))
							_this.$router.push("/user")
						}else{
							_this.$router.push("/loginerr")
						}
					}
				})
			},
			showPwd(){
				this.textShow=!this.textShow
				this.passwordShow=!this.passwordShow
			},
			toRegis(){
				this.$router.push("/register")
			}
		},
		beforeMount(){
			let arr=JSON.parse(localStorage.getItem("userData"))||[];
			if(arr.checked){
				this.checked=arr.checked;
				this.id=arr.id;
				this.pwd=arr.pwd;
			}
		}
		
	}
</script>

<style>
	body{
		background: #eee;
	}
	.login{
		height: 6.67rem;
	}
	.login label{
		text-align: center;
		line-height: 0.56rem;
		text-align: center;
		width: 0.7rem;
		display: inline-block;
	}
	.login input{
		height: 0.52rem;
		border: none;
		padding-left: 0.25rem;
	}
	.logIpt{
		width: 3.54rem;
		border-bottom: 1px solid #eee;
	}
	.logIptBox{
		background: white;
		width: 3.75rem;
		padding-left: 0.1rem;
	}	
	.icon-pwd-show{
		font-size: 0.24rem!important;
		width: 0.24rem;
		height: 0.15rem;
		display: inline-block;
		color: #ccc;
		float: right;
		margin-top: 0.15rem;
	}
	.logBtn{
		width: 3.54rem;
		height: .46rem;
		border: none;
		background: red;
		border-radius:3px ;
		margin:0.16rem 0 0.25rem 0.1rem;
		color: white;
		
	}
	.aotuLogBtn{
		height: 0.16rem!important;
		width: 0.16rem;
		margin: 0.02rem 0.14rem 0 0;
	}
	.toRegis,.forgetPwd{
		float: right;
		font-size: 0.14rem;
		color: #5790bb;
		margin-right: 0.1rem;
	}
	.aotuLogText{
		font-size: 0.14rem;
		vertical-align: middle;
		display: inline-block;
		vertical-align:top;
		color: #999999;
	}
	.logLast{
		padding:0 0.1rem 0  0.1rem;
		font-size: 0.12rem;
	}
	.otherLog{
		width: 3.75rem;
		height: 0.6rem;
		text-align: center;
		line-height: 0.6rem;
		color:  #999999;
	}
	.qqLog{
		display: inline-block;
		width: 0.5rem;
		height: 0.5rem;
		background: url("http://www.chayebang.com.cn/mobile/themesmobile/68ecshopcom_mobile/images/pub_user.png") no-repeat;
		background-size:0.5rem ;
		background-position:0rem 0rem ;
	}
	.sinaLog{
		display: inline-block;
		width: 0.5rem;
		height: 0.5rem;
		background: url("http://www.chayebang.com.cn/mobile/themesmobile/68ecshopcom_mobile/images/pub_user.png") no-repeat;
		background-size:0.5rem ;
		background-position:0rem -.73rem ;
		margin-left: 0.3rem;
	}
	.otherBox{
		display: flex;justify-content: center;
	}
</style>