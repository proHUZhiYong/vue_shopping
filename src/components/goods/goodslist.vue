<template>
    <div>
        <div class="goods-list">

            <div class="goods-item" v-for="(item,index) in goodslist" :key="index" @click="goDetail(item.id)">
                <img :src=item.src_ alt="">
                <h1 class="title">{{item.title}}</h1>
                <div class="info">
                    <p class="price">
                        <span class="now">￥899</span>
                        <span class="old">￥999</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩60件</span>
                    </p>
                </div>
            </div>
            <mt-button type="danger" size='large' @click="getMore">加载更多</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pageindex:1,//分页页数
            goodslist:[]//存放商品列表
        }
    },
    created(){
        this.getGoodList();
    },
    methods:{
        getGoodList(){
            // this.$http.get('api/getgoodlist>pageindex' + this.pageindex).then(result =>{
            //     if(result.body.status === 0){
            //         this.goodslist = result.body.message;
            //     }
            // })
            const list_arr=[
                {id:1,src_:'http://pic71.nipic.com/file/20150710/9448607_105753090000_2.jpg',title:"这是第一个商品"},
                {id:2,src_:'http://www.leawo.cn/attachment/201408/22/1723875_1408671905O1v3.jpg',title:"这是第二个商品"},
                {id:3,src_:'http://i1.sinaimg.cn/ent/d/2008-06-04/U105P28T3D2048907F326DT20080604225106.jpg',title:"这是第三个商品"},
            ]
            this.goodslist=this.goodslist.concat(list_arr);
        },
        getMore(){
            this.pageindex++
            this.getGoodList();
        },
        //跳转到详情页
        goDetail(id){
            console.log(this)
            // 区分 this.route 和 this.$router
            //this.$route 是路由参数对象 所有路由中的参数 params quary
            //this.$router 是路由导航对象 可以用js 代码实现路由前进后退
            // 第一种跳转
            // this.$router.push('/home/goodsinfo/'+id)
            //第二种跳转
            // this.$router.push({path:'/home/goodsinfo/'+id})
            //第三种跳转
            this.$router.push({name:'goodsinfo',params:{id:id}})
        }
    }
    
}
</script>
<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 0 7px;
    justify-content: space-between;

    .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 3px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 292px;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }
        .info{
            background-color: #ddd;
            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                .now{
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size: 13px;
            }
        }
    }
}
</style>