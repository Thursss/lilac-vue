<template>
  <div class="lilac lilac-dashboard">
    <router-link to="/login">登录</router-link>
    <el-button @click="logout">退出登录</el-button>
    <div>
      {{ docList }}
    </div>
    <div>
      {{ subList }}
    </div>
    <div>
      {{ userInfo }}
    </div>
  </div>
</template>

<script>
  import { logout, getDocList, getSubList, getUserInfo } from '@/api/export.js'
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
                  _this.$router.push({
                    path: '/login'
                  })
                }
              })
            }
          }
          if(errno === 0){
            _this.userInfo = userInfo
          }
        } catch (err) {
          console.log(err)
        }
      },
      logout() {
        logout(this)
      }
    },
    created() {
      this.getDocList()
      this.getSubList()
      this.getUserInfo()
    }
  }
</script>