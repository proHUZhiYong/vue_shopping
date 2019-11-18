<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'/home/newsinfo/' + item.id ">
                    <img class="mui-media-object mui-pull-left" src="../../images/shuijiao.png">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <!-- 定义过滤器改变时间格式 -->
                            <span>发表时间：{{item.time|dataFormat}}</span>
                            <!-- <span>发表时间：{{item.time|dataFormat('YYYY-MM-DD')}}</span> -->
                            <span>点击0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import {Toast} from "mint-ui";
    export default{
        data(){
            return{
                newsList:[]//新闻列表
            }
        },
        created(){
            this.getNewsList();
        },
        methods:{
            getNewsList(){
                // this.$http.get('').then(result =>{
                //     if(result.body.status === 0){
                            // this.newsList = result.body.message;
                //     }else{
                //         Toast('获取信息失败')
                //     }
                // })
                this.newsList = [
                    {id:1,picture:"../../images/shuijiao.png",title:"幸福",time:new Date()},
                    {id:2,picture:"../../images/shuijiao.png",title:"睡觉",time:new Date()},
                    {id:3,picture:"../../images/shuijiao.png",title:"看家",time:new Date()},
                    {id:4,picture:"../../images/shuijiao.png",title:"看家",time:new Date()},
                    {id:5,picture:"../../images/shuijiao.png",title:"看家",time:new Date()},
                    {id:6,picture:"../../images/shuijiao.png",title:"看家",time:new Date()},
                    {id:7,picture:"../../images/shuijiao.png",title:"看家",time:new Date()},
                    {id:8,picture:"../../images/shuijiao.png",title:"看家",time:new Date()},
                    {id:9,picture:"../../images/shuijiao.png",title:"看家",time:new Date()},
                    {id:10,picture:"../../images/shuijiao.png",title:"看家",time:new Date()},
                    {id:11,picture:"../../images/shuijiao.png",title:"看家",time:new Date()},
                    {id:12,picture:"../../images/shuijiao.png",title:"看家",time:new Date()},
                    {id:13,picture:"../../images/shuijiao.png",title:"看家",time:new Date()},
                    {id:14,picture:"../../images/shuijiao.png",title:"看家",time:new Date()},
                ]
                Toast("获取信息失败");
            }
        }
    }
</script>
<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{
          font-size:14px;  
        }
        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>