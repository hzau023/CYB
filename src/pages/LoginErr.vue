<template>
	<div class="longinErr">
		<pageHeader></pageHeader>
		<div class="errMsg">用户名或密码错误</div>
		<div class="toLogin" @click="toLogin">重新登录</div>
	</div>
</template>

<script>
	const PageHeader = r => require.ensure([], () => r(require('@/components/PageHeader.vue')), 'Login')
	export default{
		components:{
			"pageHeader":PageHeader
		},
		methods:{
			toLogin(){
				this.$router.push("/login")
			}
		}
	}
	
	
	
</script>

<style>
	.errMsg{
		width: 90%;
		margin: 1rem 0 0.5rem 5% ;
		text-align: center;
	}
	.toLogin{
		height: .35rem;
		margin: auto;
		background: red;
		color: white;
		width: 40%;
		text-align: center;
		line-height: 0.35rem;
		border-radius:5px ;
	}
</style>