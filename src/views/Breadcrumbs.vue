<template>
<div>
    <v-container>
     <v-breadcrumbs :items="items" style="border:1px solid;border-radius:8px;">
      <template v-slot:divider>
        <v-icon>mdi-forward</v-icon>
      </template>
    </v-breadcrumbs>
    </v-container>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },

  watch: {
    '$route' () {
      const vm = this;

      vm.updateBreadcrumbs();
    }
  },

  mounted() {
    const vm = this;

    vm.updateBreadcrumbs();
  },

  methods: {
    updateBreadcrumbs() {
      const vm = this;

      vm.items = vm.$route.meta.breadcrumb;
    }
  }
}
</script>

<style>
  .breadcrumbs .link {
    text-decoration: none;
    color:green;
    font:  14px Sans-Serif;
    letter-spacing: -1px;
    white-space: nowrap;
    display: inline-block;
    position: relative;
  }

  .header-links {
    /* border: 1px solid #333 !important; */
    border-radius: 5px !important;
    background: red;
  }

</style>
