import { App } from 'vue'
import Modal from '@/components/modal/index.vue'

export default (app: App) => {
  app.component(Modal.name, Modal)
}
