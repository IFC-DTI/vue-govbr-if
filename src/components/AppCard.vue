<template>
  <br-card :hover="hover" :disabled="disabled" class="m-2">
    <h5>{{ title }}</h5>
    <p>{{ description }}</p>
    <slot />
  </br-card>
</template>

<script setup lang="ts">
/**
 * Props para o componente AppCard
 * @interface Props
 * @property {boolean} [hover] - Ativa efeito hover no card
 * @property {boolean} [disabled] - Desabilita o card
 * @property {string} title - Título do card
 * @property {string} description - Descrição do card
 */
interface Props {
  readonly hover?: boolean
  readonly disabled?: boolean
  readonly title: string
  readonly description: string
}

withDefaults(defineProps<Props>(), {
  hover: false,
  disabled: false,
})
</script>
