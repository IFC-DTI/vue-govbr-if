import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/ViewPaginaInicial.vue'),
      meta: {
        breadcrumb: 'Página Inicial',
      },
    },
    {
      path: '/administracao',
      name: 'administracao',
      component: () => import('@/views/ViewAdministracao.vue'),
      meta: {
        breadcrumb: 'Dashboard administrativo',
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import('@/views/ViewNotFound.vue'),
      meta: {
        breadcrumb: 'Página Não Encontrada',
      },
    }
  ],
})

export default router
