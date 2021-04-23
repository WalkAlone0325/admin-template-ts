// import logo from '@/assets/images/logo.png'

export default {
  fixedHeader: false,

  /**
   * 侧边栏配置
   * @param isShow 是否显示logo栏
   * @param title logo栏标题
   * @param logoUrl logo图标
   * @description 注意引入方式：1. 相对绝对路径 2. url引入 `?url` 3. 字符串引入 `?raw`
   */
  sidebarConfig: {
    isShow: true,
    title: 'Admin Template',
    // logoUrl: logo,
    logoUrl: 'http://www.loner.shop/_nuxt/img/5c890c3.jpg?url',
  },
}
