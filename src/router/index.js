import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('@/pages/Home.vue')), 'Home')
const ProIfy = r => require.ensure([], () => r(require('@/pages/ProIfy.vue')), 'ProIfy')
const Register = r => require.ensure([], () => r(require('@/pages/Register.vue')), 'Register')
const Login = r => require.ensure([], () => r(require('@/pages/Login.vue')), 'Login')
const User = r => require.ensure([], () => r(require('@/pages/User.vue')), 'User')
const LoginErr = r => require.ensure([], () => r(require('@/pages/LoginErr.vue')), 'LoginErr')
const Search = r => require.ensure([], () => r(require('@/pages/Search.vue')), 'Search')
const Cart = r => require.ensure([], () => r(require('@/pages/Cart.vue')), 'Cart')
const Goods = r => require.ensure([], () => r(require('@/pages/Goods.vue')), 'Goods')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:'home',
      component:Home
    },{
    	path:"/proify",
      name:'proify',
      component:ProIfy
    },{
    	path:"/register",
      name:'register',
      component:Register
    },{
    	path:"/login",
      name:'login',
      component:Login
    },{
    	path:"/user",
      name:'user',
      component:User
    },{
    	path:"/loginerr",
      name:'loginerr',
      component:LoginErr
    },{
    	path:"/search",
      name:'search',
      component:Search
    },{
    	path:"/cart",
      name:'cart',
      component:Cart
    },{
    	path:"/goods",
      name:'goods',
      component:Goods
    }
    
    
  ]
})
