<template>
  <h1>Olá {{ name }}</h1>
  <br-button emphasis="primary">Clique aqui</br-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const name = ref('Jon Doe')
</script>

<style scoped></style>
