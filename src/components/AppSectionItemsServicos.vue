<template>
  <div class="col mt-4">
    <p class="text-weight-semi-bold">{{ nomeSessao }}</p>
    <br-divider />
    <AppItemServico
      v-for="item in items"
      :key="item.id"
      :densidade="densidade"
      :icon-name="item.iconName"
      :link="item.link"
      :title="item.title"
      :description="item.description"
    />
  </div>
</template>

<script setup lang="ts">
import AppItemServico from './AppItemServico.vue'

interface ItemServico {
  id: string
  iconName: string
  link: string
  title: string
  description: string
}

interface Props {
  densidade?: 'large' | 'medium' | 'small'
  items: ItemServico[]
  nomeSessao: string
}

defineProps<Props>()
</script>
