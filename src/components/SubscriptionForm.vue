<template>
  <div class="wrapper">
    <div v-show="true"> this is the form place, Wooj 😢</div>
    <!-- <input
    type="text"
    :value="modelValue"
    @input="$emit(update:modelValue, $event.target.value)"
  /> -->
    <button @click="$emit('btnClick', 1, 2, 'fuck')">CC</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: String,
})

const emit = defineEmits(['btnClick'])

const handleButton = () => {
  emit('btnClick')
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
