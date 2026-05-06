import { createRouter, createWebHistory } from 'vue-router'
import { startLoading, stopLoading } from '@/stores/appLoading'

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
      path: '/cards',
      name: 'cards',
      component: () => import('@/views/ViewCards.vue'),
      meta: {
        breadcrumb: 'Cards',
      },
    },
    {
      path: '/banner',
      name: 'banner',
      component: () => import('@/views/ViewBanner.vue'),
      meta: {
        breadcrumb: 'Banner',
      },
    },
    {
      path: '/tabela-simples',
      name: 'tabela-simples',
      component: () => import('@/views/ViewTabelaSimples.vue'),
      meta: {
        breadcrumb: 'Tabela Simples',
      },
    },
    {
      path: '/tabela-complexa',
      name: 'tabela-complexa',
      component: () => import('@/views/ViewTabelaComplexa.vue'),
      meta: {
        breadcrumb: 'Tabela Complexa',
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
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/ViewNotFound.vue'),
      meta: {
        breadcrumb: 'Página Não Encontrada',
      },
    },
  ],
})

router.beforeEach(() => {
  startLoading()
})

router.afterEach(() => {
  stopLoading()
})

router.onError(() => {
  stopLoading()
})

export default router
