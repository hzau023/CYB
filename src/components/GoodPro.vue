<template>
	<div>
		<ul class="swiper-slide goodProBox">
			<li v-for='p in goodPro' class="proLi">
				<img :src="proImg+p.pro.src" class="proBImg"/>
				<p class="proName proNameGood">{{p.pro.name}}</p>
				<div class="priceBox priceBoxGood">
					<p class="newPrice">{{p.pro.newPrice}}</p>
					<p class="oldPrice">{{p.pro.oldPrice}}</p>
				</div>
				<div class="cartBox cartBoxGood">
					<img class="cartImg" src="http://www.chayebang.com.cn/mobile/themesmobile/68ecshopcom_mobile/images/index_flow.png"/>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				proImg:"http://www.chayebang.com.cn/"
			}
		},
		props:[
			"goodPro"
		]
	}
</script>

<style>
	.goodProBox{
		display: flex;
		flex-flow: wrap;
		justify-content: flex-start;
	}
	.proLi{
		width: 1.8rem;
		height: 2.7rem;
		background: white;
		margin:0.05rem 0 0 0.05rem;
	}
	.proBImg{
		width: 1.8rem;
		height: 1.8rem;
	}
	.proNameGood{
		padding: 0.05rem ;
		width: 1.8rem!important;
	}
	.priceBoxGood{
		margin: 0.05rem 0 0 0.05rem!important;
	}
	.cartBoxGood{
		margin-right: 0.05rem!important;
	}
</style>