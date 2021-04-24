import { computed, watch, ref, reactive, toRefs, onMounted } from 'vue'
import { gsap, TweenMax } from 'gsap'

const useAnimateNumber = () => {
  const animateState = reactive({
    number: 0,
    tweenedNumber: 0,
  })

  const plist = ref([
    {
      id: 1,
      name: '月职住人口',
      value: 126641,
    },
    {
      id: 2,
      name: '月流入人口',
      value: 233036,
    },
    {
      id: 3,
      name: '月流出人口',
      value: 184564,
    },
  ])

  const animatedNumber = computed(() => animateState.tweenedNumber.toFixed(0))

  watch(
    () => animateState.number,
    newVal => {
      gsap.to(animateState, { duration: 0.5, tweenedNumber: newVal })
    },
    { immediate: true },
  )
  const loading = () => {
    const loader = gsap.timeline()
    const duration = 0.25
    const delay = 1
    loader
      .to('.loader-3', duration, { width: 35 })
      .set('.loader-2', {
        rotate: 90,
        transformOrigin: '45px 45px',
        marginLeft: 0,
      })
      .to('.loader-2', duration, { width: 90 })
      .set('.loader-2', { transformOrigin: '72px 17px', rotate: 270 })
      .to('.loader-2', duration, { width: 35 })
      .to('.loader-1', duration, { width: 90 })
      .set('.loader-1', { transformOrigin: '45px 17.5px', rotate: 180 })
      .to('.loader-1', duration, { width: 35 })
      .set('.loader-3', {
        transformOrigin: '45px 45px',
        rotate: 270,
        marginTop: 0,
      })
      .to('.loader-3', duration, { width: 90 })
      .set('.loader-3', { transformOrigin: '17.5px 17.5px', rotate: 90 })
      .to('.loader-3', duration, { width: 35 })
      .set('.loader-2', { transformOrigin: '45px 45px', rotate: 180 })
      .to('.loader-2', duration, { width: 90 })
      .set('.loader-2', { transformOrigin: 'bottom center', marginTop: 20 })
      .to('.loader-2', duration, { width: 35 })
      .set('.loader-1', { transformOrigin: '45px 45px', rotate: 90 })
      .to('.loader-1', duration, { width: 90 })
      .set('.loader-1', { transformOrigin: '72px 17.5px', rotate: 270 })
      .to('.loader-1', duration, { width: 35 })
      .set('.loader-3', { rotate: 360 })
      .to('.loader-3', duration, { width: 90 })
      .set('.loader-3', { transformOrigin: '45px 17.5px', rotate: 180 })
      .to('.loader-3', duration, { width: 35 })
      .set('.loader-2', {
        transformOrigin: '45px 45px',
        rotate: 270,
        marginTop: 0,
      })
      .to('.loader-2', duration, { width: 90 })
      .set('.loader-2', { transformOrigin: '17.5px 17.5px', rotate: 90 })
      .to('.loader-2', duration, { width: 35 })
      .set('.loader-1', { transformOrigin: '45px 45px', rotate: 180 })
      .to('.loader-1', duration, { width: 90 })
      .set('.loader-1', { transformOrigin: 'bottom center', marginTop: 20 })
      .to('.loader-1', duration, { width: 35 })
      .set('.loader-3', { transformOrigin: '45px 45px', rotate: 90 })
      .to('.loader-3', duration, { width: 90 })
      .set('.loader-3', { transformOrigin: '72px 17.5px', rotate: 270 })
      .to('.loader-3', duration, { width: 35 })
      .set('.loader-2', { transformOrigin: '45px 17.5px', rotate: 0 })
      .to('.loader-2', duration, { width: 90 })
      .set('.loader-2', { rotate: 180 })
      .to('.loader-2', duration, { width: 35 })
      .set('.loader-1', {
        transformOrigin: '45px 45px',
        rotate: 270,
        marginTop: 0,
      })
      .to('.loader-1', duration, { width: 90 })
      .set('.loader-1', { transformOrigin: '17.5px 17.5px', rotate: 90 })
      .to('.loader-1', duration, { width: 35 })
      .set('.loader-3', {
        transformOrigin: '45px 17.5px',
        rotate: 180,
        marginTop: 55,
      })
      .to('.loader-3', duration, { width: 90 })
      .set('.loader-2', { marginLeft: 55 })
      .delay(delay)
      .repeat(-1)
  }

  const setLite = (obj: gsap.TweenTarget, val: any) => {
    TweenMax.fromTo(
      obj,
      2,
      {
        value: 0,
      },
      { value: val.toFixed(0), roundProps: ['value'] },
    )
  }

  const set = () => {
    setLite(plist.value[0], plist.value[0].value)
    setLite(plist.value[1], plist.value[1].value)
    setLite(plist.value[2], plist.value[2].value)
  }

  onMounted(() => {
    loading()
    set()
  })

  return { ...toRefs(animateState), plist, animatedNumber }
}

export default useAnimateNumber
