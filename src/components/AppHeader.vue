<template>
  <br-header title="IFC" subtitle="Instituto Federal Catarinense" :compact="false" density="medium">
    <br-header-logo slot="logo" src="assets/images/Logo_IFC_horizontal.png"></br-header-logo>

    <br-header-list slot="links" list-title="Acesso Rápido">
      <br-header-link href="https://ifc.edu.br">Página IFC</br-header-link>
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

    <br-input slot="search" placeholder="O que você procura?" is-highlight action-label="Buscar">
      <br-icon slot="action" icon-name="fa-solid:search" aria-hidden="true"></br-icon>
    </br-input>

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
      <br-icon icon-name="fa7-solid:align-justify" @click="$emit('startMenu')"></br-icon>
    </br-button>

    <span slot="caption">Instituto Federal Catarinense</span>
    <span slot="subcaption">Página Oficial</span>
  </br-header>
</template>
