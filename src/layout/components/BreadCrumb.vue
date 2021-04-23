<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group appear name="breadcrumb">
      <el-breadcrumb-item v-for="item in breadList" :key="item.path" :to="item.path">
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch } from 'vue'
import { useRoute, useRouter, RouteLocationMatched } from 'vue-router'

export default defineComponent({
  name: 'BreadCrumb',
  setup() {
    const breadList: Ref<Array<RouteLocationMatched>> = ref([])
    const route = useRoute()
    const router = useRouter()

    watch(
      () => route.path,
      () => {
        let allList = route.matched.filter(item => {
          if (item.meta && item.meta.title) {
            if (item.redirect) {
              item.path = item.redirect as string
            }
            return true
          }
        })
        if (allList[0].path !== '/' && allList[0].path !== '/home') {
          allList.unshift({ path: '/', meta: { title: '首页' } } as any)
        }
        breadList.value = allList
      },
      { immediate: true, deep: false },
    )

    return { breadList }
  },
})
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
