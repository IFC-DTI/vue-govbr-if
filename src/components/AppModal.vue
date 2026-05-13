<template>
  <br-scrim @click.self="$emit('fecharModal')">
    <br-modal
      id="feedback-modal"
      title-text="Enviar Feedback"
      size="medium"
      :show="isShowingModal"
      :auto-close="false"
      initial-focus-selector="#feedback-textarea"
      scrollable
      @brModalBeforeClose="handleModalClose"
    >
      <p>Sua opinião é importante para nós! Por favor, descreva o problema ou sugestão:</p>

      <div class="form-group">
        <br-textarea
          id="feedback-textarea"
          label="Mensagem:"
          placeholder="Descreva o problema ou envie uma sugestão..."
          rows="5"
        ></br-textarea>
      </div>

      <div class="form-group">
        <br-input
          id="email-input"
          label="Email (opcional):"
          type="email"
          placeholder="seu.email@example.com"
        ></br-input>
      </div>

      <div slot="footer">
        <ContainerBotoes>
          <br-button
            @click="enviarFeedback"
            type="button"
            emphasis="primary"
            id="feedback-submit-btn"
            >Enviar</br-button
          >
          <br-button
            @click="$emit('fecharModal')"
            type="button"
            emphasis="secondary"
            id="feedback-cancel-btn"
            >Cancelar</br-button
          >
        </ContainerBotoes>
      </div>
    </br-modal>
  </br-scrim>
</template>

<script setup lang="ts">
import ContainerBotoes from './AppContainerBotoes.vue'

interface Props {
  isShowingModal: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  fecharModal: []
}>()

const handleModalClose = (event: CustomEvent<{ close: () => void }> | Event) => {
  // Sempre permitir que o modal feche quando solicitado (X, scrim ou botão)
  if (event instanceof CustomEvent && event.detail?.close) {
    event.detail.close()
  }
  // Emitir evento para o pai fechar
  emit('fecharModal')
}

const enviarFeedback = (): void => {
  // TODO: Implementar envio real de feedback (API/backend)
  // Atualmente apenas placeholder
  console.log('Feedback enviado')
  emit('fecharModal')
}
</script>
