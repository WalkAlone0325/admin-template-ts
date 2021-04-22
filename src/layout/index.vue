<template>
  <div class="app-wrapper">
    <!-- 侧边栏 -->
    <div class="main-container">
      <div><!-- 顶部导航栏 --></div>
      <!-- 主体内容 -->
    </div>
    <!-- 系统设置 -->
    {{ foo }} {{ bar }}
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'

function useFeature() {
  const state = reactive({
    foo: 1,
    bar: 2,
  })

  return toRefs(state)
}

const { foo, bar } = useFeature()
</script>

<style></style>
