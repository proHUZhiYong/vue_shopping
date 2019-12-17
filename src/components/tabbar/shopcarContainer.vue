<template>
    <div class="shopcar-container">
        <div class="goods-list">
            <!-- 商品列表区域 -->
            <div class="mui-card" v-for="(item,index) in goodsList" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img :src="item.src" alt="">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">￥{{item.price}}</span>
                                <numbox :initCount='$store.getters.getGoodsCount[item.id]' :goodsid='item.id'></numbox>
                                <!-- 如何从购物车中获取 商品的数量 -->
                                <!-- 可以先创建一个 空对象 然后循环购物车中的所有商品数据，吧当前循环这条商品的id
                                作为对象的属性名，count 作为对象的属性值这样 吧所有的 商品 循环一遍 就会得到一个对象
                                {1:4} -->
                                <a href="#" @click.prevent="remove(item.id,index)">删除</a>
                                <!-- remove(item.id,index)  id 用来删除 store 中的数据 index 用来删除 goodslist中的数据 -->
                            </p>
                        </div>
                    </div>
				</div>
			</div>
        </div>
        <!-- 结算区 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品 <span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span> 件，总价<span class="red">￥{{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
        <p>{{$store.getters.getGoodsSelected}}</p>
    </div>
</template>
<script>
import numbox from '../subcomponent/shopcar_numbox.vue'

export default{
    data(){
        return{
            goodsList:[]//购物车中所有商品数据
        }
    },
    created(){
        this.getGoodsList();
        console.log(this.goodsList)
    },
    methods:{
        getGoodsList(){
            //获取 所有 store  中的商品的 id 然后 拼接 一个 用逗号分隔的字符串
            var idArr = [];
            this.$store.state.car.forEach(item => idArr.push(item.id))
            //如果 购物车没有商品 直接返回 不请求数据
            if(idArr.length<=0){
                return;
            }
            // this.$http.get('api/' + idArr.join(',')).then(result =>{
            //     if(result.body.status === 0){
            //         this.goodsList = result.body.message;
            //     }
            // })
            console.log(idArr)
            console.log(this.$store.state.car)
            this.$store.state.car.forEach(i =>{
                if(i.id==1){
                     this.goodsList.push({id:1,count:i.count,price:i.price,src:'http://pic71.nipic.com/file/20150710/9448607_105753090000_2.jpg',title:"这是第一个商品"})
                }
                if(i.id==2){
                    this.goodsList.push({id:2,count:i.count,price:i.price,src:'http://img2.imgtn.bdimg.com/it/u=4145052645,1255376937&fm=26&gp=0.jpg',title:"这是第二个商品"})
                }
                if(i.id==3){
                    this.goodsList.push({id:3,count:i.count,price:i.price,src:'http://i1.sinaimg.cn/ent/d/2008-06-04/U105P28T3D2048907F326DT20080604225106.jpg',title:"这是第三个商品"})
                }
            })
        },
        remove(id,index){
            //点击删除 把商品 从store 中根据传递的id 删除，
            //同时 把 当前组件中的 goodslist 中对应要删除的商品 根据 index 删除
            this.goodsList.splice(index,1);
            this.$store.commit('removeFormCar',id);
        },
        selectedChanged(id,val){
            //每当点击开关 把最新的开关状态 同步到 store中
            console.log(id + "-----" +val)
            this.$store.commit("updateGoodsSelected",{id,selected:val})
        }
    },
    components:{
        numbox
    }
}
</script>
<style lang="scss" scoped>
.shopcar-container{
    background-color: #eee;
    overflow: hidden;
    .goods-list{
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }
        img{
            width: 60px;
            height: 60px;
        }
        h1{
            font-size: 13px;
        }
        .info{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .price{
                color: red;
                font-weight: bold;
            }
        }
    }
    .jiesuan{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .red{
            color: red;
            font-weight: bold;
            font-size: 16px;
        }
    }
}
</style>