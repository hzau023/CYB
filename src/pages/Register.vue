<template>
	<div class="register">
		<pageHeader></pageHeader>
	    <ul class="changeHead">
	    	<li @click="change('regPhone')" :class="{regActive:page=='regPhone'?'regActive':''}">手机注册</li>
	    	<li @click="change('regEmail')" :class="{regActive:page=='regEmail'?'regActive':''}">邮箱注册</li>
	    </ul>
	    <component :is="page"></component>
	    <ul class="regChanggeBox">
	    	<li @click="toLogin">登录</li>
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
</template>

<script>
	const PageHeader = r => require.ensure([], () => r(require('@/components/PageHeader.vue')), 'PageHeader')
	import Vue from 'vue'
	
	Vue.component("RegIptBox",{
		template:
			`<div class="iptBox">
				<label>{{label}}</label>
				<input :type="type" :placeholder="placeholder" :class="className" @input="changeVal"/>
				<slot></slot>
				<slot v-if="show" name="err"></slot>
				<slot v-if="showIn" name="errIn"></slot>
			</div>`,
		data(){
			return{
				show:false,
				showIn:false,
				idPass:false,
				pwdPass:false,
				verifyPass:false
			}
		},
		props:{
			"label":String,
			"type":String,
			"placeholder":String,
			"className":String
		},
		methods:{
			changeVal(e){
				this.$emit("input",e.target.value);
				var _this=this;
				var val=e.target.value;
				this.show=false;
				this.showIn=false;
				$(e.target)[0].onblur=function(){
					if(_this.label=="手机号"||"邮箱地址"){
						let arr=JSON.parse(localStorage.getItem("userRegData"))||[];
						arr.forEach(function(ele,idx){
				  			if(ele.id==val){
				  				$(this).val("")
				  				_this.showIn=true
				  			}
				  		})
						if(_this.label=="手机号"){
		  					let rgx=/^1[3|4|5|7|8][0-9]{9}$/;
							if(!rgx.test(val)){
								_this.show=true
								$(this).val("")
							}else{
								_this.idPass=true
								_this.show=false
							}
		  				}
						if(_this.label=="邮箱地址"){
		  					let rgx=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
							if(!rgx.test(val)){
								_this.show=true
								$(this).val("")
								
							}else{
								_this.idPass=true
								_this.show=false
							}
		  				}
					}
					if(_this.label=="密码"){
						let rgx=/^[a-zA-Z]\w{5,15}$/;
						if(!rgx.test(val)){
							_this.show=true
							$(this).val("")
						}else{
							_this.pwdPass=true
							_this.show=false
						}
					}
					if(_this.label=="邮箱地址"){
						
					}
					if(_this.label=="验证码"){
						if(val==1234){
							_this.verifyPass=true
							_this.show=false
						}else{
							_this.show=true
							$(this).val("")
						}
					}
					var passObj={
						idPass:_this.idPass,
						pwdPass:_this.pwdPass,
						verifyPass:_this.verifyPass
					}
					_this.$emit("pass",passObj);
				}
			}
		}
	})
	var regPhone={
		template:
			`<div>
				<div class="regMidBox">
					<RegIptBox :type="type[0]" :label="label[0]" :placeholder="placeholder[0]" v-model="id" @pass="pass">
						<div slot="err" class="regErr">* 手机号码不是一个有效号码</div>
						<div slot="errIn" class="regErr">* 手机号码已存在</div>
					</RegIptBox>
					
					<RegIptBox :type="type?'password':'text'" :label="label[1]" :placeholder="placeholder[1]" v-model="pwd" @pass="pass">
						<i class="iconfont icon-pwd-show" @click="showPwd"></i>
						<div slot="err" class="regErr">- 登录密码不能少于 6 个字符。</div>
					</RegIptBox>
					
					<RegIptBox :type="type[0]" :label="label[2]" :placeholder="placeholder[2]" :className="className[0]" @pass="pass">
						<span class="getVerify">获取验证码</span>
						<div slot="err" class="regErr">* 验证码不符</div>
					</RegIptBox>
				</div>
				<button class="regBtn" @click="register">注册</button>
			</div>`,
		data(){
			return{
				type:true,
				label:["手机号","密码","验证码"],
				placeholder:["请输入手机号","请输入6-20位字符","短信验证码"],
				className:["verify"],
				id:"",
				pwd:"",
				idPassIf:false,
				verifyPassIf:false,
				pwdPassIf:false
			}
		},
		methods:{
			register(){
				var _this=this
				let arr=JSON.parse(localStorage.getItem("userRegData"))||[];
				if(this.id.length==0||this.pwd.length==0||!this.verifyPassIf||!this.pwdPassIf||!this.idPassIf){
					alert("注册失败，请重新注册！！！")
				}else{
					var userMsg={
						id:_this.id,
						pwd:_this.pwd
					}
					arr.push(userMsg)
					localStorage.setItem("userRegData",JSON.stringify(arr))
					_this.$router.push("/login")
				}
			},
			pass(val){
				
				if(val.idPass){
					this.idPassIf=val.idPass
				}
				if(val.pwdPass){
					this.pwdPassIf=val.pwdPass
				}
				if(val.verifyPass){
					this.verifyPassIf=val.verifyPass
				}
			},
			showPwd(){
				this.type=!this.type
			}
			
		}
	}
	var regEmail={
		template:
			`<div>
				<div class="regMidBox">
					<RegIptBox :type="type[0]" :label="label[0]" :placeholder="placeholder[0]" v-model="id" @pass="pass">
						<div slot="err" class="regErr">* 邮件地址不合法</div>
						<div slot="errIn" class="regErr">* 邮件地址已存在</div>
					</RegIptBox>
					<RegIptBox :type="type?'password':'text'" :label="label[1]" :placeholder="placeholder[1]" v-model="pwd" @pass="pass">
						<i class="iconfont icon-pwd-show" @click="showPwd"></i>
						<div slot="err" class="regErr">- 登录密码不能少于 6 个字符。</div>
					</RegIptBox>
					<RegIptBox :type="type[0]" :label="label[2]" :placeholder="placeholder[2]" :className="className[0]" @pass="pass">
						<span class="getVerify">获取验证码</span>	
						<div slot="err" class="regErr">* 验证码不符</div>
					</RegIptBox>
				</div>
				<button class="regBtn" @click="register">注册</button>
			</div>`,
		data(){
			return{
				type:["text","password"],
				label:["邮箱地址","密码","验证码"],
				placeholder:["请输入邮箱地址","请输入6-20位字符","短信验证码"],
				className:["verify"],
				id:"",
				pwd:""
			}
		},
		methods:{
			register(){
				var _this=this
				let arr=JSON.parse(localStorage.getItem("userRegData"))||[];
				if(this.id.length==0||this.pwd.length==0||!this.verifyPassIf||!this.pwdPassIf||!this.idPassIf){
					alert("注册失败，请重新注册！！！")
				}else{
					var userMsg={
						id:_this.id,
						pwd:_this.pwd
					}
					arr.push(userMsg)
					localStorage.setItem("userRegData",JSON.stringify(arr))
					_this.$router.push("/login")
				}
			},
			pass(val){
				
				if(val.idPass){
					this.idPassIf=val.idPass
				}
				if(val.pwdPass){
					this.pwdPassIf=val.pwdPass
				}
				if(val.verifyPass){
					this.verifyPassIf=val.verifyPass
				}
			},
			showPwd(){
				this.type=!this.type
			}
		}
	}
	
	export default{
		data(){
			return {
				page:"regPhone",
				id:"",
				pwd:""
			}
		},
		components:{
			'pageHeader':PageHeader,
			'regPhone':regPhone,
			'regEmail':regEmail
		},
		methods:{
			change(page){
				this.page=page
			},
			toLogin(){
				this.$router.push("/login")
			}
		}
		
	}
