<template>
  <div>
    <mt-swipe :auto="4000">
      <!-- 在组件中使用 v-for 循环 要绑定key -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">{{item.name}}</mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格->六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbotuList: [
        { url: "1", name: "第一张轮播" },
        { url: "2", name: "第二张轮播" },
        { url: "3", name: "第三张轮播" }
      ] //保存轮播图的数组
    };
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
.mint-swipe {
  height: 200px;
}
// sass 语法
.mint-swipe-item {
  &:nth-child(1) {
    background-color: red;
  }
  &:nth-child(2) {
    background-color: blue;
  }
  &:nth-child(3) {
    background-color: salmon;
  }
}
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