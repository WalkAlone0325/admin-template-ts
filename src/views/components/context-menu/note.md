## 引入

```js
// 自定义指令
import ContextMenu from '@/components/contextmenu/index'

const app = createApp(App)

app.directive('contextmenu', ContextMenu)
```

## 用法

```vue
<template>
  <div v-contextmenu.dark="contextmenus"></div>
</template>

<script>
setup() {
  const contextmenus = ()=>{
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
    ]
  }
}
</script>
```

## 主题

> 右键菜单默认主题为 light,可以添加修饰符 `dark` 来设置菜单主题

## 参数

| 属性     | 类型     | 说明                   |
| -------- | -------- | ---------------------- |
| text     | string   | 菜单文字               |
| subText  | string   | 菜单补充               |
| disable  | boolean  | 是否禁用菜单项         |
| divider  | boolean  | 分割线                 |
| children | array    | 子菜单                 |
| handler  | function | 点击菜单执行的方法函数 |
