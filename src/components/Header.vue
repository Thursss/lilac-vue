<template>
  <section class="lilac lilac-header">
    <div class="clearfix header-container">
      <div class="logo header-nav-left">
        <router-link to='/dashboard' class="logo-link">
          <el-image :src="require('@/assets/images/logo/true.png')" fit="contain">
          </el-image>
          <p class="logo-title">丁香</p>
        </router-link>
      </div>
      <div class="header-nav header-nav-right">
        <ul class="user-head-ul">
          <li class="user-head-li user-head">
            <el-dropdown>
              <div class="user-head-but">
                <el-avatar size="medium" :src="userInfo.user_image_url"></el-avatar>
                <i class="el-icon-caret-bottom el-icon--right"></i>
              </div>
              <el-dropdown-menu class="user-head-menu" slot="dropdown">
                <div class="user-head-info">
                  <p class="user-name">{{ userInfo.user_name }}</p>
                  <p class="user-description">{{ userInfo.user_description }}</p>
                </div>
                <el-dropdown-item icon="el-icon-user">
                  <router-link to="/my">个人页面</router-link>
                </el-dropdown-item>
                <el-dropdown-item icon="el-icon-setting">
                  <router-link to="/setting">设置</router-link>
                </el-dropdown-item>
                <el-dropdown-item icon="el-icon-switch-button">
                  <a href="#" @click="logout">退出登录</a>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
      <div class="header-main">
        <div class="header-search">
          <el-dropdown trigger="click" placement="bottom-start">
            <div class="el-dropdown-link">
              <el-input style="width: auto;" placeholder="搜索" prefix-icon="el-icon-search" size="small" clearable
                v-model="search">
              </el-input>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <p class="search-keyword">{{ search }}</p>
                <p class="search-tip">搜索与我相关</p>
              </el-dropdown-item>
              <el-dropdown-item>
                <p class="search-keyword">{{ search }}</p>
                <p class="search-tip">搜索丁香</p>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="header-nav-menu">
          <ul class="menu-ul">
            <li class="menu-li">
              <router-link to="/dashboard">工作台</router-link>
            </li>
            <li class="menu-li">
              <router-link to="/explore">发现</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { logout, getUserInfo } from '@/api/export.js'
  import { Message } from 'element-ui'

  export default {
    data() {
      return {
        userInfo: {},
        search: ''
      }
    },
    methods: {
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
      },
      logout() {
        logout(this)
      }
    },
    created() {
      // this.getUserInfo()
    }
  }
</script>

<style lang="less" scoped>
  .lilac-header {
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.06);
  }

  .header-container {
    width: 100%;
    height: 60px;
    max-width: 1216px;
    margin: 0 auto;
    padding: 0 16px;

    .logo {
      display: flex;
      align-items: center;
      float: left;
      height: 100%;
      min-width: 200px;
      text-align: left;

      .logo-link {
        margin-right: 20px;

        .el-image,
        .logo-title {
          display: inline-block;
          vertical-align: middle;
        }

        .el-image {
          margin-right: 10px;
        }

        .el-image /deep/ .el-image__inner {
          width: auto;
          height: 38px;
        }

        .logo-title {
          line-height: 34px;
          font-weight: bold;
          font-size: 20px;
          color: black;
        }
      }
    }

    .header-nav-right {
      float: right;
      height: 100%;

      .user-head-ul {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 10px;

        .user-head {
          cursor: pointer;

          .el-avatar,
          i {
            display: inline-block;
            vertical-align: middle;
          }
        }
      }
    }

    .header-main {
      display: flex;
      align-items: center;
      text-align: left;
      height: 100%;
      .header-nav-menu{
        .menu-ul{
          display: flex;
          align-items: center;
          margin-left: 25px;
          .menu-li{
            padding: 0 15px;
            a{
              text-decoration: none;
              color: #000;
              &.router-link-active{
                font-weight: bold;
              }
            }
          }
        }
      }
    }
  }

  .user-head-menu {
    color: #3f3140;

    .user-head-info {
      width: 250px;
      padding: 15px 20px;
      border-bottom: 1px solid #f5f5f5;
      color: #3f3140;

      .user-name {
        margin-bottom: 10px;
        line-height: 24px;
        font-weight: bold;
        font-size: 16px;
      }
    }

    .el-dropdown-menu__item {
      color: #3f3140;
      transition: all .8s;

      &:hover {
        background-color: #f6edf6;
      }

      a {
        color: #3f3140;
        text-decoration: none;
      }
    }
  }

  .el-dropdown-menu {
    .search-keyword,
    .search-tip {
      display: inline-block;
      margin: 0 10px;
    }
  }
</style>