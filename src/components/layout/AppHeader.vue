<script setup lang="ts">
import AppInputWithIcon from '@/components/AppInputWithIcon.vue'
</script>

<template>
  <br-header title="IFC" subtitle="Instituto Federal Catarinense" :compact="false" density="medium">
    <br-header-logo slot="logo" src="/assets/images/Logo_IFC_horizontal.png"></br-header-logo>

    <br-header-list slot="links" list-title="Acesso Rápido">
      <br-header-link href="/">Página Inicial</br-header-link>
      <br-header-link href="/cards">Cards</br-header-link>
      <br-header-link href="/banner">Banner</br-header-link>
      <br-header-link href="/exemplo">Exemplo</br-header-link>
      <br-header-link href="/tabela-simples">Tabela</br-header-link>
      <br-header-link href="/tabela-complexa">Tabela Dois</br-header-link>
      <br-header-link href="/formulario">Formulário</br-header-link>
      <br-header-link href="/administracao">Administração</br-header-link>
    </br-header-list>

    <br-header-list slot="functions" list-title="Funcionalidades do Sistema">
      <br-header-function href="javascript:void(0)">
        <br-icon slot="icon" icon-name="fa7-solid:chart-column"></br-icon>
        Funcionalidade 1
      </br-header-function>
      <br-header-function href="javascript:void(0)">
        <br-icon slot="icon" icon-name="fa7-solid:headphones-simple"></br-icon>
        Funcionalidade 2
      </br-header-function>
    </br-header-list>

    <AppInputWithIcon
      placeholder="O que você procura?"
      action-label="Buscar"
      density="large"
      icon="fa-solid:search"
      :highlight="true"
    />

    // https://govbr-ds.gitlab.io/bibliotecas/wbc/govbr-ds-wbc/docs/components/sign-in/
    <br-sign-in slot="access" label="Entrar" density="small">
      <br-icon slot="icon" icon-name="fa6-solid:user"></br-icon>
      Entrar
    </br-sign-in>

    <br-button
      slot="menu-trigger"
      shape="circle"
      density="small"
      emphasis="tertiary"
      aria-label="Abrir menu"
    >
      <br-icon icon-name="fa7-solid:bars" @click="$emit('startMenu')"></br-icon>
    </br-button>

    <span slot="caption">Instituto Federal Catarinense</span>
    <span slot="subcaption">Página Oficial</span>
  </br-header>
</template>
