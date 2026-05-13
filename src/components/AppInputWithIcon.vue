<template>
  <br-input
    slot="search"
    :placeholder="placeholder"
    :action-label="actionLabel"
    :density="density"
    :is-highlight="highlight"
    @valueChange="valueInput = $event.target.value"
  >
    <br-icon @click="handleSearch()" slot="action" :icon-name="icon" aria-hidden="true"></br-icon>
  </br-input>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'

/**
 * Tipo de densidade do input
 */
type DensityType = 'small' | 'medium' | 'large'

/**
 * Props para o componente AppInputWithIcon
 * @interface Props
 * @property {string} [placeholder] - Placeholder do input
 * @property {string} [actionLabel] - Label da ação do input
 * @property {DensityType} density - Densidade do componente
 * @property {string} icon - Nome do ícone a ser exibido
 * @property {boolean} [highlight] - Se deve destacar o input
 */
interface Props {
  readonly placeholder?: string
  readonly actionLabel?: string
  readonly density: DensityType
  readonly icon: string
  readonly highlight?: boolean
}

defineProps<Props>()

const valueInput: Ref<string> = ref('')

/**
 * Realiza a busca com o valor digitado
 */
const handleSearch = (): void => {
  alert('Busca realizada: ' + valueInput.value)
}
</script>
