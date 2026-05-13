<template>
  <div class="br-list no-border-list">
    <br-collapse>
      <div
        slot="trigger"
        class="br-item"
        role="button"
        :style="{ backgroundColor: hoveredId === 'main' ? '#dedede' : 'transparent' }"
        @mouseenter="hoveredId = 'main'"
        @mouseleave="hoveredId = null"
      >
        <div class="row align-items-center">
          <div class="col-auto">
            <i :class="['fas', groupIcon || 'fa-bell']" aria-hidden="true"></i>
          </div>
          <div class="col">{{ groupTitle }}</div>
        </div>
      </div>

      <div class="br-list no-border-list sub-menu-container">
        <br-collapse v-for="(sub, subIndex) in subCollapses" :key="`sub-${subIndex}`">
          <div
            slot="trigger"
            class="br-item border-0"
            role="button"
            :style="{
              backgroundColor: hoveredId === `sub-${subIndex}` ? '#dedede' : 'transparent',
            }"
            @mouseenter="hoveredId = `sub-${subIndex}`"
            @mouseleave="hoveredId = null"
          >
            <div class="row align-items-center">
              <div class="col-auto ml-2">
                <i :class="['fas', sub.icon]" aria-hidden="true"></i>
              </div>
              <div class="col">{{ sub.label }}</div>
            </div>
          </div>

          <div class="br-list no-border-list">
            <template v-for="item in sub.itens" :key="item.id">
              <router-link :to="item.link">
                <a class="br-item border-0 ml-4" role="button">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <i :class="['fas', item.icon]" aria-hidden="true"></i>
                    </div>
                    <div class="col">{{ item.label }}</div>
                  </div>
                </a>
              </router-link>
            </template>
          </div>
        </br-collapse>
      </div>
    </br-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'

/**
 * Item do menu
 * @interface ItemMenu
 * @property {string | number} id - Identificador único do item
 * @property {string} label - Rótulo do item
 * @property {string} link - Rota/link do item
 * @property {string} icon - Nome do ícone do item
 */
interface ItemMenu {
  readonly id: string | number
  readonly label: string
  readonly link: string
  readonly icon: string
}

/**
 * Subgrupo de collapse
 * @interface SubCollapse
 * @property {string | number} id - Identificador único do subgrupo
 * @property {string} label - Rótulo do subgrupo
 * @property {string} icon - Nome do ícone do subgrupo
 * @property {ItemMenu[]} itens - Array de itens do subgrupo
 */
interface SubCollapse {
  readonly id: string | number
  readonly label: string
  readonly icon: string
  readonly itens: readonly ItemMenu[]
}

/**
 * Props para o componente CollapseMenu
 * @interface Props
 * @property {string} groupTitle - Título do grupo principal
 * @property {string} groupIcon - Nome do ícone do grupo principal
 * @property {SubCollapse[]} [subCollapses] - Array de subgrupos (default: [])
 */
interface Props {
  readonly groupTitle: string
  readonly groupIcon: string
  readonly subCollapses?: readonly SubCollapse[]
}

withDefaults(defineProps<Props>(), {
  subCollapses: () => [],
})

const hoveredId: Ref<string | null> = ref<string | null>(null)
</script>

<style scoped>
.br-item {
  cursor: pointer;
}
</style>
