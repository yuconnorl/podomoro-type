<template>
  <div class="panel-wrapper">
    <div class="wrapper">
      <div class="switcher">
        <button
          class="switcher-btn"
          v-for="item in panelList"
          :key="item"
          @click="handleModeSwitch(item)"
        >
          {{ item }}
        </button>
      </div>
      <div class="time">{{ timer(localSecond) }}</div>
      <button type="button" @click="handleButtonClick">{{
        isTimerActive
      }}</button>
    </div>
    <div class="prompt">{{ prompt }}</div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { confirmMessage, PANEL_TYPE } from '@/configs/config'
import useCountdown from '@/hooks/useCountdown'
import { useModeStore } from '@/stores/mode'
import timer from '@/utlis/timer'

const { startCountdown, stopCountdown, localSecond, stopCountdownNResetTime } =
  useCountdown()
const mode = useModeStore()
const { switchMode, toggleTimerActive, stopTimer } = useModeStore()
const { prompt, isTimerActive } = storeToRefs(mode)
const panelList = Object.values(PANEL_TYPE)

const handleModeSwitch = (mode = '') => {
  // timer is still active, prompt
  const onModeSwitch = () => {
    switchMode(mode)
    stopTimer()
    stopCountdownNResetTime()
  }

  if (isTimerActive.value) {
    const confirm = window.confirm(confirmMessage)
    if (confirm) {
      onModeSwitch()
    }
    return
  }
  onModeSwitch()
}

const handleButtonClick = () => {
  if (isTimerActive.value) {
    stopCountdown()
    toggleTimerActive()
    return
  }
  startCountdown()
  toggleTimerActive()
}
</script>

<style lang="scss" scoped>
.panel-wrapper {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px 30px;
}

.switcher {
  width: 100%;
  justify-content: space-around;
  display: flex;
}

.switcher-btn {
  width: 100px;
  font-weight: 500;
  text-decoration: none;
  border: none;
  background: #707376;
  padding: 5px;

  &:hover {
    background: #b6babe;
  }
}

.time {
  color: #dcdfe3;
  font-size: 120px;
  font-weight: bold;
  margin-top: 20px;
}
</style>
