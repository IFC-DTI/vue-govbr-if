<template>
  <main class="admin-container">
    <section class="header-section">
      <h1>Administração do Sistema</h1>
      <p class="subtitle">Gerencie usuários, permissões e funcionalidades do portal IFC</p>
    </section>

    <!-- RESUMO COM CARDS -->
    <section class="stats-section">
      <div class="stats-grid">
        <br-card class="stat-card">
          <div class="stat-content">
            <div class="stat-number">{{ totalUsuarios }}</div>
            <div class="stat-label">Usuários Ativos</div>
          </div>
        </br-card>

        <br-card class="stat-card">
          <div class="stat-content">
            <div class="stat-number">{{ usuariosInativos }}</div>
            <div class="stat-label">Usuários Inativos</div>
          </div>
        </br-card>

        <br-card class="stat-card">
          <div class="stat-content">
            <div class="stat-number">{{ solicitacoesPendentes }}</div>
            <div class="stat-label">Solicitações Pendentes</div>
          </div>
        </br-card>

        <br-card class="stat-card">
          <div class="stat-content">
            <div class="stat-number">{{ ultimoAcesso }}</div>
            <div class="stat-label">Último Acesso</div>
          </div>
        </br-card>
      </div>
    </section>

    <!-- TABELA DE USUÁRIOS -->
    <section class="users-section">
      <h2>Usuários Recentes</h2>
      <br-card>
        <div class="table-wrapper">
          <table class="br-table">
            <caption>
              Lista de usuários cadastrados no sistema
            </caption>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Perfil</th>
                <th>Status</th>
                <th>Último Acesso</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in usuarios" :key="usuario.id">
                <td>{{ usuario.nome }}</td>
                <td>{{ usuario.email }}</td>
                <td>
                  <span :class="['user-badge', usuario.perfilClass]">{{ usuario.perfil }}</span>
                </td>
                <td>
                  <span :class="['status-badge', usuario.statusClass]">{{ usuario.status }}</span>
                </td>
                <td>{{ usuario.ultimoAcesso }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </br-card>
    </section>

    <!-- AÇÕES RÁPIDAS -->
    <section class="actions-section">
      <h2>Ações Rápidas</h2>
      <br-card>
        <div class="actions-grid">
          <div class="action-item">
            <br-button emphasis="primary" @click="handleAddUser">
              <br-icon slot="icon" icon-name="fa-solid:user-plus"></br-icon>
              Adicionar Usuário
            </br-button>
            <span class="action-description">Criar nova conta de usuário</span>
          </div>

          <div class="action-item">
            <br-button emphasis="secondary" @click="handleApproveRequests">
              <br-icon slot="icon" icon-name="fa-solid:check-circle"></br-icon>
              Aprovar Solicitações
            </br-button>
            <span class="action-description">Revisar solicitações pendentes</span>
          </div>

          <div class="action-item">
            <br-button emphasis="tertiary" @click="handleViewAudit">
              <br-icon slot="icon" icon-name="fa-solid:history"></br-icon>
              Ver Auditoria
            </br-button>
            <span class="action-description">Histórico de atividades do sistema</span>
          </div>

          <div class="action-item">
            <br-button emphasis="tertiary" @click="handleSystemSettings">
              <br-icon slot="icon" icon-name="fa-solid:sliders"></br-icon>
              Configurações
            </br-button>
            <span class="action-description">Gerenciar configurações do sistema</span>
          </div>
        </div>
      </br-card>
    </section>

    <!-- FEEDBACK MODAL -->
    <br-modal v-if="showFeedback" @close="showFeedback = false">
      <br-notification class="notification">
        <span>{{ feedbackMessage }}</span>
      </br-notification>
    </br-modal>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// State
const showFeedback = ref(false)
const feedbackMessage = ref('')

// Dados
const totalUsuarios = ref(45)
const usuariosInativos = ref(8)
const solicitacoesPendentes = ref(3)
const ultimoAcesso = ref('Hoje')

const usuarios = ref([
  {
    id: 1,
    nome: 'João Silva',
    email: 'joao.silva@gov.br',
    perfil: 'Admin',
    perfilClass: 'admin',
    status: 'Ativo',
    statusClass: 'active',
    ultimoAcesso: '13/05/2026 - 14:30',
  },
  {
    id: 2,
    nome: 'Maria Souza',
    email: 'maria.souza@gov.br',
    perfil: 'Editor',
    perfilClass: 'editor',
    status: 'Ativo',
    statusClass: 'active',
    ultimoAcesso: '13/05/2026 - 10:15',
  },
  {
    id: 3,
    nome: 'Carlos Santos',
    email: 'carlos.santos@gov.br',
    perfil: 'Visualizador',
    perfilClass: 'viewer',
    status: 'Inativo',
    statusClass: 'inactive',
    ultimoAcesso: '10/05/2026 - 09:45',
  },
  {
    id: 4,
    nome: 'Ana Costa',
    email: 'ana.costa@gov.br',
    perfil: 'Editor',
    perfilClass: 'editor',
    status: 'Ativo',
    statusClass: 'active',
    ultimoAcesso: '12/05/2026 - 16:20',
  },
])

// Métodos
const handleAddUser = () => {
  feedbackMessage.value = '✅ Redirecionando para formulário de novo usuário...'
  showFeedback.value = true
  setTimeout(() => {
    showFeedback.value = false
    // TODO: Implementar navegação para formulário de novo usuário
  }, 2000)
}

const handleApproveRequests = () => {
  feedbackMessage.value = '✅ Abrindo painel de aprovação de solicitações...'
  showFeedback.value = true
  setTimeout(() => {
    showFeedback.value = false
    // TODO: Implementar painel de aprovação
  }, 2000)
}

const handleViewAudit = () => {
  feedbackMessage.value = '✅ Carregando histórico de auditoria...'
  showFeedback.value = true
  setTimeout(() => {
    showFeedback.value = false
    // TODO: Implementar visualização de auditoria
  }, 2000)
}

const handleSystemSettings = () => {
  feedbackMessage.value = '✅ Abrindo configurações do sistema...'
  showFeedback.value = true
  setTimeout(() => {
    showFeedback.value = false
    // TODO: Implementar página de configurações
  }, 2000)
}
</script>

<style scoped>
.admin-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.header-section {
  text-align: center;
  margin-bottom: 3rem;
}

.header-section h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #1f1f1f;
}

