<template>
  <div class="login-container">
    <el-form class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>

      <el-form-item prop="username">
        <!-- <span class="svg-container">账号</span> -->
        <i class="icon-class el-icon-user"></i>
        <el-input
          v-model="formData.account"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <!-- <span class="svg-container"> -->
        <!-- <svg-icon icon-class="password" /> -->

        <!-- </span> -->
        <i class="icon-class el-icon-lock"></i>
        <el-input
          v-model="formData.password"
          placeholder="Password"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter="handleLogin"
        />
      </el-form-item>

      <el-button
        :loading="!ableToSubmit"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click.prevent="handleLogin"
      >
        Login
      </el-button>

      <div class="tips">
        <span style="margin-right: 20px">username: admin</span>
        <span>password: 123</span>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from 'vue'
import { setCookie } from '@/utils/cookie'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage, ElNotification } from 'element-plus'

export default defineComponent({
  name: 'Login',
  setup() {
    const formData = reactive({
      account: 'admin',
      password: '123',
    })
    const ableToSubmit = ref(true)
    const urlQuery = ref('/')
    const route = useRoute()
    const router = useRouter()
    const titleLink = `<div>
          <div>github</div>
            <a style="text-decoration: none;color: #409eff" href="http://www.github.com/WalkAlone0325" target="_blank">http://www.github.com/WalkAlone0325</a>
          </div>`
    onMounted(() => {
      ElNotification({
        type: '',
        dangerouslyUseHTMLString: true,
        message: titleLink,
        duration: 5 * 1000,
      })
      if (route.query.redirect) {
        urlQuery.value = route.query.redirect as any
      }
    })

    const handleLogin = () => {
      const { account, password } = formData
      if (!account) {
        ElMessage.error('请输入账号')
        return
      }
      if (!password) {
        ElMessage.error('请输入密码')
        return
      }

      setCookie('DEFAULT_TOKEN', JSON.stringify(formData), 1)
      router.push(urlQuery.value)
    }

    return {
      ableToSubmit,
      handleLogin,
      formData,
    }
  },
})
</script>

<style lang="scss">
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.icon-class {
  color: #eee;
  font-size: 20px;
  margin-left: 10px;
  // padding-top: 15px;
}
.login-container {
  min-height: 100vh;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
