<template>
    <div>
        <!-- 顶部滑动条 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id == 0 ? 'mui-active':'']" v-for="(item,index) in this.cates" :key="index">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// 导入 mui
import mui from "../../lib/mui/js/mui.min.js"

export default{
    data(){
        return{
            //所有图片别表 数组
            cates:[
                {title:'全部',id:0},
                {title:'推荐',id:1},
                {title:'新闻',id:2},
                {title:'明星',id:3},
                {title:'照片',id:4},
                {title:'美景',id:5},
                {title:'卡通动漫',id:6},
            ]
        }
    },
    created(){
        this.getAllCategory();
    },
    mounted(){//页面结构已经渲染好 并放到页面中 操作元素最早在 mounted
        // 初始化 mui 滑动控件
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
        getAllCategory(){
            //获取所有 图片分类
            this.$http.get('').then(result =>{
                if(result.body.status === 0){
                    // 手动拼接完整列表 不包含 全部需要
                    result.body.message.unshift({title:'全部',id:0})
                    this.cates = result.body.message;
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
*{
    touch-action: pan-y;
}
</style>
