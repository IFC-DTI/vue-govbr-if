<template>
  <br-scrim auto-close>
    <br-modal
      id="basic-modal"
      title-text="Modal Básica"
      size="medium"
      show
      auto-close
      initial-focus-selector="#basic-select"
    >
      <p>Modal básica sem fechamento automático. Requer JavaScript para fechar.</p>

      <div class="form-group">
        <br-input
          id="basic-input"
          label="Campo de teste:"
          type="text"
          placeholder="Digite algo para testar"
        ></br-input>
      </div>

      <div class="form-group">
        <br-select
          id="basic-select"
          label="Seleção:"
          placeholder="Escolha uma opção"
          options='[
          { "label": "Opção 1", "value": "opcao1", "selected": false },
          { "label": "Opção 2", "value": "opcao2", "selected": false },
          { "label": "Opção 3", "value": "opcao3", "selected": false }
        ]'
        ></br-select>
      </div>

      <div slot="footer">
        <br-button @click="$emit('fecharModal')" type="button" emphasis="secondary" id="basic-cancel-btn">Cancelar</br-button>
      </div>
    </br-modal>
  </br-scrim>
</template>
