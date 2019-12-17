<template>
    <div class="goodsinfo-container">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="ballFlg" ref="ball"></div>
        </transition>
        <!-- 商品轮播图 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
                </div>
            </div>
        </div>
        <!-- 商品购买 -->
        <div class="mui-card">
            <div class="mui-card-header">{{goodsinfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{goodsinfo.sell_price}}</span>
                    </p>
                    <p>购买数量 : <numbox @getCount="getSelectCount" :max="goodsinfo.stock_quantity"></numbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    </p>
                    <!-- 加入购物车之后拿到选择的数量 -->
                    <!-- 1. 按钮属于 goodsinfo 页面  数字 属于 numbox 页面 -->
                    <!-- 由于涉及父子组件嵌套 所以无法直接在 goodsinfo 页面 直接获取 选择的商品数量-->
                    <!-- 时间调用 父向子传递方法 子调用方法 把数据当做参数传递给 这个方法 -->
                </div>
            </div>
        </div>
        <!-- 商品参数 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodsinfo.goods_no}}</p>
                    <p>库存情况：{{goodsinfo.stock_quantity}}</p>
                    <p>上架时间：{{goodsinfo.add_titme | dateFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import swiper from "../subcomponent/swiper.vue"
import numbox from "../subcomponent/goodsinfo_numbox.vue"
export default {
    data(){
        return{
            id:this.$route.params.id,
            lunbotu:[],
            goodsinfo:{},
            ballFlg:false,//控制小球隐藏和显示
            selectCount:1,//保存用户选中的商品数量 默认为1
        }
    },
    created(){
        this.getLunbotu(),
        this.getgoodsinfo()
        console.log(typeof(this.id),this.id)
    },
    methods:{
        getLunbotu(){
            // this.$http.get('api/getLunbotu'+this.id).then(result =>{
            //     if(result.body.status === 0){
            //         this.lunbotu=this.result.body.message;
            //     }else{

            //     }
            // })
            const lunbotu_arr=[
                {src_:'http://img2.imgtn.bdimg.com/it/u=4145052645,1255376937&fm=26&gp=0.jpg'},
                {src_:'http://img0.imgtn.bdimg.com/it/u=1653962122,497205422&fm=26&gp=0.jpg'},
                {src_:'http://img2.imgtn.bdimg.com/it/u=2238127614,2359738230&fm=26&gp=0.jpg'},
            ]
            lunbotu_arr.forEach(item=>{
                item.src=item.src_
            })
            this.lunbotu = lunbotu_arr;
        },
        getgoodsinfo(){
            //获取商品详情
            // this.$http.get('api/goods/getinfo' + thi.id).then(result =>{
            //     if(result.body.status ===0){
            //         this.goodsinfo = result.body.message[0];
            //     }
            // })

            // 异步获取数据 库存数据还未取到  就讲库存 数据 传给 numbox 组件 导致 数据undefiend
            const goods_info={
                title:"动漫图片",
                market_price:'100',
                sell_price:'88',
                goods_no:'7894654',
                stock_quantity:'40',
                add_time:new Date()
            }
            this.goodsinfo=goods_info;
        },
        goDesc(id){
            //跳转到图文介绍
            this.$router.push({name:'goodsDesc',params:{id}})
        },
        goComment(id){
            //点击跳转到评论页面
            this.$router.push({name:'goodsComment',params:{id}})
        },
        addToShopCar(){
            //添加到购物车
            this.ballFlg = !this.ballFlg;
            // {id:商品的id,count:商品的数量,price:商品的价格,selected:false }
            //拼接处一个 要保存到 store 中 car 数组里的 商品信息
            var goodsinfo_data={
                id:this.id,
                count:this.selectCount,
                price:this.goodsinfo.sell_price,
                selected:true
            }
            //调用 store 中的 mutations 来 将商品加入 购物车
            this.$store.commit("addToCar",goodsinfo_data)
        },
        beforeEnter(el){
            el.style.transform = "translate(0,0)";
        },
        enter(el,done){
            el.offsetWidth;
            //小球动画 优化
            // 先分析导致动画 不准确的原因
            //1.最终位置不能定死
            //2. 分辨率不同情况下 动画也不准确
            //因此不经 将位置 坐标 写死 应 根据不同情况 动态计算位置
            //先得到 灰标 的横纵坐标 再得到 小球 一开始的横纵左边
            // 取两个对应横纵坐标差  domObj.getBoundingClientRect()

            //获取小球 在页面中的位置
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            console.log(ballPosition)
            //获取灰标位置
            const badgePosition = document.getElementById("badge").getBoundingClientRect();
            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;

            // 字符串拼接 es6 `` 模板字符串 ${}



            el.style.transform = `translate(${xDist}px,${yDist}px)`;
            el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
            done();
        },
        afterEnter(el){
            this.ballFlg = !this.ballFlg;
        },
        getSelectCount(count){
            //当子组件把选中的数量传递给 父组件的时候 把选中的值保存到data
            if(count>=this.goodsinfo.stock_quantity){
                console.log('父组件拿到'+ this.goodsinfo.stock_quantity)
                this.selectCount = this.goodsinfo.stock_quantity;
            }else{
                console.log('父组件拿到'+ count)
                this.selectCount = count;
            }
        }
    },
    components:{
        swiper,
        numbox
    }
}
</script>
<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
    .now_price{
        font-size: 16px;
        color: red;
        font-weight: bold;
    }
    .mui-card-footer{
        display: block;
        button{
            margin: 15px 0;
        }
    }
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top: 390px;
        left: 146px;
    }
}
</style>