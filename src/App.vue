<script setup lang="ts">
import { isLoading } from '@/stores/appLoading'
import { RouterView } from 'vue-router'
import LayoutBase from './layouts/LayoutBase.vue'
import { useDarkMode } from '@/composables/useDarkMode'

// Inicializar dark mode
useDarkMode()
</script>

<template>
  <div class="app-shell">
    <LayoutBase>
      <RouterView />
    </LayoutBase>

    <div v-show="isLoading" class="loading-overlay" aria-live="polite" aria-busy="true">
      <br-loading mode="spinner" size="large" label="Carregando" />
    </div>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  background-color: var(--color-background);
  color: var(--color-text-primary);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.loading-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-background);
  opacity: 0.9;
  backdrop-filter: blur(2px);
}
</style>
