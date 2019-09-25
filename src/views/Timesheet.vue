<template>
	<v-container>


		<v-card-title>
      Timesheet Details
			<div class="flex-grow-1"></div>

            <v-btn class="ml-5" outlined small @click="addClient" color="blue">Log Time</v-btn>
		</v-card-title>

      <v-simple-table fixed-header light>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center header">Total Working Days</th>
          <th class="text-center header">Logged Hours</th>
          <th class="text-center header">Available Hours</th>
          <th class="text-center header">Hours Not Logged</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td class="text-center">{{ working_days }}</td>
          <td class="text-center">{{ logged_hours }}</td>
          <td class="text-center">{{ available_hours }}</td>
          <td class="text-center" style="color:red">{{ not_logged_hours }}</td>
        </tr>
      </tbody>
    </template>

  </v-simple-table>

		<v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-1 mt-5"
            :search="search"

        >
            <template v-slot:item.actions="{ item }">

                <v-tooltip v-model="show" bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                    <v-icon color="green lighten-1"> mdi-watch</v-icon>
                    </v-btn>
                </template>
                <span>Add Log Time</span>
                </v-tooltip>

                <v-tooltip v-model="show" bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                    <v-icon color="green lighten-1"> mdi-checkbox-marked-circle-outline</v-icon>
                    </v-btn>
                </template>
                <span>Mark As Leave</span>
                </v-tooltip>

                <v-tooltip v-model="show" bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                    <v-icon color="green lighten-1"> mdi mdi-copyright</v-icon>
                    </v-btn>
                </template>
                <span>Edit Client</span>
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
            text: 'Date',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Project', value: 'carbs' },
          { text: 'Milestone', value: 'carbs' },
          { text: 'Task', value: 'carbs' },
          { text: 'Logged Hours', value: 'carbs' },
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
        working_days: 18,
        logged_hours: 40.00,
        available_hours: 144.00,
        not_logged_hours: 104.00
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


<style scoped>
td, th { border: 1px solid grey;
}
.header {
    color: black !important
}
.v-data-table-header {
    color: red !important
}
</style>