<template>
  <div class="wrapper">
    <ClockPanel />
  </div>
</template>

<script setup lang="ts">
import ClockPanel from '@/components/ClockPanel.vue'
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
