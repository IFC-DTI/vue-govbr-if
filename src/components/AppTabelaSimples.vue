<template>


  <h3>Feito com Web Components</h3>
  <br-table has-row-divider column-width="fill" overflow="truncate">
    <br-table-header slot="header">
      <br-table-row>
        <br-table-header-cell v-for="header in headers" :key="header.key" column-width="fill">
          {{ header.label }}
        </br-table-header-cell>
      </br-table-row>
    </br-table-header>

    <br-table-body slot="body">
      <br-table-row v-for="(item, i) in data" :key="i">
        <br-table-cell v-for="header in headers" :key="header.key" column-width="fill">
          {{ item[header.key] }}
        </br-table-cell>
      </br-table-row>
    </br-table-body>
  </br-table>
</template>

<script setup lang="ts" generic="T extends Record<string, any>">
interface TableHeader {
  label: string
  key: string
}

interface Props {
  headers: TableHeader[]
  data: T[]
}

defineProps<Props>()
</script>

<style scoped>
table {
  width: 100%;
}
</style>
