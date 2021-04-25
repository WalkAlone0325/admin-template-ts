<template>
  <panel>
    <el-divider content-position="center">界面显示</el-divider>
    <ul class="setting">
      <li>
        <span>头部Logo</span>
        <el-switch
          @change="handleChange"
          :value="isShowLogo"
          active-text="隐藏"
          inactive-text="显示"
        ></el-switch>
        <!-- <el-switch v-model=" isShowLogo" active-text="开" inactive-text="关"></el-switch> -->
      </li>
    </ul>
  </panel>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import Panel from './Panel.vue'

export default defineComponent({
  name: 'Setting',
  components: {
    Panel,
  },
  setup() {
    const isShowLogo = ref(false)
    const store = useStore()

    const handleChange = () => {
      store.commit('settings/CHAGNG_SIDEBAR', isShowLogo.value)
      isShowLogo.value = !isShowLogo.value
    }

    return { isShowLogo, handleChange }
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
