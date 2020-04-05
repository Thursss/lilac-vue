<template>
  <section class="lilac lilac-dashboard">
    <div class="header">
      <v-header :userInfo="userInfo"></v-header>
    </div>
    <div class="main">
      <el-container class="container">
        <el-main>Main</el-main>
        <el-aside width="200px">
          aside
        </el-aside>
      </el-container>
    </div>
    <div class="footer">
      <v-footer></v-footer>
    </div>
  </section>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    data() {
      return {}
    },
    components: {
      'v-header': Header,
      'v-footer': Footer
    },
  }
</script>
<style lang="less" scoped>
  .main {
    .container {
      margin: auto;
      width: 100%;
      max-width: 1216px;
    }
  }
</style>