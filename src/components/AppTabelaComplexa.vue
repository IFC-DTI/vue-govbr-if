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
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
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
            <br-icon icon-name="fa-solid:search" aria-hidden="true"></br-icon>
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
          <br-icon slot="icon" icon-name="fa-solid:search" aria-hidden="true"></br-icon>
          <br-button slot="action" shape="circle" aria-label="Fechar busca" @click="closeSearch">
            <i class="fas fa-times" aria-hidden="true"></i>
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
          <button
            class="br-button circle inverted"
            type="button"
            :id="`button-dropdown-selection-${tableId}`"
            data-toggle="dropdown"
            :data-target="`selection-menu-${tableId}`"
            :aria-controls="`selection-menu-${tableId}`"
            aria-label="Ver mais opções de ação"
            aria-haspopup="true"
          >
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
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
                <i class="fas fa-chevron-down" aria-hidden="true"></i>
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
    <div class="table-footer">
      <nav class="br-pagination" aria-label="paginação">
        <div class="pagination-per-page">
          <div class="br-select">
            <div class="br-input">
              <label :for="`per-page-selection-${tableId}`">Exibir</label>
              <input
                :id="`per-page-selection-${tableId}`"
                type="text"
                :value="itemsPerPage"
                placeholder=" "
                readonly
              />
              <button
                class="br-button"
                type="button"
                aria-label="Exibir lista"
                tabindex="-1"
                data-trigger="data-trigger"
              >
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </button>
            </div>
            <div class="br-list" tabindex="0">
              <div
                v-for="perPage in [10, 20, 30]"
                :key="`per-page-${perPage}`"
                class="br-item"
                tabindex="-1"
              >
                <div class="br-radio">
                  <input
                    :id="`per-page-${perPage}-${tableId}`"
                    type="radio"
                    :name="`per-page-${tableId}`"
                    :value="perPage"
                    :checked="itemsPerPage === perPage"
                    @change="((itemsPerPage = perPage), (currentPage = 1))"
                  />
                  <label :for="`per-page-${perPage}-${tableId}`">{{ perPage }}</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span class="br-divider d-none d-sm-block mx-3"></span>
        <div class="pagination-information d-none d-sm-flex">
          <span class="current">{{ startItem }}</span
          >&ndash;<span class="per-page">{{ endItem }}</span
          >&nbsp;de&nbsp;<span class="total">{{ filteredData.length }}</span
          >&nbsp;itens
        </div>

        <div class="pagination-go-to-page d-none d-sm-flex ml-auto">
          <div class="br-select">
            <div class="br-input">
              <label :for="`go-to-selection-${tableId}`">Página</label>
              <input
                :id="`go-to-selection-${tableId}`"
                type="text"
                :value="currentPage"
                placeholder=" "
                readonly
              />
              <button
                class="br-button"
                type="button"
                aria-label="Exibir lista"
                tabindex="-1"
                data-trigger="data-trigger"
              >
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </button>
            </div>
            <div class="br-list" tabindex="0">
              <div v-for="page in totalPages" :key="`page-${page}`" class="br-item" tabindex="-1">
                <div class="br-radio">
                  <input
                    :id="`go-to-${page}-${tableId}`"
                    type="radio"
                    :name="`go-to-${tableId}`"
                    :value="page"
                    :checked="currentPage === page"
                    @change="currentPage = page"
                  />
                  <label :for="`go-to-${page}-${tableId}`">{{ page }}</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span class="br-divider d-none d-sm-block mx-3"></span>
        <div class="pagination-arrows ml-auto ml-sm-0">
          <button
            class="br-button circle"
            type="button"
            aria-label="Voltar página"
            :disabled="currentPage === 1"
            @click="previousPage"
          >
            <i class="fas fa-angle-left" aria-hidden="true"></i>
          </button>
          <button
            class="br-button circle"
            type="button"
            aria-label="Página seguinte"
            :disabled="currentPage === totalPages"
            @click="nextPage"
          >
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </button>
        </div>
      </nav>
    </div>
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

const totalPages = computed(() => {
  return Math.ceil(filteredData.value.length / itemsPerPage.value)
})

const startItem = computed(() => {
  return (currentPage.value - 1) * itemsPerPage.value + 1
})

const endItem = computed(() => {
  return Math.min(currentPage.value * itemsPerPage.value, filteredData.value.length)
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

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const guardaValorInputPesquisa = (e: { target: { value: string } }) => {
  searchQuery.value = e.target.value
}

// Watch para resetar página ao filtrar
watch(searchQuery, () => {
  currentPage.value = 1
})

// Lifecycles
onMounted(() => {
  // Inicializar comportamentos do GovBR (se necessário)
  // O Vue + eventos nativos já cuidam da maior parte da funcionalidade
})
</script>

<style scoped>
table {
  width: 100%;
}
</style>
