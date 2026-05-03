<template>
  <main>
    <div>
      <h1 class="text-center">Tabelas Simples</h1>
      <AppTabelaSimples :title="'Usuários'" :headers="colunas" :data="usuarios" />
    </div>
  </main>
</template>

<script setup lang="ts">
import AppTabelaSimples from '@/components/AppTabelaSimples.vue'

interface Usuario {
  nome: string
  email: string
  perfil: string
  status: string
}

const colunas = [
  { label: 'Nome', key: 'nome' },
  { label: 'E-mail', key: 'email' },
  { label: 'Perfil', key: 'perfil' },
  { label: 'Status', key: 'status' },
]

const usuarios: Usuario[] = [
  { nome: 'João Silva', email: 'joao@gov.br', perfil: 'Admin', status: 'Ativo' },
  { nome: 'Maria Souza', email: 'maria@gov.br', perfil: 'Editor', status: 'Inativo' },
  { nome: 'Carlos Pereira', email: 'carlos@gov.br', perfil: 'Usuário', status: 'Ativo' },
]
</script>
