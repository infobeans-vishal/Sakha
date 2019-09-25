<template>
	<v-container>
		<v-card-title>
      Clients

			<div class="flex-grow-1"></div>
			<v-text-field
                    v-model="search"
                    label="Search Client"
                    hide-details
                    outlined
                ></v-text-field>
            <v-btn class="ml-5" outlined small @click="addClient" color="green">Add New Client</v-btn>
		</v-card-title>
		<v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-1"
            :search="search"
        >
            <template v-slot:item.actions="{ item }">

                <v-tooltip v-model="show" bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                    <v-icon color="green lighten-1"> mdi-office</v-icon>
                    </v-btn>
                </template>
                <span>Manage Department</span>
                </v-tooltip>

                <v-tooltip v-model="show" bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                    <v-icon color="green lighten-1"> mdi-truck-delivery</v-icon>
                    </v-btn>
                </template>
                <span>Purchase Order</span>
                </v-tooltip>

                <v-tooltip v-model="show" bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                    <v-icon color="green lighten-1"> mdi-pencil</v-icon>
                    </v-btn>
                </template>
                <span>Edit Client</span>
                </v-tooltip>

                <v-tooltip v-model="show" bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                    <v-icon color="green lighten-1">mdi-delete-outline</v-icon>
                    </v-btn>
                </template>
                <span>Delete Client</span>
                </v-tooltip>
            </template>

			<template v-slot:item.calories="{ item }">
				<v-chip :color="getColor(item.calories)" dark>{{ item.calories }}</v-chip>
			</template>
		</v-data-table>
	</v-container>
</template>

<script>
  export default {
    data () {
      return {

        search: '',
        headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Status', value: 'carbs' },
          { text: 'Actions', value: 'actions', sortable: false, align: 'center' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
    methods: {
      getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },
      addClient() {
          this.$router.push('add-client')
      }
    },

  }
</script>