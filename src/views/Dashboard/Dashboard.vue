<template>
  <section class="lilac lilac-dashboard">
    <div class="header">
      <v-header></v-header>
    </div>
    <div class="main">
      <div class="container">
        <el-row :gutter="20">
          <el-col :span="6" class="main-left">
            <v-main-left :currentPath="currentPath"></v-main-left>
            </el-col>
          <el-col :span="18" class="main-right">
            <v-main v-if="currentPath === '/dashboard'"></v-main>
            <v-doc v-else-if="currentPath === '/dashboard/doc'"></v-doc>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="footer">
      <v-footer></v-footer>
    </div>
  </section>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import MainLeft from '@/components/MainLeft.vue'
  import Main from '@/views/Dashboard/Main.vue'
  import Doc from '@/views/Dashboard/Doc.vue'

  import { getDocList, getSubList } from '@/api/export.js'

  export default {
    name: 'dashboard',
    data() {
      return {
        docList: [],
        subList: [],
        userInfo: {},
        currentPath: '/dashboard'
      }
    },
    components: {
      'v-header': Header,
      'v-footer': Footer,
      'v-main-left': MainLeft,
      'v-main': Main,
      'v-doc': Doc,
    },
    methods: {
      async getDocList(params = {}) {
        let _this = this
        try {
          let docList = await getDocList(params)
          let {
            data,
            errno
          } = docList

          if (errno === 0) {
            _this.docList = data
          }
        } catch (err) {
          console.log(err)
        }
      },
      async getSubList(params = {}) {
        let _this = this
        try {
          let subList = await getSubList(params)
          let {
            data,
            errno
          } = subList

          if (errno === 0) {
            _this.subList = data
          }
        } catch (err) {
          console.log(err)
        }
      }
    },
    beforeRouteUpdate (to,from, next) {
      this.currentPath = to.path
      next()
    },
    created() {
      this.currentPath = this.$route.path
      this.getDocList()
      this.getSubList()
    }
  }
</script>
<style lang="less" scoped>
  .main {
    .container {
      margin: auto;
      width: 100%;
      max-width: 1216px;
      .main-right{
        padding: 20px;
      }
    }
  }
</style>