.subtitle {
  font-size: 1.1rem;
  color: #666;
  margin: 0;
}

/* STATS SECTION */
.stats-section {
  margin-bottom: 3rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  padding: 2rem !important;
  text-align: center;
  background: linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%);
  border: 1px solid #e0e0e0;
}

.stat-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #0050a4;
}

.stat-label {
  font-size: 0.95rem;
  color: #666;
  font-weight: 500;
}

/* USERS SECTION */
.users-section {
  margin-bottom: 3rem;
}

.users-section h2 {
  margin-bottom: 1.5rem;
  color: #1f1f1f;
  font-size: 1.5rem;
}

.table-wrapper {
  overflow-x: auto;
}

.br-table {
  width: 100%;
  border-collapse: collapse;
}

.br-table caption {
  text-align: left;
  padding: 1rem;
  background-color: #f5f5f5;
  font-weight: 500;
  font-size: 0.9rem;
}

.br-table thead {
  background-color: #f0f0f0;
}

.br-table th,
.br-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

.br-table th {
  font-weight: 600;
  color: #1f1f1f;
}

.br-table tbody tr:hover {
  background-color: #fafafa;
}

.user-badge,
.status-badge {
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
}

.user-badge.admin {
  background-color: #e3f2fd;
  color: #0050a4;
}

.user-badge.editor {
  background-color: #f3e5f5;
  color: #6a1b9a;
}

.user-badge.viewer {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.status-badge.active {
  background-color: #c8e6c9;
  color: #1b5e20;
}

.status-badge.inactive {
  background-color: #ffccbc;
  color: #bf360c;
}

/* ACTIONS SECTION */
.actions-section {
  margin-bottom: 2rem;
}

.actions-section h2 {
  margin-bottom: 1.5rem;
  color: #1f1f1f;
  font-size: 1.5rem;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  padding: 1.5rem;
}

.action-item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  align-items: center;
}

.action-item br-button {
  width: 100%;
}

.action-description {
  font-size: 0.85rem;
  color: #666;
  line-height: 1.4;
}

/* NOTIFICATION */
.notification {
  padding: 1rem;
  border-radius: 4px;
  background-color: #e8f5e9;
  color: #1b5e20;
  font-weight: 500;
}

@media (max-width: 768px) {
  .admin-container {
    padding: 1rem;
  }

  .header-section h1 {
    font-size: 1.8rem;
  }

  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }

  .stat-card {
    padding: 1.5rem !important;
  }

  .stat-number {
    font-size: 2rem;
  }

  .actions-grid {
    grid-template-columns: 1fr;
  }
}
</style>
