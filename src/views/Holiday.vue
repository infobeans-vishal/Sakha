<template>
<v-container>
	<v-layout row wrap>
		<v-flex xs3 class="my-2" v-for="(item, i) in list"  :key="i">
			<v-card
    max-width="250"
    class="mx-auto"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline text-center">{{item.title}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-img
      :src="item.url"
      height="194"
    ></v-img>

    <v-card-text>
    <v-icon class="mr-2">mdi mdi-calendar-multiple-check</v-icon>  {{item.date | formatDate}}
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
        <v-icon small>mdi-city</v-icon>
        {{item.location}}
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
}
</script>