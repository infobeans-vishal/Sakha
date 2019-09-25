// Core Components

import Header from '../views/Layout/Header.vue'
import Sidebar from '../views/Layout/Sidebar.vue'
import Footer from '../views/Layout/Footer.vue'
import Breadcrumbs from '../views/Breadcrumbs.vue'

function setupComponents(Vue){

  Vue.component('Header', Header)
  Vue.component('Sidebar', Sidebar)
  Vue.component('Footer', Footer)
  Vue.component('Breadcrumbs', Breadcrumbs)
}


export {
  setupComponents
}
