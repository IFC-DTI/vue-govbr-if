<template>
  <main>
    <div>
      <h1 class="text-center">Tabelas Complexas</h1>
      <AppTabelaComplexa
        title="Gerenciamento de Usuários"
        :headers="colunas"
        :data="usuarios"
        @selectionChange="handleSelectionChange"
        @action="handleAction"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import AppTabelaComplexa from '@/components/AppTabelaComplexa.vue'

interface Usuario {
  id: string | number
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
  { id: 1, nome: 'João Silva', email: 'joao@gov.br', perfil: 'Admin', status: 'Ativo' },
  { id: 2, nome: 'Maria Souza', email: 'maria@gov.br', perfil: 'Editor', status: 'Inativo' },
  { id: 3, nome: 'Carlos Pereira', email: 'carlos@gov.br', perfil: 'Usuário', status: 'Ativo' },
  { id: 4, nome: 'Ana Costa', email: 'ana@gov.br', perfil: 'Editor', status: 'Ativo' },
  { id: 5, nome: 'Pedro Oliveira', email: 'pedro@gov.br', perfil: 'Usuário', status: 'Ativo' },
  { id: 6, nome: 'Carla Mendes', email: 'carla@gov.br', perfil: 'Admin', status: 'Ativo' },
  { id: 7, nome: 'Bruno Ferreira', email: 'bruno@gov.br', perfil: 'Usuário', status: 'Inativo' },
  { id: 8, nome: 'Juliana Santos', email: 'juliana@gov.br', perfil: 'Editor', status: 'Ativo' },
  { id: 9, nome: 'Rafael Gomes', email: 'rafael@gov.br', perfil: 'Usuário', status: 'Ativo' },
  { id: 10, nome: 'Beatriz Lima', email: 'beatriz@gov.br', perfil: 'Editor', status: 'Ativo' },
  { id: 11, nome: 'Felipe Rocha', email: 'felipe@gov.br', perfil: 'Usuário', status: 'Inativo' },
  { id: 12, nome: 'Gabriela Ribeiro', email: 'gabriela@gov.br', perfil: 'Admin', status: 'Ativo' },
  { id: 13, nome: 'Mateus Alves', email: 'mateus@gov.br', perfil: 'Usuário', status: 'Ativo' },
  { id: 14, nome: 'Isabela Martins', email: 'isabela@gov.br', perfil: 'Editor', status: 'Ativo' },
  { id: 15, nome: 'Lucas Barbosa', email: 'lucas@gov.br', perfil: 'Usuário', status: 'Ativo' },
  { id: 16, nome: 'Vanessa Castro', email: 'vanessa@gov.br', perfil: 'Editor', status: 'Inativo' },
  { id: 17, nome: 'Diego Moraes', email: 'diego@gov.br', perfil: 'Usuário', status: 'Ativo' },
  { id: 18, nome: 'Fernanda Dias', email: 'fernanda@gov.br', perfil: 'Admin', status: 'Ativo' },
  { id: 19, nome: 'Gustavo Silva', email: 'gustavo@gov.br', perfil: 'Usuário', status: 'Ativo' },
  { id: 20, nome: 'Patricia Nunes', email: 'patricia@gov.br', perfil: 'Editor', status: 'Ativo' },
  { id: 21, nome: 'Ricardo Souza', email: 'ricardo@gov.br', perfil: 'Usuário', status: 'Inativo' },
  { id: 22, nome: 'Amanda Silva', email: 'amanda@gov.br', perfil: 'Editor', status: 'Ativo' },
  { id: 23, nome: 'Victor Hugo', email: 'victor@gov.br', perfil: 'Usuário', status: 'Ativo' },
  { id: 24, nome: 'Cristina Oliveira', email: 'cristina@gov.br', perfil: 'Admin', status: 'Ativo' },
  { id: 25, nome: 'Marcelo Costa', email: 'marcelo@gov.br', perfil: 'Usuário', status: 'Ativo' },
]

const handleSelectionChange = (selected: Set<string | number>) => {
  console.log('Usuários selecionados:', Array.from(selected))
}

const handleAction = (action: { action: string; items: (string | number)[] }) => {
  console.log(`Ação ${action.action} para os itens:`, action.items)
}
</script>
