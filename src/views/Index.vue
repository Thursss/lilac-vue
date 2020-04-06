<template>
    <section class="box">
        <h1>你好,欢迎你来这里</h1>
        <router-link to="/explore">____go</router-link>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .box{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 200px;
        margin: auto;
        text-align: center;
        font-size: 40px;
        h1{
            display: inline-block;
        }
    }
</style>