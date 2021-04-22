import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 进度条进度速度
  showSpinner: true, // 显示加载 ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化的最小百分比
})

export default NProgress
