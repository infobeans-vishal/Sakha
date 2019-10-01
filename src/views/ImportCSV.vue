<template>
	<v-container>
		<v-card-title>
      Import CSV

			<div class="flex-grow-1"></div>
			<v-text-field
                    v-model="search"
                    label="Search CSV"
                    hide-details
                    outlined
                ></v-text-field>
            <v-btn class="ml-5" outlined small @click="addProject" color="green">Add CSV</v-btn>
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
                    <v-btn icon v-on="on" small>
                    <v-icon color="green lighten-3">mdi-format-list-bulleted-type</v-icon>
                    </v-btn>
                </template>
                <span>View Logs</span>
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
            text: 'CSV Type',
            align: 'center',
            sortable: false,
            value: 'name',
            width: '20%'
          },
          { text: 'File', align: 'center', value: 'calories' },
          { text: 'Author', align: 'center', value: 'fat' },
          { text: 'Import Date & Time', align: 'center', value: 'carbs', align: 'center' },
          { text: 'Actions', value: 'actions', sortable: false, align: 'center' },
        ],
        desserts: [
          {
            name: 'Project_csv',
            calories: 'project_csv_2017-01-27-16:48:34.csv',
            fat: 'Vishal Ingole',
            carbs: Date(),
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
      addProject() {
          this.$router.push('add-project')
      }
    },

  }
</script>