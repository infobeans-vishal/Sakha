<template>
      <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Sakha</v-toolbar-title>
      <v-spacer>
      </v-spacer>
    <v-btn fab text small>
      <v-icon>mdi-bell-outline</v-icon>
    </v-btn>

      <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
          icon
          class="ma-2"
          outlined

        >
          <v-icon medium >mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click=""
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        { title: 'Profile' },
        { title: 'Logout' },
      ],
    }),

  }
</script>