<template>
  <div class="template-base">
    <!-- skip-links -->
    <HeaderComponent />
    <!-- area do conteudo -->
     <main>
      <slot />
     </main>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>
