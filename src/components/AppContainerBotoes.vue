<template>
  <div class="container-botoes">
    <slot />
  </div>
</template>

<script setup lang="ts">
/**
 * Props para o componente AppContainerBotoes
 * @interface Props
 * @property {string} [gap] - Espaçamento entre os botões (default: '1em')
 */
interface Props {
  readonly gap?: string
}

withDefaults(defineProps<Props>(), {
  gap: '1em',
})
</script>

<style>
.container-botoes {
  display: flex;
  gap: v-bind(gap);
}
</style>
