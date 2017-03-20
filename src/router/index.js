import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue'
import Coffee from '../components/coffee.vue'
import About from '../components/about.vue'
import Detail from '../components/detail.vue'
import Contact from '../components/contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path:'/', component:Index},
    { path:'/coffee', component:Coffee},
    { path:'/about', component:About},
    { path:'/detail', component:Detail},
    { path:'/contact', component:Contact},
  ]
})