</script>

<style>
	body{
		background: #eee;
	}
	.regErr{
		color: red;
		font-size: 0.12rem;
		height: 0.24rem;
		width: 3.54rem;
		padding-left:1rem;
	}
	.getVerify{
		display: inline-block;
		width: 1.14rem;
		height: 0.3rem;
		border: 1px solid red;
		color: red;
		border-radius:.15rem;
		text-align: center;
		line-height:0.3rem;
	}
	.verify{
		width: 1.2rem;
	}
	.icon-pwd-show{
		font-size: 0.24rem!important;
		width: 0.24rem;
		height: 0.15rem;
		display: inline-block;
		color: #ccc;
	}
	.regMidBox{
		background: white;
		width: 3.75rem;
		padding-left: 0.1rem;
	}
	.changeHead{
		display: flex;
		justify-content: space-around;
		background: white;
		margin-bottom: 0.2rem;
	}
	.changeHead li{
		height: 0.5rem;
		line-height: 0.5rem;
		text-align: center;
		flex: 1;
	}
	.regActive{
		border-bottom: 1px solid red;
	}
	.iptBox{
		width: 3.54rem;
		border-bottom: 1px solid #eee;
		background: white;
	}
	.register label{
		text-align: center;
		line-height: 0.56rem;
		text-align: center;
		width: 0.7rem;
		display: inline-block;
	}
	.register input{
		height: 0.52rem;
		border: none;
		padding-left: 0.25rem;
	}
	.regBtn{
		width: 3.54rem;
		height: .46rem;
		border: none;
		background: red;
		border-radius:3px ;
		margin:0.16rem 0 0.25rem 0.1rem;
		color: white;
	}
	.regChanggeBox{
		height: 0.46rem;
		width: 3.75rem;
		display: flex;
		justify-content: center;
		background: #F8F8F8;
		align-items: center;
	}
	.regChanggeBox li {
		border-right:1px solid #999999 ;
		height: 0.2rem;
		width: 0.5rem;
		line-height: 0.2rem;
		text-align: center;
		font-size: 0.14rem;
	}
	.regChanggeBox li:nth-child(3){
		border: none;
		text-align: right;
	}
	.regChanggeImg{
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		color: #959595;
		background: #F8F8F8;
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
		color: #959595;
		font-size: 0.12rem;
	}
	.regFooter{
		height: 0.34rem;
		width: 3.75rem;
		color: #ccc;
		font-size: 0.12rem;
		text-align: center;
		line-height: 0.34rem;
		background: #F8F8F8;
	}
</style>