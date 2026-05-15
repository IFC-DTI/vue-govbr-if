<script setup lang="ts">
import CollapseMenu from './CollapseMenu.vue'
</script>

<template>
  <div class="menu">
    <div class="fundo-menu" @click="$emit('closeMenu')"></div>
    <div class="menu-content">
      <div class="menu-header">
        <img src="@/assets/Logo_IFC_horizontal.png" alt="Logo Gov.br" class="menu-logo" />
        <br-button aria-label="Fechar menu" @click="$emit('closeMenu')" shape="circle">
          <br-icon icon-name="fa-solid:times"></br-icon>
        </br-button>
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
              {
                id: 4,
                label: 'Tabela Simples',
                link: '/tabela-simples',
                icon: 'fas fa-arrow-right',
              },
              {
                id: 5,
                label: 'Tabela Complexa',
                link: '/tabela-complexa',
                icon: 'fas fa-arrow-right',
              },
              { id: 6, label: 'Formulário', link: '/formulario', icon: 'fas fa-arrow-right' },
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
  display: flex;
}

.fundo-menu {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #a1a1a1a7;
  transition: opacity 0.3s ease;
}

.menu-content {
  background-color: #fff;
  width: 20%;
  height: 100%;
  z-index: 500;
  position: absolute;
  transition:
    background-color 0.3s ease,
    width 0.3s ease;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 1em;
  border-bottom: 1px solid #cccccc;
  flex-shrink: 0;

  img {
    max-width: 100px;
  }
}

.close {
  cursor: pointer;
  min-width: 2em;
  min-height: 2em;
  border-radius: 50%;
  transition:
    background-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background-color: #c5d4eb;
    box-shadow: 0 0 0 2px #b4c8e6;
  }
}

/* Tablet: 768px até 991px */
@media (max-width: 991px) {
  .menu-content {
    width: 40%;
  }
}

/* Mobile: até 767px */
@media (max-width: 767px) {
  .menu-content {
    width: 100%;
  }

  .fundo-menu {
    background-color: transparent;
    display: none;
  }

  .menu-header {
    padding: 1rem;
  }

  .menu-header img {
    max-width: 80px;
  }
}

/* Extra small devices: até 576px */
@media (max-width: 575px) {
  .menu-header {
    padding: 0.75rem;
  }

  .menu-header img {
    max-width: 70px;
  }

  .close {
    min-width: 1.75em;
    min-height: 1.75em;
  }
}
</style>
