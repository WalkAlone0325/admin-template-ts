<template>
  <div :class="{ 'has-logo': isShowLogo }">
    <logo v-if="isShowLogo" :collapse="isCollapse" />
    <!-- {{ showLogo }} -->

    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
        active-text-color="#409eff"
        text-color="#bfcbd9"
        background-color="#304156"
        mode="vertical"
        router
      >
        <SideBarItem v-for="route in routes" :key="route.path" :item="route" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import Logo from './Logo.vue'
import SideBarItem from './SideBarItem.vue'

export default defineComponent({
  name: 'SideBar',
  components: { SideBarItem, Logo },
  setup() {
    const store = useStore()
    const route = useRoute()

    const activeMenu = computed(() => {
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    })

    return {
      routes: computed(() => store.getters.routeslist),
      activeMenu,
      isShowLogo: computed(() => store.state.settings.isShowLogo),
      isCollapse: computed(() => !store.state.settings.sidebar.opened),
    }
  },
})
</script>

<style></style>
