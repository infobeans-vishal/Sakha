import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Projects from './views/Project/Projects.vue'
import AddProject from './views/Project/AddProject.vue'
import Clients from './views/Client/Clients.vue'
import Imports from './views/ImportCSV.vue'
import Milestone from './views/Milestones.vue'
import AddClient from './views/Client/AddClient.vue'
import Timesheet from './views/Timesheet.vue'
import Updates from './views/Updates.vue'
import Resources from './views/Resources.vue'
import Holiday from './views/Holiday.vue'
import Login from './views/Login.vue'
import Employee from './views/Employee.vue'
import AddEmployee from './views/AddEmployee.vue'
import EditEmployee from './views/EditEmployee.vue'
import ViewEmployee from './views/ViewEmployee.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        breadcrumb: [
          { text: 'Home', href: '/', disabled: false },
          { text: 'Dashboard', disabled: true, href: 'breadcrumbs_link_1', }
        ]
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      meta: {
        breadcrumb: [
          { text: 'Home', href: '/', disabled: false },
          { text: 'Projects', disabled: true, href: 'breadcrumbs_link_1', }
        ]
      }
    },
    {
      path: '/clients',
      name: 'clients',
      component: Clients,
      meta: {
        breadcrumb: [
          { text: 'Home', href: '/', disabled: false },
          { text: 'Clients', disabled: true, href: 'breadcrumbs_link_1', }
        ]
      }
    },
    {
      path: '/resources',
      name: 'resources',
      component: Resources,
      meta: {
        breadcrumb: [
          { text: 'Home', href: '/', disabled: false },
          { text: 'Resources', disabled: true, href: 'breadcrumbs_link_1', }
        ]
      }
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: Projects,
      meta: {
        breadcrumb: [
          { text: 'Home', href: '/', disabled: false },
          { text: 'Invoices', disabled: true, href: 'breadcrumbs_link_1', }
        ]
      }
    },
    {
      path: '/imports',
      name: 'imports',
      component: Imports,
      meta: {
        breadcrumb: [
          { text: 'Home', href: '/', disabled: false },
          { text: 'Import CSV', disabled: true, href: 'breadcrumbs_link_1', }
        ]
      }
    },
    {
      path: '/reports',
      name: 'reports',
      component: Projects,
      meta: {
        breadcrumb: [
          { text: 'Home', href: '/', disabled: false },
          { text: 'Reports', disabled: true, href: 'breadcrumbs_link_1', }
        ]
      }
    },
    {
      path: '/timesheet',
      name: 'timesheet',
      component: Timesheet,
      meta: {
        breadcrumb: [
          { text: 'Home', href: '/', disabled: false },
          { text: 'Timesheet', disabled: true, href: 'breadcrumbs_link_1', }
        ]
      }
    },
    {
      path: '/updates',
      name: 'updates',
      component: Updates,
      meta: {
        breadcrumb: [
          { text: 'Home', href: '/', disabled: false },
          { text: 'Updates', disabled: true, href: 'breadcrumbs_link_1', }
        ]
      }
    },
    {
      path: '/add-project',
      name: 'add-projects',
      component: AddProject,
      meta: {
        breadcrumb: [
          { text: 'Home', href: '/', disabled: false },
          { text: 'Projects', disabled: false, href: 'projects', },
          { text: 'Add Project', disabled: true, href: 'breadcrumbs_link_1', }
        ]
      }
    },
    {
      path: '/milestone',
      name: 'milestone',
      component: Milestone,
      meta: {
        breadcrumb: [
          { text: 'Home', href: '/', disabled: false },
          { text: 'Projects', disabled: false, href: 'projects', },
          { text: 'Premium Access', disabled: false, href: 'breadcrumbs_link_1', },
          { text: 'Milestones', disabled: true, href: 'breadcrumbs_link_1', }
        ]
      }
    },
    {
      path: '/add-client',
      name: 'add',
      component: AddClient,
      meta: {
        breadcrumb: [
          { text: 'Home', href: '/', disabled: false },
          { text: 'Clients', disabled: false, href: 'clients', },
          { text: 'Add Client', disabled: true, href: 'breadcrumbs_link_1', },
        ]
      }
    },
    {
      path: '/holiday',
      name: 'holiday',
      component: Holiday,
      meta: {
        breadcrumb: [
          { text: 'Home', href: '/', disabled: false },
          { text: 'Holiday', disabled: true, href: 'breadcrumbs_link_1', },
        ]
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        breadcrumb: [
        ],
        allowAnonymous : true
      }
    },
    {
      path: '/employee',
      name: 'employee',
      component: Employee,
      meta: {
        breadcrumb: [
          { text: 'Home', href: '/', disabled: false },
          { text: 'Resources', disabled: true, href: 'breadcrumbs_link_1', }
        ]
      }
    },
    {
      path: '/add-employee',
      name: 'add-employee',
      component: AddEmployee,
      meta: {
        breadcrumb: [
          { text: 'Home', href: '/', disabled: false },
          { text: 'Resources', disabled: true, href: 'breadcrumbs_link_1', }
        ]
      }
    },
    {
      path: '/edit-employee',
      name: 'edit-employee',
      component: EditEmployee,
      meta: {
        breadcrumb: [
          { text: 'Home', href: '/', disabled: false },
          { text: 'Resources', disabled: true, href: 'breadcrumbs_link_1', }
        ]
      }
    },
    {
      path: '/view-employee',
      name: 'view-employee',
      component: ViewEmployee,
      meta: {
        breadcrumb: [
          { text: 'Home', href: '/', disabled: false },
          { text: 'Resources', disabled: true, href: 'breadcrumbs_link_1', }
        ]
      }
    }
  ]
})
