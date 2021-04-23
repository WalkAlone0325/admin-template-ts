<template>
  <panel>
    <el-divider content-position="center">界面显示</el-divider>
    <ul class="setting">
      <li>
        <span>头部</span>
      </li>
    </ul>
  </panel>
</template>

<script>
import { defineComponent } from 'vue'
import Panel from './Panel.vue'

export default defineComponent({
  name: 'Setting',
  components: {
    Panel,
  },
})
</script>

<style lang="scss" scoped>
.setting {
  width: 100%;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px;
  }
}
:deep(.el-divider__text) {
  font-size: 16px;
  font-weight: 700;
}
</style>
