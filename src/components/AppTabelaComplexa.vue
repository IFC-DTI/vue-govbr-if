<template>
  <div
    ref="tableContainer"
    class="br-table"
    :class="density"
    data-search="data-search"
    data-selection="data-selection"
    data-collapse="data-collapse"
  >
    <!-- HEADER -->
    <div class="table-header">
      <div class="top-bar">
        <div class="table-title">{{ title }}</div>
        <div class="actions-trigger text-nowrap">
          <br-dropdown placement="bottom-end">
            <br-button
              shape="circle"
              slot="trigger"
              title="Ver mais opções"
              aria-label="Definir
            densidade da tabela"
            >
              <i class="fas fa-ellipsis-v"></i>
            </br-button>
            <br-list slot="target" list-title="Menu">
              <br-item>
                <button
                  class="br-item"
                  type="button"
                  data-density="small"
                  role="menuitem"
                  @click="setDensity('small')"
                >
                  Densidade alta
                </button>
              </br-item>
              <br-item>
                <button
                  class="br-item"
                  type="button"
                  data-density="medium"
                  role="menuitem"
                  @click="setDensity('medium')"
                >
                  Densidade média
                </button>
              </br-item>
              <br-item>
                <button
                  class="br-item"
                  type="button"
                  data-density="large"
                  role="menuitem"
                  @click="setDensity('large')"
                >
                  Densidade baixa
                </button>
              </br-item>
            </br-list>
          </br-dropdown>
        </div>
        <div class="search-trigger">
          <br-button class="br-button circle" aria-label="Abrir busca" @click="toggleSearch">
            <br-icon icon-name="fa-solid:search" inert></br-icon>
          </br-button>
        </div>
      </div>

      <!-- SEARCH BAR -->
      <div v-if="showSearch">
        <br-input
          placeholder="Faça sua pesquisa."
          is-highlight
          action-label="Pesquisar"
          @input="guardaValorInputPesquisa"
        >
          <br-icon slot="icon" icon-name="fa-solid:search" inert></br-icon>
          <br-button slot="action" shape="circle" aria-label="Fechar busca" @click="closeSearch">
            <i class="fas fa-times"></i>
          </br-button>
        </br-input>
      </div>

      <!-- SELECTED BAR -->
      <div v-if="selectedRows.size > 0" class="selected-bar show">
        <div class="info">
          <span class="count" style="color: white">{{ selectedRows.size }}</span>
          <span class="text" style="color: white">{{
            selectedRows.size > 1 ? 'itens selecionados' : 'item selecionado'
          }}</span>
        </div>
        <div class="actions-trigger text-nowrap">
          <br-button shape="circle" aria-label="Ver mais opções de ação" aria-haspopup="true">
            <i class="fas fa-ellipsis-v"></i>
          </br-button>
          <div
            :id="`selection-menu-${tableId}`"
            class="br-list"
            role="menu"
            :aria-labelledby="`button-dropdown-selection-${tableId}`"
            hidden="hidden"
          >
            <button
              class="br-item"
              type="button"
              role="menuitem"
              @click="emit('action', { action: 'delete', items: Array.from(selectedRows) })"
            >
              Deletar selecionados
            </button>
            <span class="br-divider"></span>
            <button
              class="br-item"
              type="button"
              role="menuitem"
              @click="emit('action', { action: 'export', items: Array.from(selectedRows) })"
            >
              Exportar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- TABLE -->
    <table>
      <caption>
        {{
          title
        }}
      </caption>
      <thead>
        <tr>
          <td class="column-collapse" scope="col" aria-hidden="true"></td>
          <th class="column-checkbox" scope="col">
            <div class="br-checkbox hidden-label">
              <input
                :id="`check-all-${tableId}`"
                :name="`check-all-${tableId}`"
                type="checkbox"
                aria-label="Selecionar tudo"
                :checked="isAllSelected"
                @change="toggleSelectAll"
              />
              <label :for="`check-all-${tableId}`">Selecionar todas as linhas</label>
            </div>
          </th>
          <th v-for="header in headers" :key="header.key" scope="col">
            {{ header.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, index) in paginatedData" :key="`row-${index}`">
          <tr :class="{ 'is-selected': selectedRows.has(item.id) }">
            <td>
              <button
                class="br-button circle small"
                type="button"
                :id="`button-line-${index}-${tableId}`"
                :aria-label="`Expandir/Retrair ${item[expandableKey] || 'Detalhes'}`"
                data-toggle="collapse"
                :data-target="`collapse-${index}-${tableId}`"
                :aria-describedby="`collapse-${index}-${tableId}`"
              >
                <i class="fas fa-chevron-down"></i>
              </button>
            </td>
            <td>
              <div class="br-checkbox hidden-label">
                <input
                  :id="`check-line-${index}-${tableId}`"
                  :name="`check-line-${index}-${tableId}`"
                  type="checkbox"
                  :aria-label="`Selecionar linha ${index + 1}`"
                  :checked="selectedRows.has(item.id)"
                  @change="toggleSelectRow(item.id)"
                />
                <label :for="`check-line-${index}-${tableId}`"
                  >Selecionar linha {{ index + 1 }}</label
                >
              </div>
            </td>
            <td v-for="header in headers" :key="`${index}-${header.key}`" :data-th="header.label">
              {{ item[header.key] }}
            </td>
          </tr>
          <tr v-if="expandableKey && item[expandableKey]" class="collapse">
            <td
              :id="`collapse-${index}-${tableId}`"
              aria-hidden="true"
              hidden="hidden"
              :colspan="headers.length + 2"
            >
              {{ item[expandableKey] }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>

    <!-- FOOTER / PAGINATION -->
    <br-pagination
      variant="contextual"
      :total-items="filteredData.length"
      :current="currentPage"
      :per-page="itemsPerPage"
      @pageChange="onPageChange"
      @perPageChange="onPerPageChange"
    ></br-pagination>
  </div>
</template>

<script setup lang="ts" generic="T extends Record<string, any>">
import { ref, computed, watch, onMounted } from 'vue'

interface TableHeader {
  label: string
  key: string
}

interface Props {
  title: string
  headers: TableHeader[]
  data: T[]
  expandableKey?: string
}

interface PageChangeDetail {
  current?: number
  page?: number
}

const props = withDefaults(defineProps<Props>(), {
  expandableKey: 'details',
})

const emit = defineEmits<{
  action: [{ action: string; items: (string | number)[] }]
  selectionChange: [selected: Set<string | number>]
}>()

// State
const tableContainer = ref<HTMLDivElement | null>(null)
const tableId = ref(`table-${Math.random().toString(36).substr(2, 9)}`)
const density = ref<'small' | 'medium' | 'large'>('medium')
const showSearch = ref(false)
const searchQuery = ref('')
const selectedRows = ref<Set<string | number>>(new Set())
const currentPage = ref(1)
const itemsPerPage = ref(20)

// Computed

const filteredData = computed(() => {
  if (!searchQuery.value.trim()) {
    return props.data
  }

  const query = searchQuery.value.toLowerCase()
  return props.data.filter((row) => {
    return props.headers.some((header) => {
      const cellValue = String(row[header.key] || '').toLowerCase()
      return cellValue.includes(query)
    })
  })
})

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredData.value.slice(start, end)
})

