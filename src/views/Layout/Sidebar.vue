<template>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense shaped>
      <v-list-item-group v-model="item" color="green">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      item: 0,
      items: [
        {
          text: 'Dashboard',
          icon: 'mdi-view-dashboard',
          link: '/',
    }, {
        text: 'Projects',
        icon: 'mdi-library-books',
        link: 'projects'
    }, {
        text: 'Clients',
        icon: 'mdi-account',
        link: 'clients'
    }, {
        text: 'Resources',
        icon: 'mdi-account',
        link: 'resources'
    }, {
        text: 'Invoices',
        icon: 'mdi-flag',
        link: 'invoices'
    }, {
        text: 'Import',
        icon: 'mdi-import',
        link: 'imports'
    }, {
        text: 'Reports',
        icon: 'mdi-chart-line',
        link: 'reports'
    }, {
        text: 'Timesheet',
        icon: 'mdi-timer',
        link: 'timesheet'
    }, {
        text: 'Updates',
        icon: 'mdi-update',
        link: 'updates'
    },
      ],
    }),
  }
</script>