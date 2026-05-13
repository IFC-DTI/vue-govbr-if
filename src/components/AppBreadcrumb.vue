<template>
  <br-breadcrumb :crumbs="breadcrumbLinks"></br-breadcrumb>
</template>

<script setup lang="ts">
import { computed, type ComputedRef } from 'vue'
import { useRoute, type RouteLocationNormalized } from 'vue-router'

interface BreadcrumbItem {
  label: string
  url?: string
  active?: boolean
  home?: boolean
}

interface RouteMeta {
  breadcrumb?: string
}

const route: RouteLocationNormalized = useRoute()

const getCurrentLabel = (): string => {
  const breadcrumb = (route.meta as RouteMeta)?.breadcrumb

  if (typeof breadcrumb === 'string' && breadcrumb.length > 0) {
    return breadcrumb
  }

  if (typeof route.name === 'string' && route.name.length > 0) {
    return route.name
  }

  return 'Pagina'
}

const breadcrumbLinks: ComputedRef<string> = computed(() => {
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
