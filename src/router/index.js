
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto';
import index from '@/pages/index.vue';
import test from '@/pages/test.vue';
import home from '@/pages/home.vue';
import contato from '@/pages/contato.vue';
import aboutUS from '@/pages/aboutUS.vue';
import allServices from '@/pages/allServices.vue';
import banhoComp from '@/pages/banhoComp.vue';
import crecheDogComp from '@/pages/crecheDogComp.vue';
import festaComp from '@/pages/festaComp.vue'
import hotelCaesComp from '@/pages/hotelCaesComp.vue'
import hotelGatosComp from '@/pages/hotelGatosComp.vue'
import grife from '@/pages/grife.vue'


 const routes = [
  {
    path:'/',
    name:'homepage',
    component: home,
  },
  {
    path:'/home',
    name:'home',
    component: home,
  },
  {
    path:'/test',
    name: 'testComponent',
    component: test,
  },
  {
    path:'/index',
    name: 'index',
    component: index,
  },
  {
    path: '/fale-conosco',
    name : 'aboutUS',
    component: aboutUS,
  },
  {
    path:'/contato',
    name: 'contato',
    component: contato,
  },
 
  {
    path:'/services',
    name: 'serviços',
    component: allServices,
  },

  {
    path:'/grife',
    name: 'grife-marca',
    component: grife,
  },
  
  {
    path:'/services/banho-e-tosa',
    name: 'banho',
    component: banhoComp,
  },

  {
    path:'/services/creche-caes',
    name: 'creche',
    component: crecheDogComp,
  },

  {
    path:'/services/festa-de-aniversario',
    name: 'festa',
    component: festaComp,
  },

  {
    path:'/services/hotelzinho-caes',
    name: 'hotelzinho-caes',
    component: hotelCaesComp,
  },

  {
    path:'/services/hotelzinho-gatos',
    name: 'hotelzinho-gatos',
    component: hotelGatosComp,
  },


  
  


  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 };
  }
})




// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
