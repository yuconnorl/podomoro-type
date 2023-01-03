<template>
  <header>
    <nav class="nav">
      <RouterLink to="/">Podomoro</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/form">Form</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.nav {
  width: 100%;
  display: flex;
  gap: 30px;
}
</style>
