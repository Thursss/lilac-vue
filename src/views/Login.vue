<template>
  <section class="lilac lilac-login">
    <div class="container">
      <div class="lilac-from">
        <div class="lilac-from-main">
          <div class="lilac-from-login">
            <router-link to='/'>
              <el-image style="width: 100px; height: 100px" :src="require('@/assets/images/logo/true.png')"
                fit="contain"></el-image>
            </router-link>
          </div>
          <div class="lilac-from-slogon">
            <h2 class="slogon-main">
              <span>丁香</span>
            </h2>
            <p class="slogon-subhead">
              <span>我的云端知识库</span>
            </p>
          </div>
          <div class="lark-form-content">
            <el-form ref="login_form" :rules="form_rules" :model="form_data" label-width="80px">
              <el-form-item prop="account" label-width="0">
                <el-input v-model="form_data.account" placeholder="手机号" prefix-icon="el-icon-user">
                </el-input>
              </el-form-item>
              <el-form-item prop="password" label-width="0">
                <el-input show-password v-model="form_data.password" placeholder="密码" prefix-icon="el-icon-lock">
                </el-input>
              </el-form-item>
              <el-form-item label-width="0">
                <el-button style="width: 100%" type="primary" @click="onSubmit('login_form')" :loading="loading">登录
                </el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="login-foot">
            <!-- <router-link to='/register' class="register">找回密码</router-link> -->
            <router-link to='/register' class="register">注册</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { login } from '@/api/export.js'
  import { Message } from 'element-ui'
  export default {
    name: 'Login',
    data() {
      return {
        form_data: {
          account: '',
          password: ''
        },
        form_rules: {
          account: [
            { required: true, message: '输入正确手机号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '输入密码', trigger: 'change' },
            { min: 6, max: 24, message: '长度在 6 个字符以上', trigger: 'blur' }
          ],
        },
        select: '',
        loading: false
      }
    },
    methods: {
      onSubmit(formName) {
        this.loading = true
        this.$refs[formName].validate(async (valid) => {
          try {
            if (valid) {
              let result = await login(this.form_data)
              this.loading = false
              let {
                data,
                errno
              } = result
              if (errno === 0) {
                if (data.status === 200) {
                  //保存token
                  localStorage.setItem('Token', data.token)
                  //用户首页
                  this.$router.push({
                    path: '/dashboard'
                  })
                }
              }
              if (errno === -1) {
                Message({
                  message: '登录失败：' + (data.msg || '失败'),
                  type: 'error',
                  duration: 2000
                })
              }
            } else {
              this.loading = false
              return false;
            }
          } catch (err) {
            this.loading = false
            console.error(err)
            Message({
              message: '登录失败',
              type: 'error',
              duration: 2000
            })
          }
        })
      },
    },
    created() {
    }
  }
</script>

<style lang="less" scoped>
  .lilac-login {
    width: 100%;
    height: 100%;
    background-color: #fafafa;
  }
  .lilac-from {
    max-width: 450px;
    margin: auto;
    padding-top: 40px;
    .lilac-from-main {
      padding: 40px 20px 20px;
      border-radius: 3px;
      background-color: #fff;
      border: 1px solid #f6edf6;

      .lilac-from-slogon {
        .slogon-main {
          margin-top: 20px;
          margin-bottom: 0;
          font-size: 32px;
        }

        .slogon-subhead {
          margin-top: 8px;
          margin-bottom: 10px;
          font-size: 18px;
        }
      }

      .lark-form-content {
        width: 400px;
        margin: 30px auto 0;

        .el-input /deep/ input {
          &:hover {
            border-color: #d9b6da;
          }

          &:focus {
            border-color: #a179a3;
          }
        }

        .el-button {
          background-color: #a179a3;
          border-color: #a179a3;

          &:hover {
            background-color: #a179a3df;
          }
        }
      }

      .login-foot {
        .register {
          color: #5e485f;
          text-decoration: none;
          padding: 0 10px;

          &:hover {
            color: #3f3140;
          }
        }
      }
    }
  }

  .el-form-item {
    margin-left: 0;
  }

  .pwd-view {
    cursor: pointer;
  }

  @media screen and (max-width: 375px) {
    .lilac-from .lilac-from-main .lark-form-content {
      width: auto;
    }
  }
</style>