<template>
  <div class="template-base">
    <!-- skip-links -->
    <AppHeader @startMenu="startMenu" />
    <!-- area do conteudo -->
    <main id="main">
      <div>
        <div>
          <MenuBar @closeMenu="closeMenu" v-if="menuAberto" />
          <div class="col pt-3 pb-5"></div>
          <div id="main-content" class="main-content pl-sm-3">
            <slot />
          </div>
        </div>
      </div>
    </main>
    <footer id="footer" class="footer"></footer>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import MenuBar from '@/components/MenuBar.vue'
import { ref } from 'vue'

const menuAberto = ref(false)

const startMenu = () => {
  menuAberto.value = true
}

const closeMenu = () => {
  menuAberto.value = false
}
</script>
