<template>
<div>
  <template v-if="!$route.meta.allowAnonymous">
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
  </template>
   <template v-else>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </template>
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
      this.$vuetify.theme.dark = true
    },
};
</script>

