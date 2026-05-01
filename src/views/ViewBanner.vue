<template>
  <main>
    <div class="">
      <h1 class="text-center">Banner</h1>
      <AppCarousel :banners="meusBanners" />
    </div>
  </main>
</template>

<script setup lang="ts">
import AppCarousel from '@/components/AppCarousel.vue'

const meusBanners = [
  {
    id: 1,
    label: 'Nova Identidade Digital',
    description: 'Saiba como emitir sua nova carteira de identidade nacional.',
    image: 'https://picsum.photos/id/10/1200/400',
    alt: 'Pessoa segurando documento',
  },
  {
    id: 2,
    label: 'Serviços Públicos 2026',
    description: 'Confira o calendário de atualizações do portal gov.br.',
    image: 'https://picsum.photos/id/20/1200/400',
    alt: 'Interface do portal em um tablet',
  },
]
</script>
