<template>
  <div :class="`br-table ${density}`">
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

        <br-dropdown placement="bottom-end">
          <br-button slot="trigger" shape="circle" aria-label="Ver mais opções de ação">
            <i class="fas fa-ellipsis-v" style="color: #fff"></i>
          </br-button>
          <br-list slot="target" list-title="Ações">
            <br-item @click="emit('action', { action: 'delete', items: Array.from(selectedRows) })">
              <span> Deletar selecionados </span>
            </br-item>
            <br-item @click="emit('action', { action: 'export', items: Array.from(selectedRows) })">
              <span>Exportar</span>
            </br-item>
          </br-list>
        </br-dropdown>
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
          <td class="column-collapse" aria-hidden="true"></td>
          <th class="column-checkbox">
            <div class="br-checkbox hidden-label">
              <input
                :id="`check-all-${tableId}`"
                :name="`check-all-${tableId}`"
                type="checkbox"
                aria-label="Selecionar tudo"
                :indeterminate="selectedRows.size > 0"
                @change="toggleSelectAll"
                ref="checkAllInput"
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
          <!-- LINHA PRINCIPAL -->
          <tr :class="{ 'is-selected': selectedRows.has(item.id) }">
            <td>
              <br-button
                shape="circle"
                :aria-label="`Expandir/Retrair ${item[expandableKey] || 'Detalhes'}`"
                @click="toggleRowExpand(index)"
              >
                <br-icon
                  :icon-name="
                    expandedRows.has(index) ? 'fa-solid:chevron-up' : 'fa-solid:chevron-down'
                  "
                ></br-icon>
              </br-button>
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
                <label :for="`check-line-${index}-${tableId}`">
                  Selecionar linha {{ index + 1 }}
                </label>
              </div>
            </td>
            <td v-for="header in headers" :key="`${index}-${header.key}`" :data-th="header.label">
              {{ item[header.key] }}
            </td>
          </tr>

          <!-- LINHA DE DETALHES (COLLAPSE) -->
          <tr v-if="expandedRows.has(index) && item[expandableKey]" class="collapse-content">
            <!-- O colspan deve somar: botão expandir (1) + checkbox (1) + total de headers -->
            <td :colspan="headers.length + 2">
              <div class="collapse-body">
                {{ item[expandableKey] }}
              </div>
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
import { ref, computed, watch, onMounted, type Ref, type ComputedRef } from 'vue'

/**
 * Tipo de densidade da tabela
 */
type DensityType = 'small' | 'medium' | 'large'

/**
 * Cabeçalho da tabela
 * @interface TableHeader
 * @property {string} label - Rótulo do cabeçalho
 * @property {string} key - Chave para acessar o dado na linha
 */
interface TableHeader {
  readonly label: string
  readonly key: string
}

/**
 * Props para o componente AppTabelaComplexa
 * @interface Props
 * @property {string} title - Título da tabela
 * @property {TableHeader[]} headers - Array de cabeçalhos
 * @property {T[]} data - Array de dados a exibir
 * @property {string} [expandableKey] - Chave do campo expansível (default: 'details')
 */
interface Props {
  readonly title: string
  readonly headers: readonly TableHeader[]
  readonly data: readonly T[]
  readonly expandableKey?: string
}

/**
 * Detalhe do evento de mudança de página
 * @interface PageChangeDetail
 */
interface PageChangeDetail {
  readonly current?: number
  readonly page?: number
}

const props = withDefaults(defineProps<Props>(), {
  expandableKey: 'details',
})

const emit = defineEmits<{
  action: [{ action: string; items: (string | number)[] }]
  selectionChange: [selected: Set<string | number>]
}>()

// State
const tableContainer: Ref<HTMLDivElement | null> = ref(null)
const checkAllInput: Ref<HTMLInputElement | null> = ref(null)
const tableId: Ref<string> = ref(`table-${Math.random().toString(36).substr(2, 9)}`)
const density: Ref<DensityType> = ref<DensityType>('medium')
const showSearch: Ref<boolean> = ref(false)
const searchQuery: Ref<string> = ref('')
const selectedRows: Ref<Set<string | number>> = ref<Set<string | number>>(new Set())
const expandedRows: Ref<Set<string | number>> = ref<Set<string | number>>(new Set())
const currentPage: Ref<number> = ref(1)
const itemsPerPage: Ref<number> = ref(20)

// Computed

const filteredData: ComputedRef<T[]> = computed(() => {
  if (!searchQuery.value.trim()) {
    return props.data as T[]
  }

  const query = searchQuery.value.toLowerCase()
  return (props.data as T[]).filter((row) => {
    return props.headers.some((header) => {
      const cellValue = String(row[header.key] || '').toLowerCase()
      return cellValue.includes(query)
    })
  })
})

