<template>
  <br-breadcrumb :crumbs="breadcrumbLinks"> </br-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const links = [
  { label: 'Página Inicial', url: '/', active: true },

]

const breadcrumbLinks = computed(() => JSON.stringify(links))
</script>
