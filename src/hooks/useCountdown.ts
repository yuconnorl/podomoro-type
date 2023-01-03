import { ref } from 'vue'

import { useModeStore } from '@/stores/mode'

const useCountdown = () => {
  const mode = useModeStore()
  const localSecond = ref<number>(mode.second)
  const intervalID = ref<number>()
  const { stopTimer } = useModeStore()

  const startCountdown = () => {
    intervalID.value = setInterval(() => {
      localSecond.value = localSecond.value - 1
      if (localSecond.value === 0) {
        window.alert('time out')
        stopCountdownNResetTime()
        stopTimer()
      }
    }, 1000)
  }

  const stopCountdown = () => {
    clearInterval(intervalID.value)
  }

  const stopCountdownNResetTime = () => {
    clearInterval(intervalID.value)
    localSecond.value = mode.second
  }

  return {
    localSecond,
    startCountdown,
    stopCountdown,
    stopCountdownNResetTime,
  }
}

export default useCountdown