const paginatedData: ComputedRef<T[]> = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredData.value.slice(start, end)
})

const isAllSelected: ComputedRef<boolean> = computed(() => {
  if (paginatedData.value.length === 0) return false
  return paginatedData.value.every((row) => selectedRows.value.has(row['id' as keyof T]))
})

const isPartiallySelected: ComputedRef<boolean> = computed(() => {
  if (paginatedData.value.length === 0) return false
  const someSelected = paginatedData.value.some((row) =>
    selectedRows.value.has(row['id' as keyof T]),
  )
  return someSelected && !isAllSelected.value
})

// Methods

/**
 * Define a densidade da tabela
 * @param newDensity - Nova densidade
 */
const setDensity = (newDensity: DensityType): void => {
  density.value = newDensity
  closeDensityMenu()
}

/**
 * Fecha o menu de densidade
 */
const closeDensityMenu = (): void => {
  const menu = tableContainer.value?.querySelector(`#density-menu-${tableId.value}`)
  if (menu) {
    menu.setAttribute('hidden', '')
  }
}

/**
 * Alterna a visibilidade da barra de pesquisa
 */
const toggleSearch = (): void => {
  showSearch.value = !showSearch.value
}

/**
 * Fecha a barra de pesquisa
 */
const closeSearch = (): void => {
  showSearch.value = false
  searchQuery.value = ''
}

/**
 * Alterna a seleção de uma linha
 * @param rowId - ID da linha
 */
const toggleSelectRow = (rowId: string | number): void => {
  if (selectedRows.value.has(rowId)) {
    selectedRows.value.delete(rowId)
  } else {
    selectedRows.value.add(rowId)
  }
  atualizarIndeterminate()
  emit('selectionChange', selectedRows.value)
}

/**
 * Alterna a seleção de todas as linhas
 */
const toggleSelectAll = (): void => {
  if (isPartiallySelected.value) {
    paginatedData.value.forEach((row) => {
      selectedRows.value.delete(row['id' as keyof T])
    })
  } else if (isAllSelected.value) {
    paginatedData.value.forEach((row) => {
      selectedRows.value.delete(row['id' as keyof T])
    })
  } else {
    paginatedData.value.forEach((row) => {
      selectedRows.value.add(row['id' as keyof T])
    })
  }
  atualizarIndeterminate()
  emit('selectionChange', selectedRows.value)
}

/**
 * Atualiza o estado indeterminado do checkbox "selecionar tudo"
 */
const atualizarIndeterminate = async (): Promise<void> => {
  if (checkAllInput.value) {
    checkAllInput.value.checked = false
  }
}

/**
 * Guarda o valor de pesquisa
 * @param e - Evento de entrada
 */
const guardaValorInputPesquisa = (e: { target: { value: string } }): void => {
  searchQuery.value = e.target.value
}

/**
 * Alterna a expansão de uma linha
 * @param rowId - ID da linha
 */
const toggleRowExpand = (rowId: string | number): void => {
  if (expandedRows.value.has(rowId)) {
    expandedRows.value.delete(rowId)
  } else {
    expandedRows.value.add(rowId)
  }
}

/**
 * Manipula mudança de página
 * @param event - Evento de mudança de página
 */
const onPageChange = (event: CustomEvent<PageChangeDetail>): void => {
  const newPage = event.detail?.current || event.detail?.page || currentPage.value
  currentPage.value = newPage
}

/**
 * Manipula mudança de itens por página
 * @param event - Evento de mudança de itens por página
 */
const onPerPageChange = (event: CustomEvent<{ perPage: number }>): void => {
  itemsPerPage.value = event.detail?.perPage ?? itemsPerPage.value
  currentPage.value = 1
}

watch(searchQuery, () => {
  currentPage.value = 1
})

watch(filteredData, () => {
  const maxPage = Math.ceil(filteredData.value.length / itemsPerPage.value) || 1
  if (currentPage.value > maxPage) {
    currentPage.value = maxPage
  }
})

// Lifecycles
onMounted(() => {
  atualizarIndeterminate()

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

br-item {
  cursor: pointer;
}

tr.collapse-content {
  background-color: #f5f5f5;
}

tr.collapse-content td {
  padding: 0;
  border-top: 1px solid #e0e0e0;
}

.collapse-body {
  padding: 1rem;
  display: block;
  word-wrap: break-word;
  white-space: pre-wrap;
}
</style>
