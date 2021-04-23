<template>
  <ul class="menu-content" :class="{ dark: isDark }">
    <template v-for="(menu, index) in menus">
      <li
        v-if="!menu.hide"
        class="menu-item"
        :key="menu.text || index"
        @click.stop="handleClickMenuItem(menu)"
        :class="{ divider: menu.divider, disable: menu.disable }"
      >
        <div
          class="menu-item-content"
          :class="{
            'has-children': menu.children,
            'has-handler': menu.handler,
          }"
          v-if="!menu.divider"
        >
          <span class="text">{{ menu.text }}</span>
          <span class="sub-text" v-if="menu.subText && !menu.children">{{ menu.subText }}</span>

          <menu-content
            class="sub-menu"
            :menus="menu.children"
            v-if="menu.children && menu.children.length"
            :handleClickMenuItem="handleClickMenuItem"
          />
        </div>
      </li>
    </template>
  </ul>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { ContextmenuItem } from './types'

export default defineComponent({
  name: 'menu-content',
  props: {
    menus: {
      type: Array as PropType<ContextmenuItem[]>,
      required: true,
    },
    handleClickMenuItem: {
      type: Function,
      required: true,
    },
    isDark: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
$menuWidth: 170px;
$menuHeight: 30px;
$subMenuWidth: 120px;
.menu-content {
  width: $menuWidth;
  padding: 5px 0;
  background: #fff;
  // border: 1px solid #eee;
  box-shadow: 3px 3px 3px rgba(#000, 0.15);
  border-radius: 2px;
  list-style: none;
  margin: 0;

  &.dark {
    background-color: #393939;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.25);

    .menu-content {
      background-color: #393939;
      box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.25);
    }

    .menu-item {
      color: #f1f1f1;
      background-color: #393939;
      &:hover:not(.disable) {
        background-color: #555;
      }
      &.divider {
        background-color: #888;
      }
      &.disable {
        color: #888;
      }
    }
  }
}
.menu-item {
  padding: 0 20px;
  color: #555;
  font-size: 12px;
  transition: all 0.1s;
  white-space: nowrap;
  height: $menuHeight;
  line-height: $menuHeight;
  background-color: #fff;
  cursor: pointer;
  &:not(.disable):hover > .menu-item-content > .sub-menu {
    display: block;
  }
  &:not(.disable):hover > .has-children.has-handler::after {
    transform: scale(1);
  }
  &:hover:not(.disable) {
    background-color: rgba($color: #d14424, $alpha: 0.2);
  }
  &.divider {
    height: 1px;
    overflow: hidden;
    margin: 5px;
    background-color: #e5e5e5;
    line-height: 0;
    padding: 0;
  }
  &.disable {
    color: #b1b1b1;
    cursor: no-drop;
  }
}
.menu-item-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  &.has-children::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-width: 1px;
    border-style: solid;
    border-color: #666 #666 transparent transparent;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
  &.has-children.has-handler::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 24px;
    background-color: #f1f1f1;
    position: absolute;
    right: 18px;
    top: 3px;
    transform: scale(0);
    transition: transform 0.2s;
  }
  .sub-text {
    opacity: 0.6;
  }
  .sub-menu {
    width: $subMenuWidth;
    position: absolute;
    display: none;
    left: 112%;
    top: -6px;
  }
}
</style>
