//入口 文件

import Vue from 'vue'

//导入路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 每次进入 网站 从本地取出 购物车数据
var car = JSON.parse(localStorage.getItem('car')|| '[]');
var store = new Vuex.Store({
    state:{
        //将购物车中的商品数据 用 数组存储起来 在 car 数组中 存储一些商品的对象
        // 可以暂时将这个商品的对象 设计成这样{id:商品的id，count:商品的数量,
        //  price:商品的价格，selected:false }
        car:car

    },
    mutations:{
        addToCar(state,goodsinfo){
            //点击 加入购物车 把商品信息加入到 store 中的 car
            //1.如果 购物车 之前 已经存在 该商品的信息 那么 只需要 更新数量
            //2.如果 没有 直接把 商品 数据 push 到car 上

            var flg = false; //默认没有找到 对应的 商品
            state.car.some(item =>{
                if(item.id == goodsinfo.id){
                    item.count +=parseInt(goodsinfo.count)
                    flg = true;
                    return true
                }
            })
            if(!flg){
                state.car.push(goodsinfo);
            }

            //当更新car 之后 把 car 存储到 本地的 localStorage 中
            localStorage.setItem('car',JSON.stringify(state.car))

        },
        updateGoodsInfo(state,goodsinfo){
            //修改购物车商品数量值
            state.car.some(item =>{
                if(item.id == goodsinfo.id){
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
             //当修改完商品的数量 把最新的购物车 数据 保存到 本地存储中
             localStorage.setItem('car',JSON.stringify(state.car))
        },
        removeFormCar(state,id){
            // 根据id 从 store 中的购物车中删除对应的那条 商品数据
            state.car.some((item,i) =>{
                if(item.id == id){
                    state.car.splice(i,1)
                    return true;
                }
            })
            // 将 删除 完毕 后的 最新的购物车 数据 保存到 本地存储
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsSelected(state,info){
            state.car.some(item =>{
                if(item.id == info.id){
                    item.selected = info.selected;
                }
            })
            //把最新的 所有 购物车商品的状态保存到 store中
            localStorage.setItem('car',JSON.stringify(state.car))
        }
    },
    getters:{
        getAllCount(state){
            var num = 0;
            state.car.forEach(item =>{
                num += item.count;
            })
            return num
        },
        getGoodsCount(state){
            var obj={}
            state.car.forEach(item =>{
                obj[item.id] = item.count
            })
            return obj
        },
        getGoodsSelected(state){
            var obj ={}
            state.car.forEach(item =>{
                obj[item.id]=item.selected;
            })
            return obj;
        },
        getGoodsCountAndAmount(state){
            var obj = {
                count:0,//勾选数量
                amount:0//勾选总价
            }
            state.car.some(item =>{
                if(item.selected){
                    obj.count += item.count;
                    obj.amount += item.price * item.count;
                }
            })
            return obj;
        }
    }
})

// 定义全局过滤器 过滤时间格式 需要用到 moment插件
import moment from 'moment'
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
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
// import { Header,Swipe,SwipeItem,Button} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI);

import VuePreview from 'vue-preview' //引用图片预览插件
Vue.use(VuePreview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: {top: 0, bottom: 0},
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    bgOpacity: 1,
    tapToClose: true,
    tapToToggleControls: false
})


//导入 自己的 路由模块
import router from './router.js'

//导入 跟组件
import app from './App.vue'

var vm = new Vue({
    el:"#app",
    render:c => c(app),
    router, //在vm 实例上挂载路由对象
    store//挂载vuex
})