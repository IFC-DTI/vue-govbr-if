<template>
  <br-card :hover="hover" :disabled="disabled" class="m-2">
    <h5>{{ title }}</h5>
    <p>{{ description }}</p>
    <slot />
  </br-card>
</template>

<script setup lang="ts">
interface Props {
  hover?: boolean
  disabled?: boolean
  title: string
  description: string
}

withDefaults(defineProps<Props>(), {
  hover: false,
  disabled: false,
})
</script>

<style scoped>
br-card {
  h5, p {
    color: #000 !important;
  }
}
</style>
