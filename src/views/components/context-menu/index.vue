<template>
  <div class="context-menu-container" v-contextmenu.dark="contextmenus">
    <div class="message-context">
      {{ msg }}
    </div>
    <Readme />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import ContextMenu from '@/components/contextmenu/index.vue'
import Readme from './readme.vue'

export default defineComponent({
  name: 'ContextMenu',
  components: {
    // ContextMenu,
    Readme,
  },
  setup() {
    const msg = ref('在空白区域点击鼠标右键')

    const contextmenus = () => {
      return [
        {
          text: '删除',
          subText: 'BACKSPACE',
          handler: (e: any) => {
            msg.value = '你点击了删除'
            console.log(e)
          },
        },
        {
          text: '禁用菜单项',
          disable: true,
        },
        { divider: true },
        {
          text: '多级菜单',
          children: [
            { text: '子菜单1', handler: () => (msg.value = '你点击了子菜单1') },
            { text: '子菜单2', handler: () => (msg.value = '你点击了子菜单2') },
            {
              text: '三级菜单',
              children: [
                { text: '子菜单1', handler: () => (msg.value = '你点击了子菜单1') },
                { text: '子菜单2', handler: () => (msg.value = '你点击了子菜单2') },
              ],
            },
          ],
        },
        { divider: true },
        {
          text: '剪切',
          subText: 'CTRL + X',
          handler: () => (msg.value = '你点击了剪切'),
        },
        {
          text: '复制',
          subText: 'CTRL + C',
          handler: () => (msg.value = '你点击了复制'),
        },
        {
          text: '粘贴',
          subText: 'CTRL + V',
          handler: () => (msg.value = '你点击了粘贴'),
        },
      ]
    }

    return {
      msg,
      contextmenus,
    }
  },
})
</script>

<style lang="scss" scoped>
.context-menu-container {
  width: 100%;
  height: 200px;
  margin: 0 auto;
  border: 1px solid #000;
  .message-context {
    text-align: center;
    line-height: 200px;
  }
  &.contextmenu-active {
    background-color: #f5f5f5;
  }
}
</style>
