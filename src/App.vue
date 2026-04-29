<script setup lang="ts">
import { isLoading } from '@/stores/appLoading'
import { RouterView } from 'vue-router'
import LayoutBase from './layouts/LayoutBase.vue'
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
}

.loading-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(2px);
}
</style>
