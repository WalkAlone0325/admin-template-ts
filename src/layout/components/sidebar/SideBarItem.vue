<template>
  <template v-if="!item.children">
    <el-menu-item :index="item.path">
      <i :class="item.meta?.icon"></i>
      <template #title>{{ item.meta?.title }}</template>
    </el-menu-item>
  </template>

  <el-submenu v-else ref="subMenu" :index="item.path" popper-append-to-body>
    <template #title>
      <i :class="item.meta?.icon"></i>
      <span>{{ item.meta?.title }}</span>
    </template>

    <SideBarItem v-for="child in item.children" :key="child.path" :item="child" />
  </el-submenu>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { RouteRecordRaw, RouteRecordNormalized } from 'vue-router'
export default defineComponent({
  name: 'SideBarItem',
  props: {
    item: {
      type: Object as PropType<RouteRecordRaw>,
      required: true,
    },
  },

  setup(props) {
    const routeItem = ref({} as RouteRecordNormalized)
    return { routeItem }
  },
})
</script>

<style></style>
