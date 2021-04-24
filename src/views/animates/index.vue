<template>
  <div class="home">
    <el-divider content-position="left">输入动画</el-divider>
    <div>
      <div>
        <el-input
          type="number"
          v-model.number="number"
          style="width: 20%; margin: 0 30px 30px 20px"
          step="100"
        />
        <span style="margin-left: 30px">{{ animatedNumber }}</span>
      </div>

      <div>
        <el-input v-model="query" style="width: 20%; margin: 0 30px 0px 20px" type="text" />
        <transition-group
          name="staggered-fade"
          tag="ul"
          style="height: 180px"
          :css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <li
            style="margin: 10px 20px 0 20px"
            v-for="(item, index) in computedList"
            :key="item.msg"
            :data-index="index"
          >
            {{ item.msg }}
          </li>
        </transition-group>
      </div>
    </div>

    <div>
      <el-divider content-position="left">数字动画</el-divider>
      <ul style="margin: 0 30px 30px 30px">
        <li v-for="item in plist" :key="item.id">
          <span>{{ item.name }}</span>
          ：
          <span>{{ item.value }}</span>
        </li>
      </ul>
    </div>

    <el-divider content-position="left">视图动画</el-divider>
    <div class="container">
      <div class="loader-wrapper">
        <div class="loader-1"></div>
        <div class="loader-2"></div>
        <div class="loader-3"></div>
      </div>
    </div>

    <el-divider content-position="left">过渡动画——颜色</el-divider>
    <div @mousemove="xCoordinate" :style="{ backgroundColor: `hsl(${x},80%,50%` }" class="movearea">
      <h3>在颜色区域移动你的鼠标...</h3>
      <p>x: {{ x }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useAnimateNumber from '@/use/animate/useAnimateNumber'
import useColorTran from '@/use/animate/useColorTran'
import useStaggeredList from '@/use/animate/useStaggeredList'

const { number, tweenedNumber, plist, animatedNumber } = useAnimateNumber()
const { x, xCoordinate } = useColorTran()
const { query, tranlist, computedList, beforeEnter, enter, leave } = useStaggeredList()
</script>

<style lang="scss" scoped>
/* Colors */
$background: #f6cb4f;
$theme-black: #0d0d0d;

/* Dimensions */
$loader-wrapper-width: 90px;
$loader-width: 35px;
$loader-height: 35px;
%center {
  display: flex;
  justify-content: center;
  align-items: center;
}
%loader {
  position: absolute;
  width: $loader-width;
  height: $loader-height;
  border: 10px solid $theme-black;
  border-radius: 40px;
}
.movearea {
  height: 200px;
  transition: 0.2s background-color ease;
}
.home {
  height: 100%;
  width: 100%;

  /* Specific Styles */
  .container {
    // @extend %center;
    width: 150px;
    height: 150px;
  }
  .loader-wrapper {
    display: flex;
    position: absolute;
  }
  .loader-1 {
    @extend %loader;
  }
  .loader-2 {
    @extend %loader;
    margin-left: 55px;
  }
  .loader-3 {
    @extend %loader;
    width: $loader-wrapper-width;
    margin-top: 55px;
  }
}
</style>