const isAllSelected = computed(() => {
  if (paginatedData.value.length === 0) return false
  return paginatedData.value.every((row) => selectedRows.value.has(row.id))
})

// Methods
const setDensity = (newDensity: 'small' | 'medium' | 'large') => {
  density.value = newDensity
  closeDensityMenu()
}

const closeDensityMenu = () => {
  const menu = tableContainer.value?.querySelector(`#density-menu-${tableId.value}`)
  if (menu) {
    menu.setAttribute('hidden', '')
  }
}

const toggleSearch = () => {
  showSearch.value = !showSearch.value
}

const closeSearch = () => {
  showSearch.value = false
  searchQuery.value = ''
}

const toggleSelectRow = (rowId: string | number) => {
  if (selectedRows.value.has(rowId)) {
    selectedRows.value.delete(rowId)
  } else {
    selectedRows.value.add(rowId)
  }
  emit('selectionChange', selectedRows.value)
}

const toggleSelectAll = () => {
  if (isAllSelected.value) {
    paginatedData.value.forEach((row) => {
      selectedRows.value.delete(row.id)
    })
  } else {
    paginatedData.value.forEach((row) => {
      selectedRows.value.add(row.id)
    })
  }
  emit('selectionChange', selectedRows.value)
}

const guardaValorInputPesquisa = (e: { target: { value: string } }) => {
  searchQuery.value = e.target.value
}

const onPageChange = (event: CustomEvent<PageChangeDetail>) => {
  const newPage = event.detail?.current || event.detail?.page || currentPage.value
  currentPage.value = newPage
}

const onPerPageChange = (event: CustomEvent<{ perPage: number }>) => {
  itemsPerPage.value = event.detail?.perPage ?? itemsPerPage.value
  currentPage.value = 1
}

// Watch para resetar página ao filtrar
watch(searchQuery, () => {
  currentPage.value = 1
})

// Watch para garantir que a página atual é válida
watch(filteredData, () => {
  const maxPage = Math.ceil(filteredData.value.length / itemsPerPage.value) || 1
  if (currentPage.value > maxPage) {
    currentPage.value = maxPage
  }
})

// Lifecycles
onMounted(() => {
  // Listener nativo para pageChange da paginação
  if (tableContainer.value) {
    const pagination = tableContainer.value.querySelector('br-pagination')
    if (pagination) {
      pagination.addEventListener('pageChange', (event: Event) => {
        const customEvent = event as CustomEvent<PageChangeDetail>
        const newPage = customEvent.detail?.current || customEvent.detail?.page || 1
        if (newPage && newPage !== currentPage.value) {
          currentPage.value = newPage
        }
      })
    }
  }
})
</script>

<style scoped>
table {
  width: 100%;
}
</style>
