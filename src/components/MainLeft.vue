<template>
  <section class="lilac-main-left">
    <div class="aside-list">
      <el-card class="list-ul" :body-style="{ padding: '10px' }">
        <div class="list-li">
          <router-link
            :class="{on: currentPath === '/dashboard'}"
            to="/dashboard"
          ><i class="el-icon-s-cooperation"></i>工作台</router-link>
        </div>
      </el-card>
      <el-card class="list-ul" :body-style="{ padding: '10px' }">
        <div class="list-li">
          <router-link
            :class="{on: currentPath === '/dashboard/doc'}"
            to="/dashboard/doc"
          ><i class="el-icon-document"></i>文档</router-link>
        </div>
        <div class="list-li" :body-style="{ padding: '10px' }">
          <router-link
            :class="{on: currentPath === '/dashboard/sub'}"
            to="/dashboard/sub"
          ><i class="el-icon-folder"></i>知识库</router-link>
        </div>
      </el-card>
      <el-card class="list-ul" :body-style="{ padding: '10px' }">
        <div class="list-li">
          <router-link
            :class="{on: currentPath === '/dashboard/**'}"
            to=""
          ><i class="el-icon-loading"></i>开发中</router-link>
        </div>
      </el-card>
    </div>
  </section>
</template>
<script>
  export default {
    props: {
      currentPath: {
        type: String,
        default: '/dashboard'
      }
    },
    methods: {
    }
  }
</script>

<style lang="less" scoped>
  a {
    text-decoration: none;
  }

  .lilac-main-left {
    text-align: left;
    padding: 0 10px;
  }

  .aside-list {
    padding: 20px 0;

    .list-ul {
      position: relative;
      box-shadow: none;
      background-color: transparent;
      border: none;
      &::after{
        content: ' ';
        position: absolute;
        bottom: 0;
        left: 27px;
        display: block;
        width: 30px;
        height: 1px;
        background-color: rgba(204, 204, 204, 0.603);
      }
      .list-li {
        a{
          display: block;
          margin: 0 15px;
          color: #606266;
          font-weight: 500;
          font-size: 14px;
          line-height: 40px;
          transition: .2s;
          i{
            margin:0 5px
          }
          &.on{
            color: #25b864;
            background: #f5f5f5;
            box-shadow: -10px 0 #f5f5f5;
          }
          &:hover{
            color: #25b864;
            background: #f5f5f5;
            box-shadow: -10px 0 #f5f5f5;
          }
        }
      }
    }
  }
</style>