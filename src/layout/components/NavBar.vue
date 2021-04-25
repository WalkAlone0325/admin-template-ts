<template>
  <div class="navbar">
    <div class="hamburger-container" @click="toggleSideBar">
      <i class="el-icon-s-fold" v-if="opened"></i>
      <i class="el-icon-s-unfold" v-else></i>
    </div>
    <BreadCrumb class="breadcrumb-container" />
    <div class="right-menu">
      <Screenfull />
      <!-- 其它图标 -->
      <!-- <div class="inter">
      </div> -->

      <el-dropdown @command="handleDropLink" trigger="click">
        <span class="el-dropdown-link">
          <p>{{ username.account }}</p>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <!-- <el-dropdown-item icon="el-icon-switch-button" @click="logout"> -->
            <el-dropdown-item command="1">安全退出</el-dropdown-item>
            <el-dropdown-item command="2">我的博客</el-dropdown-item>
            <!-- Login Out -->
            <!-- </el-dropdown-item> -->
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { delCookie, getCookie } from '@/utils/cookie'
import settings from '@/settings'
import Screenfull from './Screenfull.vue'
import BreadCrumb from './BreadCrumb.vue'

export default defineComponent({
  name: 'NavBar',
  components: { Screenfull, BreadCrumb },
  setup() {
    const store = useStore()
    const router = useRouter()

    const username = getCookie('DEFAULT_TOKEN') ? JSON.parse(getCookie('DEFAULT_TOKEN')) : {}

    const opened = computed(() => store.state.settings.sidebar.opened)

    // 右侧下拉菜单
    const handleDropLink = (index: number): void => {
      if (index == 1) {
        delCookie('DEFAULT_TOKEN')
        router.push('/login')
      } else if (index == 2) {
        window.open(settings.blogUrl, '_blank')
      }
    }

    const toggleSideBar = () => {
      store.commit('settings/TOGGLE_SIDEBAR')
    }

    onMounted(() => {
      document.querySelector('.el-dropdown__popper')?.setAttribute('class', 'resetTop')
      document.querySelector('.el-popper__arrow')?.setAttribute('class', 'hidden')
    })

    return {
      opened,
      username,
      handleDropLink,
      toggleSideBar,
    }
  },
})
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 50px;
    padding: 0 15px;
    font-size: 22px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    display: flex;
    align-items: center;
    .inter {
      width: 40px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-right: 5px;
      &:hover {
        cursor: pointer;
        background: #f0f0f0;
      }
      img {
        width: 25px;
      }
    }
    .el-dropdown-link {
      // width: 70px;
      height: 50px;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-right: 10px;
      cursor: pointer;
      p {
        font-size: 14px;
      }
      &:hover {
        background: #eee;
      }
      img {
        width: 22px;
        height: 22px;
        border-radius: 50%;
      }
    }
  }
}
// single element-plus reset
.el-dropdown-menu__item {
  padding: 0 10px;
}
.el-dropdown-menu {
  padding: 0;
}
.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  color: #606266;
  background: #f0f0f0;
}
</style>
