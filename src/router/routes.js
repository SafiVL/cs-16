
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Home.vue') },
      { path: '/mod_builds', name: 'mod-builds', component: () => import('pages/ModBuilds.vue') },
      { path: '/player_models', name: 'player-models', component: () => import('pages/PlayerModels.vue') },
      { path: '/weapon_models', name: 'weapon-models', component: () => import('pages/WeaponModels.vue') },
      { path: '/faq', name: 'faq', component: () => import('pages/AboutTheGame.vue') }
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
