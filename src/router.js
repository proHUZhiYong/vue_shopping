
import VueRouter from 'vue-router'
import HomeContainer from "./components/tabbar/homeContainer.vue"
import MemberContainer from "./components/tabbar/memberContainer.vue"
import ShopcarContainer from "./components/tabbar/shopcarContainer.vue"
import SrarchContainer from "./components/tabbar/srarchContainer.vue"

var router = new VueRouter({
	routes:[//配置路由规则
		{path:'/',redirect:'/home'},
		{path:'/home',component:HomeContainer},
		{path:'/member',component:MemberContainer},
		{path:'/shopcar',component:ShopcarContainer},
		{path:'/search',component:SrarchContainer},
	],
	linkActiveClass:'mui-active' //覆盖默认的路由的高亮的类  默认的类为 router-link-active
})
//暴露 路由对象
export default router