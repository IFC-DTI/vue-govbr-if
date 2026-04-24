<template>
  <div class="container-lg my-5">
    <div class="row align-items-center">
      <div class="col-sm-12 col-lg-4 text-center mb-4 mb-lg-0">
        <img src="@/assets/404.png" alt="Logomarca gov.br" class="img-fluid" />
      </div>

      <div class="col-sm-12 col-lg-8">
        <div class="info mb-3">
          <div class="content">
            <span class="text-up-06 text-semi-bold" style="color: #0c326f">
              Procuramos esta página em todos os lugares!
            </span>
          </div>
        </div>

        <p class="text-up-03 text-medium my-3">
          Mas podemos ajudá-lo a encontrar o que está procurando de outra forma.
        </p>

        <p>
          Talvez você tenha se equivocado ao digitar o endereço URL ou quem sabe nós tenhamos
          cometido uma falha por aqui. Se possível, relate o erro para que possamos sempre estar
          melhorando.
        </p>
      </div>
    </div>

    <div class="row my-5">
      <div class="col">
        <p class="h5 text-semi-bold">Aproveite para fazer uma nova busca</p>
        <InputWithIcon
          placeholder="O que você procura?"
          action-label="Buscar"
          density="large"
          icon="fa-solid:search"
          :highlight="true"
        />
      </div>
    </div>

    <div class="row mt-5">
      <div class="col d-flex flex-wrap gap-3 justify-content-center">
        <br-button type="secondary" aria-label="Voltar" class="mr-3" @click="voltar">
          <i class="fas fa-chevron-left mr-1" aria-hidden="true"></i>
          Ir para Página Anterior
        </br-button>

        <br-button
          type="secondary"
          aria-label="Ir para Página Principal"
          class="mr-3"
          @click="irParaHome"
        >
          <i class="fas fa-home mr-1" aria-hidden="true"></i>
          Ir para Página Principal
        </br-button>

        <br-button type="secondary" aria-label="Enviar Feedback" @click="enviarFeedback">
          <i class="fas fa-comment-dots mr-1" aria-hidden="true"></i>
          Envie um Feedback
        </br-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputWithIcon from '@/components/InputWithIcon.vue'
import { useRouter, type Router } from 'vue-router'

const router: Router = useRouter()

const voltar = (): void => {
  router.back()
}

const irParaHome = (): void => {
  router.push('/')
}

const enviarFeedback = (): void => {
  // Implementar lógica de modal de feedback
  console.log('Abrir modal de feedback')
}
</script>

<style scoped>
.gap-3 {
  gap: 3em;
}
</style>
