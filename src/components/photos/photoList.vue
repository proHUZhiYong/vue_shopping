<template>
    <div>
        <!-- 顶部滑动条 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id == 0 ? 'mui-active':'']" v-for="(item,index) in this.cates" :key="index" @tap="getPhotos(index)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <!-- 图片列表区域 -->
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
                <img v-lazy="item.src_">
            </router-link>
        </ul>
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
            ],
            list:[]//图片列表数组
        }
    },
    created(){
        this.getAllCategory();
        // 默认进入页面主动请求图片数据
        this.getPhotos(0);
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
        },
        getPhotos(id){
            this.list=[
                {id:1,src_:'http://pic26.nipic.com/20121215/9252150_202426154000_2.jpg'},
                {id:2,src_:'http://pic29.nipic.com/20130527/9331768_163938364000_2.jpg'},
                {id:3,src_:'http://img4.imgtn.bdimg.com/it/u=2170225557,758070829&fm=26&gp=0.jpg'},
                {id:4,src_:'http://img0.imgtn.bdimg.com/it/u=452966427,3842240659&fm=26&gp=0.jpg'},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
*{
    touch-action: pan-y;
}
.photo-list{
    list-style: none;
    margin: 0;
    padding: 0;
    padding: 10px;
    padding-bottom: 0;
    li{
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 10px #999;
        img{
            width: 100%;
            vertical-align: middle;
        }
        img[lazy="loaded"] {
            width: 100%;
            height: 300px;
            margin: auto;
        }
        
    }
}

</style>
