import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

// ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// 导入公共样式
import './style/index.scss'

// 自定义指令
import ContextMenu from '@/components/contextmenu/index'

// 自定义组件
import regComponent from '@/plugin'

const app = createApp(App)

regComponent(app)

app.directive('contextmenu', ContextMenu)
app.use(router).use(store).use(ElementPlus).mount('#app')
