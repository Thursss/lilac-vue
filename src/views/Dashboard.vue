<template>
  <section class="lilac lilac-dashboard">
    <div class="header">
      <v-header :userInfo="userInfo"></v-header>
    </div>
    <div class="main">
      <el-container class="container">
        <el-aside width="200px">
          <v-main-left></v-main-left>
        </el-aside>
        <el-main>Main</el-main>
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
  import MainLeft from '@/components/MainLeft.vue'

  import { getDocList, getSubList, getUserInfo } from '@/api/export.js'
  import { Message } from 'element-ui'

  export default {
    name: 'dashboard',
    data() {
      return {
        docList: [],
        subList: [],
        userInfo: {}
      }
    },
    components: {
      'v-header': Header,
      'v-footer': Footer,
      'v-main-left': MainLeft
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
      },
      async getUserInfo() {
        let _this = this
        try {
          let userInfo = await getUserInfo()
          let {
            data,
            errno
          } = userInfo

          if (errno === -1) {
            if (data.status === 401) {
              Message({
                message: 'token过期，需要重新登录',
                type: 'warning',
                duration: 1000,
                onClose() {
                  // _this.$router.push({
                  //   path: '/login'
                  // })
                }
              })
            }
          }
          if (errno === 0) {
            _this.userInfo = userInfo.data
          }
        } catch (err) {
          console.log(err)
        }
      }
    },
    created() {
      this.getDocList()
      this.getSubList()
      this.getUserInfo()
    }
  }
</script>
<style lang="less" scoped>
  .main{
    .container{
      margin: auto;
      width: 100%;
      max-width: 1216px;
    }
  }
</style>