<template>
    <div class="goodsinfo_numbox">
        <!-- 不知道 什么时候获取到 max值 -->
        <!-- 使用watch 监听父组件传递过来的 max 值 不管 watch 被触发几次 但是最后一次一定是一个合法的max 数值 -->
        <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChange" ref="numbox"/>
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
        console.log(this.max)
    },
    methods:{
        countChange(){
            //每当文本框的数据被修改立即 把数据 通过事件调用 传递给 父组件
            // console.log(this.$refs.numbox.value)
            this.$emit('getCount',parseInt(this.$refs.numbox.value))
        }
    },
    props:["max"],
    watch:{
        //属性监听
        // max:function(newVal,oldVal){
        //     //mui js更新 最大值 max
        //     mui(".mui-numbox").numbox().setOption("max",newVal)
        // }
    }
}
</script>
<style lang="scss" scoped>
.goodsinfo_numbox{
    display: inline;
}
</style>