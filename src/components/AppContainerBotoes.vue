<template>
  <div class="container-botoes">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  gap: {
    type: String,
    default: '1em',
  },
})
</script>

<style>
.container-botoes {
  display: flex;
  gap: v-bind(gap);
}
</style>
