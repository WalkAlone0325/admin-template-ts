<template>
  <div>
    <div>
      <h4>WangEditor 编辑器</h4>
      <div style="display: flex">
        <div ref="editor" style="width: 50%"></div>
        <div :innerHTML="content.html" style="border: 1px solid #eee; width: 50%"></div>
      </div>
    </div>
    <div id="editor">
      <h4>自定义 md 编辑器</h4>
      <textarea :value="input" @input="update($event)"></textarea>
      <div v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onBeforeUnmount, ref, reactive } from 'vue'
import marked from 'marked'
import debounce from 'lodash.debounce'
import WangEditor from 'wangeditor'

export default defineComponent({
  name: 'Markdown',
  data() {
    return {
      input: '# hello',
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input)
    },
  },
  methods: {
    update: debounce(function (e) {
      this.input = e.target.value
    }, 300),
  },
  setup() {
    const editor = ref()
    const content = reactive({
      html: '',
      text: '',
    })
    let instance
    onMounted(() => {
      instance = new WangEditor(editor.value)
      Object.assign(instance.config, {
        onchange() {
          content.html = instance.txt.html()
        },
      })
      instance.create()
    })
    onBeforeUnmount(() => {
      instance.destroy()
      instance = null
    })
    return {
      editor,
      content,
    }
  },
})
</script>

<style lang="scss" scoped>
h4 {
  margin-left: 20px;
}
#editor {
  margin: 0;
  height: calc(50vh - 51px);
  min-height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

textarea,
#editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}

:deep(.w-e-text-container) {
  z-index: 99 !important;
}
:deep(.w-e-toolbar) {
  z-index: 999 !important;
  position: static;
}
</style>
