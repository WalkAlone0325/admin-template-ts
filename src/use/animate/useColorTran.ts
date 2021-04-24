import { ref } from 'vue'

export default function useColorTran() {
  const x = ref(0)
  const xCoordinate = (e: any) => {
    x.value = e.clientX
  }
  return {
    x,
    xCoordinate,
  }
}
