## 使用 `<script setup>` 环境调试

1. 禁用 `vetur`
2. 安装插件 `volar`，并启用 `TS Plugin`
3. 安装依赖 `yarn add @vuedx/typescript-plugin-vue`
4. 删除文件 `src/shims-vue.d.ts`
5. 在 `ts.config.json` 添加 插件
   ```json
    "plugins": [
      {
        "name": "@vuedx/typescript-plugin-vue"
      }
    ]
   ```
6. 选择 ts 版本 "Select TypeScript version" -> "Use workspace version"
