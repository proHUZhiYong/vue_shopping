//入口 文件

import Vue from 'vue'

//导入路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 定义全局过滤器 过滤时间格式 需要用到 moment插件
import moment from 'moment'
Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//设置请求的根路径 http 地址头
// Vue.http.options.root = '/root';
//全局设置 post 时候的表单数据的组织格式
Vue.http.options.emulateJSON = true;

//导入 mui 的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//按需导入 mint-ui 组件
import { Header,Swipe,SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


//导入 自己的 路由模块
import router from './router.js'

//导入 跟组件
import app from './App.vue'

var vm = new Vue({
    el:"#app",
    render:c => c(app),
    router //在vm 实例上挂载路由对象
})