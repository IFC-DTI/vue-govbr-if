<template>
  <div class="carousel-container" role="region" aria-label="Banner rotativo">
    <div class="carousel-stage">
      <div
        v-for="(banner, index) in banners"
        :key="banner.id"
        class="carousel-item"
        :class="{ active: index === currentIndex }"
      >
        <div class="carousel-content">
          <img :src="banner.image" :alt="banner.alt" loading="lazy" />

          <div v-if="banner.description" class="carousel-caption">
            <p class="text-weight-bold text-up-02 mb-1">{{ banner.label }}</p>
            <p class="text-medium">{{ banner.description }}</p>
          </div>
        </div>
      </div>

      <div class="carousel-controls">
        <br-button
          circle
          small
          aria-label="Banner anterior"
          class="carousel-button-prev"
          :disabled="currentIndex === 0 && !circular"
          @click="previousBanner"
        >
          <i class="fas fa-angle-left"></i>
        </br-button>
        <br-button
          circle
          small
          aria-label="Próximo banner"
          class="carousel-button-next"
          :disabled="currentIndex === banners.length - 1 && !circular"
          @click="nextBanner"
        >
          <i class="fas fa-angle-right"></i>
        </br-button>
      </div>
    </div>

    <div class="carousel-indicators">
      <button
        v-for="(banner, index) in banners"
        :key="banner.id"
        class="indicator-dot"
        :class="{ active: index === currentIndex }"
        :aria-label="`Ir para banner ${index + 1} de ${banners.length}`"
        :aria-current="index === currentIndex ? 'step' : 'false'"
        @click="currentIndex = index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'

/**
 * Item de banner para o carousel
 * @interface BannerItem
 * @property {number} id - Identificador único do banner
 * @property {string} label - Título do banner
 * @property {string} image - URL da imagem do banner
 * @property {string} alt - Texto alternativo da imagem
 * @property {string} [description] - Descrição opcional do banner
 */
interface BannerItem {
  readonly id: number
  readonly label: string
  readonly image: string
  readonly alt: string
  readonly description?: string
}

/**
 * Props para o componente AppCarousel
 * @interface Props
 * @property {BannerItem[]} banners - Array de banners a serem exibidos
 * @property {boolean} [circular] - Se o carousel é circular (volta ao início)
 */
interface Props {
  readonly banners: BannerItem[]
  readonly circular?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  circular: false,
})

const currentIndex: Ref<number> = ref(0)

/**
 * Avança para o próximo banner
 */
const nextBanner = (): void => {
  if (currentIndex.value < props.banners.length - 1) {
    currentIndex.value++
  } else if (props.circular) {
    currentIndex.value = 0
  }
}

/**
 * Volta para o banner anterior
 */
const previousBanner = (): void => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else if (props.circular) {
    currentIndex.value = props.banners.length - 1
  }
}
</script>

<style scoped>
.carousel-container {
  width: 100%;
}

.carousel-stage {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: var(--border-radius-medium, 8px);
}

.carousel-item {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  pointer-events: none;
}

.carousel-item.active {
  opacity: 1;
  pointer-events: auto;
  z-index: 1;
}

/* Conteúdo do Item */
.carousel-content {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(0, 0, 0, 0.85) 30%,
    rgba(0, 0, 0, 0.4) 70%,
    rgba(0, 0, 0, 0) 100%
  );
  color: white;
  padding: 3rem 2rem 2rem;
  text-align: center;
}

.carousel-caption p {
  text-shadow:
    2px 2px 4px rgba(0, 0, 0, 0.8),
    1px 1px 2px rgba(0, 0, 0, 0.6);
}

.carousel-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 var(--spacing-scale-default, 1rem);
  transform: translateY(-50%);
  z-index: 2;
  pointer-events: none;
}

.carousel-button-prev,
.carousel-button-next {
  pointer-events: auto;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
  transition: filter 150ms ease-in-out;
}

.carousel-button-prev i,
.carousel-button-next i {
  color: white;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6));
}

.carousel-button-prev:hover:not(:disabled),
.carousel-button-next:hover:not(:disabled) {
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5));
}

.carousel-button-prev:disabled,
.carousel-button-next:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  padding: var(--spacing-scale-2x, 2rem) 0;
  flex-wrap: wrap;
}

.indicator-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--color-interactive-primary, #003366);
  background-color: transparent;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  padding: 0;
  font-size: 0;
}

.indicator-dot:hover {
  transform: scale(1.1);
}

.indicator-dot.active {
  background-color: var(--color-interactive-primary, #003366);
  box-shadow: 0 0 0 3px rgba(0, 51, 102, 0.1);
}

@media (max-width: 768px) {
  .carousel-stage {
    height: 250px;
  }

  .carousel-caption {
    padding: 2rem 1rem 1rem;
    font-size: 0.875rem;
  }

  .carousel-controls {
    padding: 0 0.5rem;
  }

  .carousel-indicators {
    gap: 0.5rem;
    padding: 1rem 0;
  }

  .indicator-dot {
    width: 10px;
    height: 10px;
  }
}

@media (max-width: 480px) {
  .carousel-stage {
    height: 200px;
  }

  .carousel-caption {
    padding: 1.5rem 0.5rem 0.5rem;
    font-size: 0.75rem;
  }

  .carousel-indicators {
    gap: 0.25rem;
    padding: 0.75rem 0;
  }

  .indicator-dot {
    width: 8px;
    height: 8px;
    border-width: 1.5px;
  }
}

.carousel-indicators {
  gap: 0.25rem;
  padding: 0.75rem 0;
}

p {
  color: white;
}
</style>
