<template>
  <div style="width: 50%; display: block; margin: 0 auto">
    <br-input
      @valueChange="mudaNome"
      label="Escreva seu nome: "
      placeholder="Seu nome aqui."
      density="large"
    ></br-input>

    <h1>Olá {{ nome }}</h1>
  </div>
  <div style="display: flex;
  flex-direction: column; align-items: center; justify-content: space-between;">
    <br-button @click="() => contador++" shape="block">Clique aqui</br-button>
    <h2>{{ contador }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mudaNome = (event: CustomEvent<string>): void => {
  nome.value = event.detail
}
const nome = ref('')
const contador = ref(0)
</script>

<style scoped></style>
