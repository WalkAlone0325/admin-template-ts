<template>
  <section class="app-main">
    <router-view :key="key" v-slot="{ Component }">
      <transition appear name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'app-main',
  setup() {
    const route = useRoute()
    const key = computed(() => route.path)

    return { key }
  },
})
</script>

<style scoped>
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow-x: hidden;
  margin: 10px;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
