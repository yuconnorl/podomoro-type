<template>
  <div> homeview </div>
  <Suspense>
    <PixiCanvas />
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script setup lang="ts">
import PixiCanvas from '@/components/PixiCanvas.vue'
</script>

<style scoped></style>
