
import VueRouter from 'vue-router'
import HomeContainer from "./components/tabbar/homeContainer.vue"
import MemberContainer from "./components/tabbar/memberContainer.vue"
import ShopcarContainer from "./components/tabbar/shopcarContainer.vue"
import SrarchContainer from "./components/tabbar/srarchContainer.vue"
import NewsList from "./components/news/newsList.vue"
import NewsInfo from "./components/news/NewsInfo.vue"
import photoList from "./components/photos/photoList.vue"
import photoInfo from "./components/photos/photoinfo.vue"
import goodsList from "./components/goods/goodslist.vue"
import goodsInfo from "./components/goods/goodsinfo.vue"
import goodsDesc from "./components/goods/goodsdesc.vue"
import goodsComment from "./components/goods/goodscomment.vue"
var router = new VueRouter({
	routes:[//配置路由规则
		{path:'/',redirect:'/home'},
		{path:'/home',component:HomeContainer},
		{path:'/member',component:MemberContainer},
		{path:'/shopcar',component:ShopcarContainer},
		{path:'/search',component:SrarchContainer},
		{path:'/home/newsList',component:NewsList},
		{path:'/home/newsinfo/:id',component:NewsInfo},
		{path:'/home/photoList',component:photoList},
		{path:'/home/photoinfo/:id',component:photoInfo},
		{path:'/home/goodsList',component:goodsList},
		{path:'/home/goodsinfo/:id',component:goodsInfo,name:'goodsinfo'},
		{path:'/home/goodsDesc/:id',component:goodsDesc,name:'goodsDesc'},
		{path:'/home/goodsComment/:id',component:goodsComment,name:'goodsComment'},
	],
	linkActiveClass:'mui-active' //覆盖默认的路由的高亮的类  默认的类为 router-link-active
})
//暴露 路由对象
export default router