<template>
  <br-input
    slot="search"
    :placeholder="placeholder"
    :action-label="actionLabel"
    :density="density"
    :is-highlight="highlight"
    @valueChange="valueInput = $event.target.value"
  >
    <br-icon @click="handleSearch()" slot="action" :icon-name="icon" aria-hidden="true"></br-icon>
  </br-input>
</template>

<script setup lang="ts">
defineProps<{
  placeholder?: string
  actionLabel?: string
  density: 'small' | 'medium' | 'large'
  icon: string
  highlight?: boolean
}>()

import { ref } from 'vue'

const valueInput = ref('')

const handleSearch = () => {
  alert('Busca realizada: ' + valueInput.value)
}
</script>
