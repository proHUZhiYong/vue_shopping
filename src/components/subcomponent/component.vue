<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容(最多120字)" v-model="msg" maxlength="120"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in comments" :key="i">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;匿名用户&nbsp;&nbsp;发表时间:2019-12-12 12:12:12
                    </div>
                <div class="cmt-body">
                    {{item.con === undefined ? '此用户很懒，啥都没说':item.con }}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMoreComments">加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from "mint-ui";
export default{
    data(){
        return{
            pageindex:1 ,//默认展示第一页数据
            comments:[
                {id:new Date(),con:"第1首"},
                {id:new Date(),con:"第2首"},
                {id:new Date(),con:"第3首"},
                {id:new Date(),con:"第4首"},
                {id:new Date(),con:"第5首"},
                {id:new Date(),},
            ],
            msg:""//评论
        }
    },
    created(){
        this.getComment()
    },
    mounted(){
        
    },
    methods:{
        getComment(){
            // this.$http.get("api/getcomment/"+this.id+"?pagindex="+this.pageindex)
            // .then(result =>{
            //     if(result.body.status ===0){
            //         this.comments = result.body.message;
            //     }else{
                if(this.pageindex>=2){
                    this.comments=this.comments.concat([{id:new Date(),con:'第二页第一条'}])
                }
                    Toast('获取评论失败')
                    console.log(this.id)
                 
            //     }
            // })
        },
        getMoreComments(){
            this.pageindex++;
            this.getComment();
        },
        postComment(){//发表评论
        //校验内容是否为空
        if(this.msg.trim().length === 0){
            return Toast('评论内容不能为空')
        }
        // this.$http.post("api/postcomment/"+this.$route.params.id,{content:this.msg.trim()})
        // .then(function(result){
        //     if(result.body.status === 0){
                var cmt = {id:new Date(),con:this.msg.trim()}
                this.comments.unshift(cmt);
                this.msg=""
        //     }else{

        //     }
        // })
        }
    },
    props:["id"]
}
</script>

<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin:5px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2rem;
            }
        }
    }
}
</style>