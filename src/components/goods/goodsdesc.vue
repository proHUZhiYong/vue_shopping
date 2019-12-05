<template>
    <div>
        <h3>图文介绍页面</h3>
        <div>
             这是第{{id}}个的详情
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            info:{},
            id:this.$route.params.id
        }
    },
    created(){
        this.getGoodsDesc()
    },
    methods:{
        getGoodsDesc(){
            // this.$http.get('api/goods/getdesc' + this.$route.params.id).then(result =>{
            //     if(result.body.status === 0){
            //         this.info = result.body.message[0];
            //     }
            // })
        }
    }
}
</script>
<style lang="scss" scoped>

</style>