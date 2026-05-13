<template>
  <div class="col">
    <p class="text-weight-semi-bold">{{ nomeSessao }}</p>
    <br-divider />
    <AppItemServico
      v-for="item in items"
      :key="item.id"
      :densidade="densidade"
      :icon-name="item.iconName"
      :link="item.link"
      :title="item.title"
      :description="item.description"
    />
  </div>
</template>

<script setup lang="ts">
import AppItemServico from './AppItemServico.vue'

/**
 * Tipo de densidade do item
 */
type DensidadeType = 'large' | 'medium' | 'small'

/**
 * Item de serviço
 * @interface ItemServico
 * @property {string} id - Identificador único do item
 * @property {string} iconName - Nome do ícone a ser exibido
 * @property {string} link - URL do link do serviço
 * @property {string} title - Título do serviço
 * @property {string} description - Descrição do serviço
 */
interface ItemServico {
  readonly id: string
  readonly iconName: string
  readonly link: string
  readonly title: string
  readonly description: string
}

/**
 * Props para o componente AppSectionItemsServicos
 * @interface Props
 * @property {DensidadeType} [densidade] - Densidade dos itens (default: 'small')
 * @property {ItemServico[]} items - Array de itens de serviço a serem exibidos
 * @property {string} nomeSessao - Nome da sessão
 */
interface Props {
  readonly densidade?: DensidadeType
  readonly items: readonly ItemServico[]
  readonly nomeSessao: string
}

defineProps<Props>()
</script>
