<template>
  <div class="template-base">
    <!-- skip-links -->
    <Header />
    <!-- area do conteudo -->
    <main id="main" class="d-flex flex-fill">
      <div class="container-lg d-flex">
        <div class="row">
          <Menu />
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
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
</script>
