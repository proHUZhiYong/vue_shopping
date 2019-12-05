<template>
    <div>
        <h3>图片详情</h3>

        <!-- 图片内容 -->
        <div class="content">
            {{photoinfo}}
        </div>
        <!-- 缩略图 -->
        <div>
            <vue-preview :slides="slide1" class="thumbs_img"></vue-preview>
        </div>
        <!-- 评论子组件 -->
        <comment_ :id="id"></comment_>    
    </div>
</template>

<script>
import comment from '../subcomponent/component.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            photoinfo:"",
            slide1: [
                {
                    src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                    msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                    alt: 'picture1',
                    title: 'Image Caption 1',
                    w: 600,
                    h: 400
                },
                {
                    src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                    msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                    alt: 'picture2',
                    title: 'Image Caption 2',
                    w: 600,
                    h: 400
                }
            ]
        }
    },
    components:{
        'comment_':comment
    },
    created(){
        this.getPhotoInfo(this.id);
    },
    methods:{
        getPhotoInfo(sid){
            // this.$http.get("api/getPhotoInfo/" + this.id).then(result =>{

            // })
            const list =[
                {id:1,src_:'http://pic26.nipic.com/20121215/9252150_202426154000_2.jpg',content:"这是第一个图片的内容,哈哈"},
                {id:2,src_:'http://pic29.nipic.com/20130527/9331768_163938364000_2.jpg',content:"这是第二个图片的内容,冲鸭"},
                {id:3,src_:'http://img4.imgtn.bdimg.com/it/u=2170225557,758070829&fm=26&gp=0.jpg',content:"这是第三个图片的内容,你是最胖的"},
                {id:4,src_:'http://img0.imgtn.bdimg.com/it/u=452966427,3842240659&fm=26&gp=0.jpg',content:"这是第四个图片的内容,不要走"},
            ]
            this.photoinfo=list[sid - 1].content
            console.log(this.photoinfo)
        }
    }
}
</script>

<style lang="scss">
.thumbs_img{
    overflow: hidden;
    figure{
        float: left;
        margin: 0;
    }
    figure img{
        width: 100px;
        margin: 10px;
        box-shadow: 0 0 8px #999;
    }
}
</style>
