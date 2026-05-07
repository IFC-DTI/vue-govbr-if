<script setup lang="ts">
import AppCard from '@/components/AppCard.vue'

const DEFAULT_DESCRIPTION = 'Este é um exemplo básico do componente br-card com conteúdo simples.'

// pode adicionar algum elemento que queira testar dentro do card
type CardSlot = 'button' | 'image' | 'datetime' | null

// Definição da interface para os cards
interface Card {
  title: string
  hover?: boolean
  disabled?: boolean
  slot: CardSlot
}

const cards: Card[] = [
  { title: 'Card Padrão Hover', hover: true, slot: null },
  { title: 'Card Padrão Disabled', disabled: true, slot: null },
  { title: 'Card Padrão com Botão', slot: 'button' },
  { title: 'Card Padrão com Imagem', slot: 'image' },
  { title: 'Card Padrão com Data', slot: 'datetime' },
]
</script>

<template>
  <main>
    <div class="d-flex flex-column align-items-center">
      <h1>Cards</h1>
      <div class="d-flex flex-wrap justify-content-center gap-3">
        <AppCard
          v-for="card in cards"
          :key="card.title"
          :title="card.title"
          :description="DEFAULT_DESCRIPTION"
          :hover="card.hover"
          :disabled="card.disabled"
        >
          <br-button v-if="card.slot === 'button'" emphasis="secondary">Teste</br-button>
          <img
            v-else-if="card.slot === 'image'"
            src="@/assets/sou-ifc-logo.png"
            alt="Imagem do Card"
          />
          <br-datetime-picker v-else-if="card.slot === 'datetime'" mode="date"></br-datetime-picker>
        </AppCard>
      </div>
    </div>
  </main>
</template>
