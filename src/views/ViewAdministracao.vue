<template>
  <main>
    <section>
      <br-message state="warning" show-icon>
        Painel administrativo em modo de demonstracao.
      </br-message>
    </section>

<h1 class="mb-4">Visão Geral</h1>

    <div class="row mb-4">
      <div class="col-sm-6 col-md-3" v-for="card in stats" :key="card.title">
        <div class="br-card p-3 shadow-sm border-0 text-center">
          <p class="text-up-02 mb-1">{{ card.title }}</p>
          <h2 class="text-weight-bold">{{ card.value }}</h2>
        </div>
      </div>
    </div>

    <div class="br-card">
      <div class="p-3 border-bottom d-flex justify-content-between align-items-center">
        <span class="text-weight-bold">Últimas Atividades</span>
        <br-button label="Exportar" type="secondary" density="small">Exportar</br-button>
      </div>
      <div class="table-responsive">
        <table class="br-table">
          <thead>
            <tr>
              <th>Usuário</th>
              <th>Ação</th>
              <th>Data</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in logs" :key="item.id">
              <td>{{ item.user }}</td>
              <td>{{ item.action }}</td>
              <td>{{ item.date }}</td>
              <td>
                <span :class="['br-tag', item.statusClass]">{{ item.status }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>



    <section>
      <br-card>
        <h2>Ações rápidas</h2>
        <ContainerBotoes>
          <br-button emphasis="secondary">Gerenciar usuarios</br-button>
          <br-button emphasis="secondary">Aprovar solicitacoes</br-button>
          <br-button emphasis="secondary">Ver auditoria</br-button>
        </ContainerBotoes>
      </br-card>
    </section>
  </main>
</template>

<script setup lang="ts">
import ContainerBotoes from '@/components/ContainerBotoes.vue'

const stats = [
  { title: 'Usuários Ativos', value: '1,240' },
  { title: 'Projetos', value: '42' },
  { title: 'Chamados', value: '12' },
  { title: 'Uptime', value: '99.9%' }
];

const logs = [
  { id: 1, user: 'Arthur M.', action: 'Deploy API', date: '22/04/2026', status: 'Sucesso', statusClass: 'success' },
  { id: 2, user: 'Maria S.', action: 'Update Docs', date: '21/04/2026', status: 'Pendente', statusClass: 'warning' },
];
</script>

<style scoped>
  main{
    max-width: 90vw;
    margin: 0 auto;
  }
</style>
