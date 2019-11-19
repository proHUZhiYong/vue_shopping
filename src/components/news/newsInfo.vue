<template>
    <div>
        <h3>新闻详情 -- {{id}}</h3>
        <!-- 评论 -->
        <component-make :id="this.id"></component-make>
    </div>
</template>
<script>
import component from "../subcomponent/component.vue"
export default{
    data(){
        return{
            id:this.$route.params.id
        }
    },
    components:{
        "component-make":component
    }
}
</script>
<style lang='scss' scoped>
</style>