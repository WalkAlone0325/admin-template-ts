<template>
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
    >
      123
      <!-- <SideBarItem /> -->
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'side-bar',
  setup() {
    const router = useRouter()
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
      routes: computed(() => router.options.routes),
      activeMenu,
      isCollapse: computed(() => !store.getters.sidebar.opened),
    }
  },
})
</script>

<style></style>
