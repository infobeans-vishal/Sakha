<template>
<v-container>
	<v-layout row wrap>
		<v-flex xs3 class="my-2" v-for="(item, i) in result"  :key="i">
			<v-card
    max-width="250"
    class="mx-auto"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline text-center">{{item.leaveDesc}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-img
      src="https://picsum.photos/500/200"
      height="150"
    ></v-img>

    <v-card-text>
    <v-icon class="mr-2">mdi mdi-calendar-multiple-check</v-icon>  {{item.startdate | formatDate}}
    </v-card-text>

    <v-card-actions>
      <v-btn
        small
        outlined
        color="green accent-4"
      >
        Edit
      </v-btn>
      <v-btn
        small
        outlined
        color="green accent-4"
        class="mr-4"
      >
        Delete
      </v-btn>
       <v-btn
        small
        color="gray accent-4"
        icon
        class="ml-8"
      >
        <v-icon small>mdi mdi-map-marker-radius</v-icon>
        {{item.worklocation}}
      </v-btn>
    </v-card-actions>
  </v-card>
		</v-flex>
	</v-layout>
    </v-container>
</template>


<script>
  export default {
    data: () => ({
      show: false,
      result: [],
      list:[
          {
            title: 'Holi',
            date: Date(),
            location: 'Pune',
            url: 'https://picsum.photos/400/200'
        }, {
            title: 'Rangpanchmi',
            date: Date(),
            location: 'Indore',
            url: 'https://picsum.photos/500/200'
        }, {
            title: 'Diwali',
            date: Date(),
            location: 'Indore',
            url: 'https://picsum.photos/300/200'
        }, {
            title: 'New Year',
            date: Date(),
            location: 'Indore',
            url: 'https://picsum.photos/200/200'
        }
      ]
    }),
    methods: {

      getHolidays() {
         this.$store.dispatch('getHolidays').then((response) => {
                this.result = response.data
                console.log(response.data)
            }).catch((error) => {
                console.warn('Not ola man :(');
                this.error = true;
                this.showResult = true;

            })
      }

    },
    created() {
      this.getHolidays()
    }

}
</script>