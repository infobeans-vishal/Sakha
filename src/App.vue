<template>
<div>
  <v-app>
    <Header></Header>
    <Sidebar></Sidebar>
    <v-content>
      <v-container
      >
      <Breadcrumbs></Breadcrumbs>
      <router-view/>
      </v-container>
    </v-content>
  </v-app>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
  },
  props: {
      source: String,
    },
  data: () => ({
    drawer: null,
    //
  }),
  created () {
      // this.$vuetify.theme.dark = true
    },
};
</script>

