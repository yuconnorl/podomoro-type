import { ref } from 'vue'

import { useModeStore } from '@/stores/mode'

const useCountdown = () => {
  const mode = useModeStore()
  const localSecond = ref<number>(mode.second)
  const intervalID = ref<number>()

  const startCountdown = () => {
    intervalID.value = setInterval(() => {
      console.log(localSecond.value)
      localSecond.value = localSecond.value - 1
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
