<template>
  <br-breadcrumb :crumbs="breadcrumbLinks"></br-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

type BreadcrumbItem = {
  label: string
  url?: string
  active?: boolean
  home?: boolean
}

const route = useRoute()

const getCurrentLabel = (): string => {
  if (typeof route.meta?.breadcrumb === 'string' && route.meta.breadcrumb.length > 0) {
    return route.meta.breadcrumb
  }

  if (typeof route.name === 'string' && route.name.length > 0) {
    return route.name
  }

  return 'Pagina'
}

const breadcrumbLinks = computed(() => {
  const links: BreadcrumbItem[] = [
    { label: 'Página Inicial', url: '/', home: true, active: route.path === '/' },
  ]

  if (route.path !== '/') {
    links.push({
      label: getCurrentLabel(),
      url: route.path,
      active: true,
    })
  }

  return JSON.stringify(links)
})
</script>
