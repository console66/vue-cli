<template>
    <div class="no-thing">
        <!-- <img src="../../assets/images/menu/pic_fail_s.svg" alt=""> -->
        <p>{{title}}</p>
    </div>
</template>

<script>
    export default {
        name: "index",
        props:{
            title:{
                type: String,
                default: '暂无数据'
            }
        }
    }
</script>

<style scoped lang="less">
    .no-thing{
        img {
            display: block;
            margin: 50px auto 0;
            width: 170px;
            height: 170px;

        }
        p{
            margin-top: 20px;
            color: #999;
            text-align: center;
            font-size: 36px;
        }
    }

</style>