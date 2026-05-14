<template>
  <div class="br-list no-border-list">
    <br-collapse>
      <div
        slot="trigger"
        class="br-item menu-item"
        role="button"
        :class="{ 'menu-item-hover': hoveredId === 'main' }"
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
            class="br-item menu-item border-0"
            role="button"
            :class="{ 'menu-item-hover': hoveredId === `sub-${subIndex}` }"
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
                <a class="br-item menu-item border-0 ml-4" role="button">
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
import { ref } from 'vue'

withDefaults(defineProps<Props>(), {
  subCollapses: () => [],
})

const hoveredId = ref<string | null>(null)

interface ItemMenu {
  id: string | number
  label: string
  link: string
  icon: string
}

interface SubCollapse {
  id: string | number
  label: string
  icon: string
  itens: ItemMenu[]
}

interface Props {
  groupTitle: string
  groupIcon: string
  subCollapses?: SubCollapse[]
}
</script>

<style scoped>
.br-list {
  background-color: var(--color-surface);
  color: var(--color-text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.br-item {
  cursor: pointer;
  color: var(--color-text-primary);
  transition: background-color 0.2s ease, color 0.2s ease;
}

.menu-item {
  background-color: transparent;
}

.menu-item.menu-item-hover {
  background-color: var(--color-hover);
}

.sub-menu-container {
  background-color: var(--color-surface-elevated);
}

a {
  color: var(--color-text-primary);
  text-decoration: none;

  &:hover {
    color: var(--color-primary);
  }
}

router-link {
  color: inherit;
}
</style>
