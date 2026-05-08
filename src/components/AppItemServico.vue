<template>
  <br-item :density="densidade || 'small'">
    <br-icon slot="start" :icon-name="iconName" style="color: #000"></br-icon>
    <a :href="link" target="_blank">{{ title }}</a>
    <p class="text-weight-regular" slot="end">{{ description }}</p>
  </br-item>
</template>

<script setup lang="ts">
interface Props {
  densidade?: 'large' | 'medium' | 'small'
  iconName: string
  link: string
  title: string
  description: string
}

defineProps<Props>()
</script>

<style scoped>
br-item,
p {
  font-size: 1em;
  margin: 0;
}
</style>
