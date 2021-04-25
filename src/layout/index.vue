<template>
  <div :class="classes" class="app-wrapper">
    <!-- 侧边栏 -->
    <SideBar class="sidebar-container" />
    <div class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <!-- 顶部导航栏 -->
        <NavBar />
      </div>
      <!-- 主体内容 -->
      <AppMain />
    </div>
    <!-- 系统设置 -->
    <Setting />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref, toRefs } from 'vue'
import { NavBar, SideBar, AppMain, Setting } from './components'
import { useStore } from 'vuex'

interface setInter {
  sidebar: any
  fixedHeader: Boolean
  classes: any
}

export default defineComponent({
  name: 'layout',
  components: {
    NavBar,
    SideBar,
    AppMain,
    Setting,
  },
  setup() {
    const store = useStore()
    // const WIDTH = ref(992)
    const set: setInter = reactive({
      sidebar: computed(() => {
        return store.state.settings.sidebar
      }),

      fixedHeader: computed(() => {
        return store.state.settings.fixedHeader
      }),

      classes: computed(() => {
        return {
          hideSidebar: !set.sidebar.opened,
          openSidebar: set.sidebar.opened,
          withoutAnimation: set.sidebar.withoutAnimation,
        }
      }),
    })

    return {
      ...toRefs(set),
    }
  },
})
</script>

<style lang="scss" scoped>
@mixin clearfix {
  &:after {
    content: '';
    display: table;
    clear: both;
  }
}
$sideBarWidth: 210px;

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
