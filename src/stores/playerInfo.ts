import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const usePlayerInfoStore = defineStore('playerInfo', () => {
  const playerID = ref('')
  const availableRewardAmount = ref<number>(0) // 可抽的數量
  const usedRewardAmount = ref<number>(0) // 已抽的數量
  const winnings = ref<number>(0) // 累積獎金

  return {
    playerID,
    availableRewardAmount,
    usedRewardAmount,
    winnings,
  }
})
