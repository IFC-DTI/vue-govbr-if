<template>
  <main class="pagina-inicial my-5">
    <br-card class="rounded">
      <div class="logo-wrapper">
        <img :src="souIfcLogo" alt="SOU IFC" class="logo-principal" />
      </div>

      <div class="texto-principal mt-5 p-5">
        <p class="descricao">
          Preparamos um ambiente onde você pode começar sua jornada no IFC de maneira tranquila!
          Aqui você conseguirá criar sua conta de e-mail, office e demais sistemas que você
          gostaria.
        </p>

        <p class="descricao">Tudo isso, com a sua conta do gov.br!</p>

        <div class="botoes-section">
          <br-button emphasis="primary" @click="entrarComGovBr"> Entrar com gov.br</br-button>
        </div>
      </div>
    </br-card>
  </main>
</template>

<script setup lang="ts">
import souIfcLogo from '@/assets/sou-ifc-logo.png'

const entrarComGovBr = (): void => {
  // TODO: Implementar redirecionamento para autenticação gov.br
  console.log('Redirecionando para autenticação gov.br')
}
</script>

<style scoped>
.pagina-inicial {
  margin: 0 5em;
  border-radius: 5em;
}

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

.descricao {
  font-size: 1.6em;
  font-weight: 100;
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
