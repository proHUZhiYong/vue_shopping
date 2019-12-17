<template>
    <div class="goodsinfo_numbox">
        <div class="mui-numbox" data-numbox-min='1' style="height:25px;">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" :value="initCount" @change="countChange" ref="numbox" readonly/>
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
    <!-- 子组件什么时候把数据传递给 父组件 不管点击加号还是减号都需要立马传值-->
    <!-- 直接监听文本框change 时间 -->
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js"
export default {
    mounted(){
        //初始化数字选择组件
        mui(".mui-numbox").numbox();
    },
    methods:{
        countChange(){
            //数量改变
            // console.log(this.$refs.numbox.value)
            //每当 数值改变 则 立即把 最新的数量同步到 购物车的 store 中覆盖之前的 数量值
            this.$store.commit('updateGoodsInfo',
            {
                id:this.goodsid,
                count:this.$refs.numbox.value
            })
        }
    },
    props:["initCount","goodsid"]
}
</script>
<style lang="scss" scoped>
.goodsinfo_numbox{
    display: inline;
}
</style>