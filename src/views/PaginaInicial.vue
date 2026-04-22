<template>
  <main>
    <section>
      <br-message state="info" show-icon>
        Bem-vindo ao Instituto Federal Catarinense. Educacao publica, gratuita e de qualidade.
      </br-message>
    </section>

    <section>
      <br-card>
        <h1>Instituto Federal Catarinense</h1>
        <p>
          O IFC integra a Rede Federal de Educacao Profissional, Cientifica e Tecnologica,
          promovendo formacao cidada, inclusao social e desenvolvimento regional.
        </p>
        <br-tag>Ensino</br-tag>
        <br-tag>Pesquisa</br-tag>
        <br-tag>Extensao</br-tag>
        <br-divider></br-divider>
        <ContainerBotoes>
          <br-button emphasis="primary">Conheca o IFC</br-button>
          <br-button emphasis="secondary">Nossos Campi</br-button>
        </ContainerBotoes>
      </br-card>
    </section>

    <section>
      <br-card>
        <h2>IFC em Numeros</h2>
        <br-list>
          <br-item>Mais de 10 campi em Santa Catarina</br-item>
          <br-item>Cursos tecnicos, de graduacao e pos-graduacao</br-item>
          <br-item>Projetos de pesquisa e extensao em todas as regioes</br-item>
        </br-list>
      </br-card>
    </section>

    <section>
      <br-card>
        <h2>Comunicacao Institucional</h2>
        <br-message state="success" show-icon>
          Acompanhe noticias, editais, eventos e comunicados oficiais nos canais do IFC.
        </br-message>
        <ContainerBotoes>
          <br-button emphasis="primary">Ver Noticias</br-button>
          <br-button emphasis="secondary">Acessar Editais</br-button>
        </ContainerBotoes>
      </br-card>
    </section>

    <section>
      <br-card>
        <h2>Fale com o IFC</h2>
        <p>
          Para informacoes institucionais, utilize os canais oficiais de atendimento e ouvidoria.
        </p>
        <ContainerBotoes>
          <br-button emphasis="secondary">Contato</br-button>
          <br-button emphasis="tertiary">Ouvidoria</br-button>
        </ContainerBotoes>
      </br-card>
    </section>
  </main>
</template>

<script setup lang="ts">
import ContainerBotoes from '@/components/ContainerBotoes.vue'
</script>

<style scoped></style>
