<template>
  <div class="wrapper">
    <div>Input your credit info, and we will spend all your money 🤑🤑</div>
    <SubscriptionForm v-model:modelValue="name" @btnClick="fuck" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import SubscriptionForm from '@/components/SubscriptionForm.vue'

const fuck = (first: number, second: number, fuclyou: string) => {
  console.log(`first: ${first}`)
  console.log(`second: ${second}`)
  console.log(`fuclyou: ${fuclyou}`)
}

const name = ref<string>('')
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
