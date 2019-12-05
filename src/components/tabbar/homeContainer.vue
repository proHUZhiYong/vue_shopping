<template>
  <div>
    <!-- 轮播图 -->
    <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>
    <!-- 九宫格->六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="home/newsList">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="home/photolist">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="home/goodsList">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import swiper from "../subcomponent/swiper.vue"
export default {
  data() {
    return {
      lunbotuList: [
        { src: "http://pic31.nipic.com/20130629/13140082_200149691195_2.jpg", name: "第一张轮播" },
        { src: "http://b-ssl.duitang.com/uploads/blog/201401/09/20140109163745_PVkuh.jpeg", name: "第二张轮播" },
        { src: "http://file02.16sucai.com/d/file/2014/0829/372edfeb74c3119b666237bd4af92be5.jpg", name: "第三张轮播" }
      ] //保存轮播图的数组
    };
  },
  components:{
    swiper
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      //获取轮播图数据
      // this.$http.get("http://vue.stydyit.io/api/getLunbo").then(result =>{debugger
      //     console.log(result)
      //     if(result.body.status == 0){
      //         this.lunbotuList=result.body.message;
      //     }else{
      Toast("加载轮播图失败");
      //     }
      // })
    }
  }
};
</script>
<style lang="scss" scoped>
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: 0;
    .mui-media-body{
        font-size: 13px;
    }
}
.mui-grid-view.mui-grid-9 .mui-media{
    border: 0;
}
</style>