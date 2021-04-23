<template>
  <div class="readme-container">
    <h3>引入：</h3>
    <section>
      <div>// 自定义指令</div>
      <div>import ContextMenu from '@/components/contextmenu/index'</div>
      <div>const app = createApp(App) app.directive('contextmenu', ContextMenu)</div>
    </section>
    <h3>主题：</h3>
    <div>右键菜单默认主题为 light,可以添加修饰符 `dark` 来设置菜单主题</div>
    <h3>数据：</h3>
    <textarea :value="input" :cols="80" :rows="10"></textarea>
    <h3>参数说明：</h3>
    <el-table :data="tableData" stripe style="width: 50%; margin: 20px 10px" border>
      <el-table-column prop="prop" label="属性" width="180"></el-table-column>
      <el-table-column prop="type" label="类型" width="180"></el-table-column>
      <el-table-column prop="readme" label="说明"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  type: 'readme',
  setup() {
    const tableData = reactive([
      {
        prop: 'text',
        type: 'string',
        readme: '菜单项文字',
      },
      {
        prop: 'subText',
        type: 'string',
        readme: '菜单项说明补充',
      },
      {
        prop: 'disable',
        type: 'boolean',
        readme: '是否禁用菜单项',
      },
      {
        prop: 'divider',
        type: 'boolean',
        readme: '分割线',
      },
      {
        prop: 'children',
        type: 'array',
        readme: '子菜单',
      },
      {
        prop: 'handler',
        type: 'function',
        readme: '点击菜单执行的方法函数',
      },
    ])

    const input = ref(`[
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
          { text: '子菜单1' },
          { text: '子菜单2' },
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
    ]`)
    return { input, tableData }
  },
})
</script>

<style>
.readme-container {
  margin-left: 20px;
}
</style>
