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
  details?: string
}

const colunas = [
  { label: 'Nome', key: 'nome' },
  { label: 'E-mail', key: 'email' },
  { label: 'Perfil', key: 'perfil' },
  { label: 'Status', key: 'status' },
]

const usuarios: Usuario[] = [
  { id: 1, nome: 'João Silva', email: 'joao@gov.br', perfil: 'Admin', status: 'Ativo', details: 'Último acesso: 05/05/2026 às 14:30. Responsável pela administração do sistema.' },
  { id: 2, nome: 'Maria Souza', email: 'maria@gov.br', perfil: 'Editor', status: 'Inativo', details: 'Último acesso: 03/05/2026 às 10:15. Edita conteúdos do portal.' },
  { id: 3, nome: 'Carlos Pereira', email: 'carlos@gov.br', perfil: 'Usuário', status: 'Ativo', details: 'Último acesso: 06/05/2026 às 09:45. Acesso apenas leitura.' },
  { id: 4, nome: 'Ana Costa', email: 'ana@gov.br', perfil: 'Editor', status: 'Ativo', details: 'Último acesso: 06/05/2026 às 11:20. Gerencia publicações.' },
  { id: 5, nome: 'Pedro Oliveira', email: 'pedro@gov.br', perfil: 'Usuário', status: 'Ativo', details: 'Último acesso: 05/05/2026 às 16:40. Consulta informações.' },
  { id: 6, nome: 'Carla Mendes', email: 'carla@gov.br', perfil: 'Admin', status: 'Ativo', details: 'Último acesso: 06/05/2026 às 08:00. Gerencia permissões.' },
  { id: 7, nome: 'Bruno Ferreira', email: 'bruno@gov.br', perfil: 'Usuário', status: 'Inativo', details: 'Último acesso: 02/05/2026 às 13:50. Conta inativa.' },
  { id: 8, nome: 'Juliana Santos', email: 'juliana@gov.br', perfil: 'Editor', status: 'Ativo', details: 'Último acesso: 06/05/2026 às 15:30. Publica notícias.' },
  { id: 9, nome: 'Rafael Gomes', email: 'rafael@gov.br', perfil: 'Usuário', status: 'Ativo', details: 'Último acesso: 04/05/2026 às 14:00. Acesso regular.' },
  { id: 10, nome: 'Beatriz Lima', email: 'beatriz@gov.br', perfil: 'Editor', status: 'Ativo', details: 'Último acesso: 06/05/2026 às 12:15. Edita documentos.' },
  { id: 11, nome: 'Felipe Rocha', email: 'felipe@gov.br', perfil: 'Usuário', status: 'Inativo', details: 'Último acesso: 01/05/2026 às 10:30. Conta desativa.' },
  { id: 12, nome: 'Gabriela Ribeiro', email: 'gabriela@gov.br', perfil: 'Admin', status: 'Ativo', details: 'Último acesso: 06/05/2026 às 07:45. Administra sistema.' },
  { id: 13, nome: 'Mateus Alves', email: 'mateus@gov.br', perfil: 'Usuário', status: 'Ativo', details: 'Último acesso: 05/05/2026 às 17:20. Consulta regulares.' },
  { id: 14, nome: 'Isabela Martins', email: 'isabela@gov.br', perfil: 'Editor', status: 'Ativo', details: 'Último acesso: 06/05/2026 às 14:45. Gerencia conteúdo.' },
  { id: 15, nome: 'Lucas Barbosa', email: 'lucas@gov.br', perfil: 'Usuário', status: 'Ativo', details: 'Último acesso: 06/05/2026 às 10:00. Acesso frequente.' },
  { id: 16, nome: 'Vanessa Castro', email: 'vanessa@gov.br', perfil: 'Editor', status: 'Inativo', details: 'Último acesso: 30/04/2026 às 16:30. Conta suspensa.' },
  { id: 17, nome: 'Diego Moraes', email: 'diego@gov.br', perfil: 'Usuário', status: 'Ativo', details: 'Último acesso: 06/05/2026 às 13:15. Usuário ativo.' },
  { id: 18, nome: 'Fernanda Dias', email: 'fernanda@gov.br', perfil: 'Admin', status: 'Ativo', details: 'Último acesso: 06/05/2026 às 06:30. Adminstra permissões.' },
  { id: 19, nome: 'Gustavo Silva', email: 'gustavo@gov.br', perfil: 'Usuário', status: 'Ativo', details: 'Último acesso: 05/05/2026 às 18:00. Acesso normal.' },
  { id: 20, nome: 'Patricia Nunes', email: 'patricia@gov.br', perfil: 'Editor', status: 'Ativo', details: 'Último acesso: 06/05/2026 às 11:45. Publica conteúdos.' },
  { id: 21, nome: 'Ricardo Souza', email: 'ricardo@gov.br', perfil: 'Usuário', status: 'Inativo', details: 'Último acesso: 28/04/2026 às 15:20. Conta inativa.' },
  { id: 22, nome: 'Amanda Silva', email: 'amanda@gov.br', perfil: 'Editor', status: 'Ativo', details: 'Último acesso: 06/05/2026 às 09:30. Edita regularmente.' },
  { id: 23, nome: 'Victor Hugo', email: 'victor@gov.br', perfil: 'Usuário', status: 'Ativo', details: 'Último acesso: 06/05/2026 às 12:00. Usuário ativo.' },
  { id: 24, nome: 'Cristina Oliveira', email: 'cristina@gov.br', perfil: 'Admin', status: 'Ativo', details: 'Último acesso: 06/05/2026 às 05:15. Administra sistema.' },
  { id: 25, nome: 'Marcelo Costa', email: 'marcelo@gov.br', perfil: 'Usuário', status: 'Ativo', details: 'Último acesso: 05/05/2026 às 19:00. Acesso ocasional.' },
]

const handleSelectionChange = (selected: Set<string | number>) => {
  console.log('Usuários selecionados:', Array.from(selected))
}

const handleAction = (action: { action: string; items: (string | number)[] }) => {
  console.log(`Ação ${action.action} para os itens:`, action.items)
}
</script>
