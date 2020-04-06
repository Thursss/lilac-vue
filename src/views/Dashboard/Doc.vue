<template>
  <section class="lilac lilac-doc">
    <el-row :gutter="20" class="top">
      <el-col :span="16" class="top-left"></el-col>
      <el-col :span="8" class="top-right">
        <el-row :gutter="10"  class="top-right-box">
          <el-col :span="14">
            <el-input
              placeholder="搜索"
              prefix-icon="el-icon-search"
              size="small"
              v-model="docKeyword">
            </el-input>
          </el-col>
          <el-col :span="10">
              <!-- <el-button type="primary" size="mini">新建文档</el-button> -->
              <el-dropdown @command="handleCommand">
                <el-button type="primary" size="small">
                  新建文档<i class="el-icon-arrow-down el-icon--right"></i>
                  <router-link to="/" class="new-doc"></router-link>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="**">
                      新建文档
                    <!-- <router-link to="/" class="new-doc"></router-link> -->
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="名称"
        show-overflow-tooltip="...">
        <template slot-scope="scope">
          <i class="el-icon-tickets"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="状态"
        show-overflow-tooltip="...">
      </el-table-column>
      <el-table-column
        prop="address"
        label="归属"
        show-overflow-tooltip="...">
      </el-table-column>
      <el-table-column
        align="right">
        <template>
          <el-button type="text" size="small" >编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海'
          }
        ],
        docKeyword: ''
      }
    },
    methods: {
      handleCommand(command){
        console.log(command)
      }
    }
  }
</script>

<style lang="less" scoped>
  .top{
    width: 100%;
    height: 60px;
    background-color: #fff;
    .el-col{
      height: 100%;
    }
    .top-right{
      display: flex;
      align-items: center;
      height: 100%;
      .top-right-box{
        .new-doc{
          color: #fff;
        }
      }
    }
  }
</style>