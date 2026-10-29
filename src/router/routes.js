// import { useAuthStore } from '@/stores/authStore.js'
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/ch8/SubjectPage.vue') },
      { path: 'second', component: () => import('@/pages/SecondPage.vue') },
      { path: '/lab1', component: () => import('@/pages/ch1/Lab1Page.vue') },
      { path: '/ch2/grid', component: () => import('@/pages/ch2/Ex_Grid.vue') },
      { path: '/ch2/space', component: () => import('@/pages/ch2/SpaceTypo.vue') },
      { path: '/ch3/com', component: () => import('@/pages/ch3/ExCompositionAPI.vue') },
      { path: '/ch3/text', component: () => import('@/pages/ch3/TextInterpolation.vue') },
      { path: '/ch3/att', component: () => import('@/pages/ch3/AttributeBinding.vue') },
      { path: '/ch3/vif', component: () => import('@/pages/ch3/vIf_else.vue') },
      { path: '/ch3/vshow', component: () => import('@/pages/ch3/vShow.vue') },
      { path: '/ch3/vfor', component: () => import('@/pages/ch3/vFor.vue') },
      { path: '/ch3/vmodel', component: () => import('@/pages/ch3/vModel.vue') },
      { path: '/ch3/maincom', component: () => import('@/pages/ch3/MainComponent.vue') },
      { path: '/ch3/props_emit', component: () => import('@/pages/ch3/PropsEmit.vue') },
      { path: '/ch3/vslot', component: () => import('@/pages/ch3/vSlot.vue') },
      { path: '/ch3/comp', component: () => import('@/pages/ch3/ExComputed.vue') },
      { path: '/ch3/watch', component: () => import('@/pages/ch3/ExWatcher.vue') },
      { path: '/ch3/hook', component: () => import('@/pages/ch3/ExHook.vue') },
      { path: '/ch4/table', component: () => import('@/pages/ch4/Ex_table.vue') },
      { path: '/ch4/loading', component: () => import('@/pages/ch4/Ex_loading.vue') },
      {
        path: '/ch5/pinia',
        component: () => import('@/pages/ch5/Ex_pinia.vue'),
        // meta: { requireAuth: true }
        // beforeEnter: (to, from, next) => {
        //   const authStore = useAuthStore()
        //   if (!authStore.isLoggedIn && to.path !== '/login') {
        //     next('/login')
        //   } else {
        //     next()
        //   }

        // }
      },
      { path: '/ch6/json', component: () => import('@/pages/ch6/Ex_jsonplaceholder.vue') },
      { path: '/ch6/jsonStore', component: () => import('@/pages/ch6/Ex_jsonplaceholder_Store.vue') },
      { path: '/ch6/post', component: () => import('@/pages/ch6/PostPage.vue') },
      {
        path: '/subject',
        component: () => import('@/pages/ch6/SubjectPage.vue'),
      },
      { path: '/ch7/login', 
        name: 'login', 
        component: () => import('@/pages/ch7/LoginPage.vue') 
      },
      { path: '/ch7/profile', 
        name: 'profile', 
        component: () => import('@/pages/ch7/ProfilePage.vue'), 
        meta: { requiresAuth: true }, 
      },
      {
        path: '/ch7/teacher',
        name: 'teacher',
        component: () => import('@/pages/ch7/TeacherPage.vue'),
        meta: { 
          requiresAuth: true,
          roles: ['teacher', 'admin']
         },
      },
      {
        path: '/ch7/admin',
        name: 'admin',
        component: () => import('@/pages/ch7/AdminPage.vue'),
        meta: { 
          requiresAuth: true,
          roles: ['admin']
         },
      },
            {
        path: '/ch8/env',
        component: () => import('@/pages/ch8/Ex_env.vue'),
      },
                  {
        path: '/ch8/subject',
        component: () => import('@/pages/ch8/SubjectPage.vue'),
      },

      // Add child component under MainLayout 
      {
        path: 'note',
        component: () => import('@/pages/ch3/ExRouter/NotesPage.vue'),
        meta: { title: 'My Notes Application' }
      },
      {
        path: 'note/:id',     // :id is parameter 
        name: 'NoteDetail',
        component: () => import('@/pages/ch3/ExRouter/NotesDetailPage.vue'),
        meta: { title: 'Note Detail' }
      },

    ],
  },
  // child component NOT under MainLayout 
  {
    path: '/newNoteApp/notes/all',
    name: 'newNoteApp',
    component: () => import('@/pages/ch3/ExRouter/NewNotesPage.vue')
  },

  {
    path: '/gen',
    component: () => import('@/pages/ch2/genLayout.vue'),
  },
  {
    path: '/lab2',
    component: () => import('@/pages/ch2/Lab2Page.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  },
]

export default routes
