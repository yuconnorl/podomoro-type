import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const modalPool = ref([])
  const isModalOpen = computed(() => modalPool.value.length > 0)

  return {
    modalPool,
    isModalOpen,
  }
})
