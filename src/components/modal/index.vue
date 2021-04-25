<template>
  <teleport to="body">
    <!-- 蒙层 -->
    <div class="modal-mask" v-show="show">
      <div
        class="l-modal"
        ref="lModal"
        :style="{
          width: width + 'px',
          borderRadius: borderRadius + 'px',
          marginLeft: -width / 2 + 'px',
          top: position === 'center' ? '30%' : '50%',
          marginTop: position === 'center' ? `-${lModalHeight} / 2 + 'px'` : '',
        }"
      >
        <header class="header" :style="{ color: headerColor, backgroundColor: headerColor }">
          <h1 :style="{ color: headerTextColor }">{{ headerText }}</h1>
          <i :style="{ color: headerTextColor }" @click="close">&times;</i>
        </header>
        <article class="content">
          <p :style="{ color: contextColor }">{{ contextText }}</p>
        </article>
        <div class="btn-group" v-if="btnGroupShow">
          <button
            class="btn btn-confirm"
            :style="{ backgroundColor: headerColor }"
            @click="confirm"
          >
            {{ confirmText }}
          </button>
          <button class="btn btn-cancel" @click="close">{{ cancelText }}</button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive, Ref, toRefs } from 'vue'

export default defineComponent({
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 300,
    },
    borderRadius: {
      type: Number,
      default: 0,
    },
    headerColor: {
      type: String,
      default: '#fff',
    },
    headerText: {
      type: String,
      default: '',
    },
    headerTextColor: {
      type: String,
      default: '#fff',
    },
    contextText: {
      type: String,
      default: '',
    },
    contextColor: {
      type: String,
      default: '#000',
    },
    position: {
      type: String,
      default: 'top',
    },
    btnGroupShow: {
      type: Boolean,
      default: false,
    },
    confirmText: {
      type: String,
      default: '确定',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
  },
  emits: ['confirm', 'close'],
  setup(props, { emit }) {
    const lModal: Ref = ref(null)

    const lState = reactive({
      lModalHeight: 0,
    })

    onMounted(() => {
      lState.lModalHeight = lModal.value.offsetHeight
    })

    const confirm = (data?: any) => {
      emit('confirm', data)
    }
    const close = () => {
      emit('close')
    }

    return {
      lModal,
      ...toRefs(lState),
      confirm,
      close,
    }
  },
})
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99999;

  h1,
  p {
    font-weight: normal;
    margin: 0;
  }

  .l-modal {
    position: fixed;
    left: 50%;
    overflow: hidden;
    background: #fff;
    box-shadow: 1px 2px 3px #333;
    .header {
      height: 44px;
      padding: 0 15px;
      box-sizing: border-box;
      h1 {
        display: inline-block;
        font-size: 18px;
        line-height: 44px;
      }
      i {
        float: right;
        font-size: 20px;
        margin-top: 6px;
        cursor: pointer;
      }
    }
    .content {
      padding: 15px;
      box-sizing: border-box;
    }
    .btn-group {
      height: 30px;
      padding: 10px 15px;
      border-top: 1px solid #ddd;
      .btn {
        float: right;
        min-width: 80px;
        height: 30px;
        font-size: 14px;
        border-radius: 3px;
        cursor: pointer;
        outline: none;
        border: none;
        margin-bottom: 5px;
        &.btn-confirm {
          color: #fff;
          margin-left: 15px;
        }
        &.btn-cancel {
          background-color: #ddd;
          color: #666;
        }
      }
    }
  }
}
</style>
