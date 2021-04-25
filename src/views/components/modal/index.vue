<template>
  <div>
    <el-button @click="() => (show = true)">打开模态框</el-button>
    <Modal
      :show="show"
      :width="350"
      :borderRadius="10"
      headerColor="#007bff"
      headerText="模态框标题"
      headerTextColor="#fff"
      contextText="内容"
      contextColor="#333"
      position="center"
      :btnGroupShow="true"
      confirmText="是"
      cancelText="否"
      @confirm="modalConfirm"
      @close="modalClose"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ModalPage',
  setup() {
    const show = ref(false)

    const modalConfirm = () => {
      show.value = false
      console.log('modalConfirm')
    }

    const modalClose = () => {
      show.value = false
      console.log('modalClose')
    }

    return {
      show,
      modalConfirm,
      modalClose,
    }
  },
})
</script>

<style></style>
