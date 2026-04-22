<script setup lang="ts">
import CollapseMenu from './CollapseMenu.vue'
</script>

<template>
  <!-- <br-menu density="medium" aria-label="Menu médio" breakpoints="col-sm-4 col-lg-3">
    <br-menu-header
      slot="header"
      logo-src="https://picsum.photos/400"
      logo-alt="Logo Gov.br"
      signature="Densidade Média"
    >
    </br-menu-header>

    <br-menu-list divider label="Relatórios" icon="chart-line" menu-level="0">
      <br-menu-item icon="chart-bar" href="#">Vendas</br-menu-item>
      <br-menu-list label="Analytics" icon="chart-pie" menu-level="1">
        <br-menu-item icon="users" href="#">Usuários</br-menu-item>
        <br-menu-item icon="eye" href="#">Visualizações</br-menu-item>
        <br-menu-item icon="mouse-pointer" href="#">Conversões</br-menu-item>
      </br-menu-list>

      <br-menu-item icon="file-pdf" href="#">Exportar PDF</br-menu-item>
    </br-menu-list>

    <br-menu-item divider icon="heart" href="#"> Favoritos </br-menu-item>
  </br-menu> -->
  <div class="menu">
    <div class="fundo-menu" @click="$emit('closeMenu')"></div>
    <div class="menu-content">
      <div class="menu-header">
        <img src="@/assets/govbr.svg" alt="Logo Gov.br" class="menu-logo" />
        <br-icon @click="$emit('closeMenu')" class="close" icon-name="fa-solid:times"></br-icon>
      </div>
      <!-- <br-collapse>
        <div slot="trigger" style="display: flex; gap: 1em;"><i class="fas fa-bell"></i>Agrupamento do Menu 1</div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste facere neque quidem eligendi
        unde quisquam sunt, totam, atque eos eum voluptatem debitis! Illum, commodi expedita?
        Consequuntur libero laborum iste fugiat.
      </br-collapse> -->
      <CollapseMenu
        group-title="Agrupamento do Menu 1"
        group-icon="fas fa-bell"
        :sub-collapses="[
          {
            id: 1,
            label: 'Submenu 1',
            icon: 'fas fa-file',
            itens: [{ id: 1, label: 'Usuários', link: '#', icon: 'fas fa-file' }],
          },
          {
            id: 2,
            label: 'Submenu 2',
            icon: 'fas fa-file',
            itens: [{ id: 2, label: 'Admins', link: '#', icon: 'fas fa-user' }],
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
  position: absolute;
  top: 0;
  z-index: 1000;
  height: 100vh;
  width: 100%;
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
