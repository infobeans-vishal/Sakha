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
            :items="result"
            class="elevation-1 mt-5"
            :search="search"
            :loading="loading"
            loading-text="Loading...Please Wait"
        >
            <template v-slot:item.actions="{ item }">

                <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" small>
                    <v-icon color="green lighten-1"> mdi-watch</v-icon>
                    </v-btn>
                </template>
                <span>Add Log Time</span>
                </v-tooltip>

                <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" small>
                    <v-icon color="green lighten-1"> mdi-checkbox-marked-circle-outline</v-icon>
                    </v-btn>
                </template>
                <span>Mark As Leave</span>
                </v-tooltip>

                <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" small>
                    <v-icon color="green lighten-1"> mdi mdi-copyright</v-icon>
                    </v-btn>
                </template>
                <span>Edit Client</span>
                </v-tooltip>

            </template>
      <template v-slot:item.timesheet_date="{ item }">
				<v-icon small color="blue">mdi-calendar-plus</v-icon> {{ item.timesheet_date | formatDate}}
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
        result: [],
        loading: true,
        headers: [
          {
            text: 'Date',
            align: 'center',
            sortable: false,
            value: 'timesheet_date',
            width: '20%'
          },
          { text: 'Project', align: 'center', value: 'projShortName', width: '20%' },
          { text: 'Milestone', align: 'center', value: 'title', width: '15%' },
          { text: 'Task', align: 'center', value: 'task_details', width: '20%' },
          { text: 'Logged Hours', align: 'center', value: 'efforts_in_hrs', width: '10%' },
          { text: 'Actions', value: 'actions', sortable: false, align: 'center', width: '20%' },
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
      },
      getTimesheet() {
         this.$store.dispatch('getTimesheet').then((response) => {
                this.result = response.data
                this.loading = false
            }).catch((error) => {
                console.warn('Not ola man :(');
                this.error = true;
                this.showResult = true;
        })
      }
    },
    created () {
      this.getTimesheet()
    }

  }
</script>


