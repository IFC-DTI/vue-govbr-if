<template>
  <div class="carousel-wrapper">
    <div class="br-carousel" data-stage="in" data-mobile-nav="" aria-label="Carrossel de Exemplo" aria-roledescription="carousel">
      <div class="carousel-button">
        <button
          class="br-button carousel-btn-prev terciary circle"
          type="button"
          aria-label="Anterior"
          @click="prev"
          :disabled="currentSlide === 0"
        >
          <i class="fas fa-chevron-left" aria-hidden="true"></i>
        </button>
      </div>
      <div class="carousel-stage">
        <transition name="slide" mode="out-in">
          <div
            v-if="activeSlide"
            :key="currentSlide"
            class="carousel-page"
            role="group"
            aria-roledescription="slide"
            :aria-label="`Slide ${currentSlide + 1} de ${slides.length}`"
          >
            <div
              class="carousel-content"
              :style="{ backgroundColor: activeSlide.hexColor }"
            >
              <div class="h3 carousel-title">{{ activeSlide.title }}</div>
            </div>
          </div>
        </transition>
      </div>
      <div class="carousel-button">
        <button
          class="br-button carousel-btn-next terciary circle"
          type="button"
          aria-label="Próximo"
          @click="next"
          :disabled="currentSlide === slides.length - 1"
        >
          <i class="fas fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
      <div class="carousel-step">
        <nav class="br-step" data-initial="1" data-type="simple" role="none">
          <div
            class="step-progress"
            role="listbox"
            aria-orientation="horizontal"
            aria-label="Lista de Opções"
          >
            <button
              v-for="(slide, index) in slides"
              :key="index"
              class="step-progress-btn"
              role="option"
              :aria-posinset="index + 1"
              :aria-setsize="slides.length"
              :aria-pressed="currentSlide === index"
              type="button"
              @click="currentSlide = index"
            >
              <span class="step-info">{{ slide.label }}</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Slide {
  title: string
  label: string
  bgColor: string
  hexColor: string
}

const slides: Slide[] = [
  { title: 'Página 1', label: 'Exemplo de Rótulo 1', bgColor: 'bg-blue-10', hexColor: '#e8f4fd' },
  { title: 'Página 2', label: 'Exemplo de Rótulo 2', bgColor: 'bg-violet-warm-10', hexColor: '#f5e8fd' },
  { title: 'Página 3', label: 'Exemplo de Rótulo 3', bgColor: 'bg-yellow-5', hexColor: '#fff3e0' },
  { title: 'Página 4', label: 'Exemplo de Rótulo 4', bgColor: 'bg-green-cool-10', hexColor: '#e6f7f3' },
  { title: 'Página 5', label: 'Exemplo de Rótulo 5', bgColor: 'bg-orange-vivid-10', hexColor: '#ffe6d0' },
]

const currentSlide = ref(0)
const activeSlide = computed(() => slides[currentSlide.value])

const next = () => {
  if (currentSlide.value < slides.length - 1) {
    currentSlide.value++
  }
}

const prev = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}
</script>

<style>
.carousel-wrapper {
  width: 100%;
  padding: 0;
  margin: 0;
}

.br-carousel {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.carousel-stage {
  flex: 1;
  min-height: 400px !important;
  height: auto !important;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible !important;
}

.carousel-page {
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.carousel-content {
  width: 100%;
  min-height: 400px;
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  /* background-color: #e8f4fd;  Opcional: remova ou deixe sem !important */
  color: #000;
}

.carousel-title {
  margin: 0;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
}

.carousel-button {
  flex-shrink: 0;
}

.carousel-btn-prev,
.carousel-btn-next {
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-btn-prev:disabled,
.carousel-btn-next:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.carousel-step {
  width: 100%;
  margin-top: 1.5rem;
}

.step-progress {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.step-progress-btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--gray-40);
  background: var(--white);
  color: var(--text-dark);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
}

.step-progress-btn:hover {
  border-color: var(--blue-warm-vivid-70);
  background: var(--blue-10);
}

.step-progress-btn[aria-pressed="true"] {
  background: var(--blue-warm-vivid-70);
  color: var(--white);
  border-color: var(--blue-warm-vivid-70);
}

/* Transição de slides */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease;
}

.slide-enter-from {
  opacity: 1;
}

.slide-leave-to {
  opacity: 1;
}
</style>
