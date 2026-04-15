<template>
  <div class="container">
    <h1>{{ i }}</h1>
    <button @click="addCont">Adicionar contador</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const i = ref(0)
const addCont = () => i.value++

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 5rem;
  }
  button {
    padding: 1rem 2rem;
    border: 0;
    border-radius: 25px;
    transition: 0.4s;
    cursor: pointer;
    &:hover {
      background-color: #d3d3d3;
    }
  }
}
</style>
