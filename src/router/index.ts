import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/ViewPaginaInicial.vue'),
    },
    {
      path: '/administracao',
      name: 'administracao',
      component: () => import('@/views/ViewAdministracao.vue'),
    },
  ],
})

export default router
