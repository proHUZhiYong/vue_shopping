<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- 在组件中使用 v-for 循环 要绑定key -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url"><img :src="item.src" :class="{'full':isfull}" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    props:['lunbotuList',"isfull"]
}
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
}
// sass 语法
.mint-swipe-item {
    text-align: center;
//   &:nth-child(1) {
//     background-color: red;
//   }
//   &:nth-child(2) {
//     background-color: blue;
//   }
//   &:nth-child(3) {
//     background-color: salmon;
//   }
  img{
      height: 100%;
  }
}
.full{
    width: 100%;
}
</style>