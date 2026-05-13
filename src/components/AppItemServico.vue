<template>
  <br-item :density="densidade || 'small'">
    <br-icon slot="start" :icon-name="iconName" style="color: #000"></br-icon>
    <a :href="link" target="_blank">{{ title }}</a>
    <p class="text-weight-regular" slot="end">{{ description }}</p>
  </br-item>
</template>

<script setup lang="ts">
/**
 * Tipo de densidade do item
 */
type DensidadeType = 'large' | 'medium' | 'small'

/**
 * Props para o componente AppItemServico
 * @interface Props
 * @property {DensidadeType} [densidade] - Densidade do item (default: 'small')
 * @property {string} iconName - Nome do ícone a ser exibido
 * @property {string} link - URL do link do serviço
 * @property {string} title - Título do serviço
 * @property {string} description - Descrição do serviço
 */
interface Props {
  readonly densidade?: DensidadeType
  readonly iconName: string
  readonly link: string
  readonly title: string
  readonly description: string
}

defineProps<Props>()
</script>

<style scoped>
br-item,
p {
  font-size: 1em;
  margin: 0;
}
</style>
