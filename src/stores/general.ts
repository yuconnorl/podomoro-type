import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { REWARD_TYPE } from '@/configs/config'

export const useGeneralStore = defineStore('general', () => {
  const currentType = ref<string>(REWARD_TYPE.GOLD) // 目前選擇的禮包種類
  const totalRemainRewardAmount = ref({
    gold: 0,
    sliver: 0,
    red: 0,
  }) // 活動剩餘的各禮包數量

  return {
    currentType,
    totalRemainRewardAmount,
  }
})
