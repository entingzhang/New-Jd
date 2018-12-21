import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cart from './views/ShoppingCart.vue'
import User from './views/UserCenter.vue'
import Search from './views/Search.vue'
import Listli from './views/Listli.vue'
import Product from './views/ProductList.vue'
import Routerdemo from './views/Router.vue'
import AllBig from './views/AllBig.vue'
import Login from './views/Login.vue'
import Detail from './components/Detail.vue'
import Comment from './components/Comment.vue'
import Recommend from './components/Recommend.vue'
import AllAside from './components/AllAside.vue'
//import AllConent from './components/AllConent.vue'
import AllHeader from './components/AllHeader.vue'
import ConentTop from './components/ConentTop.vue'
import ConentRight from './components/ConentRight.vue'
import ConentMain from './components/ConentMain.vue'
//12月10号添加的uve组件
//import SearchProducts from "@/SearchProducts.vue";
Vue.use(Router)
const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
		path: '/',
		name: 'home',
		component: Home
	}, {
		path: '/cart',
		name: 'cart',
		component: Cart
	}, {
		path: '/user',
		name: 'user',
		component: User
	}, {
		path: '/search',
		name: 'search',
		component: Search
	}, {
		path: '/listli',
		name: 'listli',
		component: Listli
	}, {
		path: '/product',
		name: 'product',
		component: Product
	}, {
		path: '/router',
		name: 'router',
		component: Routerdemo
	},{
		path: '/login',
		name: 'login',
		component: Login
	},{
		path: '/allbig',
		name: 'allbig',
		component: AllBig,
		children: [{
			path: '',
			components: {
				default: ConentMain,
				header: AllHeader,
				aside: AllAside,
				conenttop: ConentTop,
				conentright: ConentRight,
			}
		}]
	}]
});
//router.beforeEach((to,from,next) =>{
//	console.log(to);
//	console.log(from);
//	console.log(to.path);
//	if(to.path=='/search'){
//		next({path:'/'});
//	}else{
//		next();
//	}
//})
export default router;