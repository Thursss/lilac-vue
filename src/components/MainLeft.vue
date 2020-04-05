<template>
  <section class="lilac-main-left">
    <div class="aside-list">
      <el-card class="list-ul" :body-style="{ padding: '10px' }">
        <div class="list-li">
          <el-link icon="el-icon-s-cooperation" :class="{active: currentPage === 'dashboard'}" :underline="false" @click="curPage('dashboard')">工作台</el-link>
        </div>
      </el-card>
      <el-card class="list-ul" :body-style="{ padding: '10px' }">
        <div class="list-li">
          <el-link icon="el-icon-edit" :class="{active: currentPage === 'doc'}" :underline="false" @click="curPage('doc')">文档</el-link>
        </div>
        <div class="list-li" :body-style="{ padding: '10px' }">
          <el-link icon="el-icon-edit" :underline="false">知识库</el-link>
        </div>
      </el-card>
      <el-card class="list-ul" :body-style="{ padding: '10px' }">
        <div class="list-li">
          <el-link icon="el-icon-edit" :underline="false">关注</el-link>
        </div>
        <div class="list-li" :body-style="{ padding: '10px' }">
          <el-link icon="el-icon-edit" :underline="false">收藏</el-link>
        </div>
      </el-card>
    </div>
  </section>
</template>
<script>
  export default {
    data(){
      return {
        currentPage: 'dashboard'
      }
    },
    methods: {
      curPage(page) {
        this.currentPage = page
        this.$emit('curPage', page)
      }
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
          line-height: 40px;
          transition: .2s;
          &.active{
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