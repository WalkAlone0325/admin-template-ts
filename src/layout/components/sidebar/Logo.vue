<template>
  <div class="sidebar-logo-container">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" class="sidebar-logo-link" to="/">
        <img :src="logo" v-if="logo" class="sidebar-logo" />
        <h1 v-else class="sidebar-title">{{ title }}</h1>
      </router-link>
      <router-link v-else class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo ml" />
        <h1 class="sidebar-title">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import settings from '@/settings'

export default defineComponent({
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    return {
      title: settings.sidebarConfig.title,
      logo: settings.sidebarConfig.logoUrl,
    }
  },
})
</script>

<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2b2f3a;
  text-align: center;
  overflow: hidden;

  .sidebar-logo-link {
    height: 100%;
    width: 100%;
    .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 20px;
      margin-left: 10px;
      border-radius: 50%;
    }
    .ml {
      margin-left: -20px;
    }
    .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-weight: normal;
      vertical-align: middle;
    }
  }

  .collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
