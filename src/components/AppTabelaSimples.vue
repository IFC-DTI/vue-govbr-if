<template>
  <div :title="title">
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.key" scope="col">
            {{ header.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td v-for="header in headers" :key="header.key">
            {{ item[header.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts" generic="T extends Record<string, any>">
interface TableHeader {
  label: string
  key: string
}

interface Props {
  title: string
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
