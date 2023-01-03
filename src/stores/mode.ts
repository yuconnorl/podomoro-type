import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { PANEL_TYPE, PROMPT, TIME_PERIOD } from '@/configs/config'
import timer from '@/utlis/timer'

export const useModeStore = defineStore('mode', () => {
  const currentMode = ref<string>(PANEL_TYPE.PODOMORO)
  const isTimerActive = ref<boolean>(false)
  // const second = ref(TIME_PERIOD[currentMode.value])

  const second = computed(() => TIME_PERIOD[currentMode.value])
  const countDownTime = computed(() => timer(second.value))
  const prompt = computed(() => PROMPT[currentMode.value])

  function switchMode(mode: string) {
    currentMode.value = mode
  }

  function toggleTimerActive() {
    isTimerActive.value = !isTimerActive.value
  }

  function stopTimer() {
    isTimerActive.value = false
  }

  return {
    currentMode,
    second,
    countDownTime,
    isTimerActive,
    prompt,
    switchMode,
    toggleTimerActive,
    stopTimer,
  }
})
