<template>
  <main>
    <div class="d-flex flex-column align-items-center">
      <h1>Cards</h1>
      <div class="row">
        <br-card hover class="col">
          <h5>Card Padrão Hover</h5>
          <p>Este é um exemplo básico do componente br-card com conteúdo simples.</p>
        </br-card>
        <br-card disabled class="col">
          <h5>Card Padrão Disabled</h5>
          <p>Este é um exemplo básico do componente br-card com conteúdo simples.</p>
        </br-card>
        <br-card class="col">
          <h5>Card Padrão com Botão</h5>
          <p>Este é um exemplo básico do componente br-card com conteúdo simples.</p>
          <br-button emphasis="secondary">Teste</br-button>
        </br-card>
      </div>
      <div class="row">
        <br-card class="col">
          <h5>Card Padrão com imagem</h5>
          <p>Este é um exemplo básico do componente br-card com conteúdo simples.</p>
          <img src="@/assets/sou-ifc-logo.png" alt="Imagem do Card" />
        </br-card>
        <br-card class="col">
          <h5>Card Padrão com data</h5>
          <p>Este é um exemplo básico do componente br-card com conteúdo simples.</p>
          <br-datetime-picker mode="date"></br-datetime-picker>
        </br-card>
      </div>
    </div>
  </main>
</template>
