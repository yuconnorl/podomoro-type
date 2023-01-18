import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePixiStore = defineStore('pixi', () => {
  const pixiInstance = ref<object | null>(null)
  const canvasHeight = ref<number>(800)
  const canvasWidth = ref<number>(1080)
  const progress = ref<number>(0)

  return {
    pixiInstance,
    canvasHeight,
    canvasWidth,
    progress,
  }
})
