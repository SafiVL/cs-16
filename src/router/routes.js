
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Home.vue') },
      { path: '/mod_builds', name: 'mod-builds', component: () => import('pages/ModBuilds.vue') },
      { path: '', component: () => import('pages/Home.vue') },
      { path: '', component: () => import('pages/Home.vue') },
      { path: '', component: () => import('pages/Home.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
