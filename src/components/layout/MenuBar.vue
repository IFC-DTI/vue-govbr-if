<script setup lang="ts">
import CollapseMenu from './CollapseMenu.vue'
</script>

<template>
  <div class="menu">
    <div class="fundo-menu" @click="$emit('closeMenu')"></div>
    <div class="menu-content">
      <div class="menu-header">
        <img src="@/assets/Logo_IFC_horizontal.png" alt="Logo Gov.br" class="menu-logo" />
        <br-icon @click="$emit('closeMenu')" class="close" icon-name="fa-solid:times"></br-icon>
      </div>

      <CollapseMenu
        group-title="Agrupamento 1"
        group-icon="fas fa-bell"
        :sub-collapses="[
          {
            id: 1,
            label: 'Páginas',
            icon: 'fas fa-file',
            itens: [
              { id: 1, label: 'Cards', link: '/cards', icon: 'fas fa-arrow-right' },
              { id: 2, label: 'Banner', link: '/banner', icon: 'fas fa-arrow-right' },
              { id: 3, label: 'Exemplo', link: '/exemplo', icon: 'fas fa-arrow-right' },
              { id: 4, label: 'Tabela Simples', link: '/tabela-simples', icon: 'fas fa-arrow-right' },
              { id: 5, label: 'Tabela Complexa', link: '/tabela-complexa', icon: 'fas fa-arrow-right' },
            ],
          },
          {
            id: 2,
            label: 'Administrativo',
            icon: 'fas fa-cog',
            itens: [{ id: 1, label: 'Administração', link: '/administracao', icon: 'fas fa-user' }],
          },
        ]"
      />
    </div>
  </div>
</template>

<style>
* {
  color: #2864ae;
}
.menu {
  position: fixed;
  inset: 0;
  z-index: 1000;
  height: 100dvh;
  width: 100vw;
}

.fundo-menu {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #a1a1a1a7;
}

.menu-content {
  background-color: #fff;
  width: 20%;
  height: 100%;
  z-index: 500;
  position: absolute;
}
.menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 1em;
  border-bottom: 1px solid #cccccc;
  img {
    max-width: 100px;
  }
}

.close {
  cursor: pointer;
  min-width: 2em;
  min-height: 2em;
  border-radius: 50%;
  &:hover {
    background-color: #c5d4eb;
    box-shadow: 0 0 0 2px #b4c8e6;
  }
}
</style>
