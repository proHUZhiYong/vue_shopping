<template>
    <div>
        <h3>商品评论页面</h3>
        <cmtbox :id="this.$route.params.id"></cmtbox>
    </div>
</template>
<script>
import cmtbox from '../subcomponent/component.vue'
export default {
    components:{
        cmtbox
    }
}
</script>
<style lang="scss" scoped>

</style>