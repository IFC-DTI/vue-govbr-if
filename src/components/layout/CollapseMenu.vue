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
  flex: 1;
  overflow-y: auto;
}

.br-item {
  cursor: pointer;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
}

/* Mobile adjustments */
@media (max-width: 767px) {
  .br-item {
    padding: 0.65rem 0.875rem;
    font-size: 0.9rem;
    border-bottom: 1px solid #cccccc;
  }
}

@media (max-width: 575px) {
  .br-item {
    padding: 0.6rem 0.75rem;
    font-size: 0.85rem;
  }
}
</style>
