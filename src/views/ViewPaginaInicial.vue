<template>
  <main>
    <div class="logo-wrapper mt-5">
      <img :src="souIfcLogo" alt="SOU IFC" class="logo-principal" />
    </div>

    <div class="texto-principal mt-5 p-5">
      <h3 class="descricao">
        Preparamos um ambiente onde você pode começar sua jornada no IFC de maneira tranquila! Aqui
        você conseguirá criar sua conta de e-mail, office e demais sistemas que você gostaria.
      </h3>

      <h2 class="descricao">Tudo isso, com a sua conta do gov.br!</h2>

      <div class="botoes-section">
        <br-button emphasis="primary" @click="entrarComGovBr"> Entrar com gov.br</br-button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import souIfcLogo from '@/assets/sou-ifc-logo.png'

const entrarComGovBr = (): void => {
  // TODO: Implementar autenticação via gov.br
  // Exemplo: redirecionar para servidor de autenticação ou abrir popup
  console.log('Iniciando autenticação gov.br...')
}
</script>

<style scoped>
.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-principal {
  max-width: 100%;
  height: auto;
  max-height: 300px;
}

.texto-principal {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
}

.botoes-section {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

@media (max-width: 992px) {
  .logo-wrapper {
    order: -1;
  }

  .descricao-main {
    font-size: 1rem;
  }

  .descricao-destaque {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .botoes-section {
    flex-direction: column;
  }

  .botoes-section br-button {
    width: 100%;
    min-width: auto;
  }

  .logo-principal {
    max-height: 200px;
  }
}
</style>
