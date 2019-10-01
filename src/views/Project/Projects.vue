<template>
	<v-container>
    <v-row>
      <v-col md="4">
        </v-col>
      <v-col md="4">
           <v-btn class="" outlined small @click="addProject" color="green">Add New Project</v-btn>
      </v-col>
      <v-col md="4">
        <v-text-field
                    v-model="search"
                    label="Search Project"
                    hide-details
                    outlined
                    rounded
                    append-icon="mdi-account-search"
                ></v-text-field>

      </v-col>
    </v-row>

		<v-data-table
            :headers="headers"
            :items="result"
            class="elevation-1  lighten-2 "
            :search="search"
            :loading="loading"
            loading-text="Loading... Please wait"
        >
            <template v-slot:item.actions="{ item }">

                <v-tooltip  bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" small>
                    <v-icon color="green lighten-3"> mdi-account-circle-outline</v-icon>
                    </v-btn>
                </template>
                <span>Resource Association</span>
                </v-tooltip>
                <v-tooltip  bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" small>
                    <v-icon color="green lighten-3"> mdi-pencil</v-icon>
                    </v-btn>
                </template>
                <span>Edit Project</span>
                </v-tooltip>

                <v-tooltip  bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" small>
                    <v-icon color="green lighten-3"> mdi-cash</v-icon>
                    </v-btn>
                </template>
                <span>Expenses</span>
                </v-tooltip>
                <v-tooltip  bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" small>
                    <v-icon color="green lighten-3">mdi-timelapse</v-icon>
                    </v-btn>
                </template>
                <span>Allocate Hours</span>
                </v-tooltip>
                <v-tooltip  bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" small @click="deleteProject(item.id)">
                    <v-icon color="green lighten-3">mdi-delete-outline</v-icon>
                    </v-btn>
                </template>
                <span>Delete Project</span>
                </v-tooltip>
                <v-tooltip  bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" small>
                    <v-icon color="green lighten-3">mdi-eye-outline</v-icon>
                    </v-btn>
                </template>
                <span>View SOW</span>
                </v-tooltip>
                <v-tooltip  bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" small>
                    <v-icon color="green lighten-3">mdi-format-list-bulleted-type</v-icon>
                    </v-btn>
                </template>
                <span>View Milestones</span>
                </v-tooltip>
            </template>

			<template v-slot:item.status="{ item }">
				<v-chip :color="getColor(item.status)" outlined small>{{ item.status }}</v-chip>
			</template>
		</v-data-table>
	</v-container>
</template>

<script>
  export default {
    data () {
      return {

        search: '',
        loading: true,
        result: [],
        headers: [
          {
            text: 'Name',
            align: 'center',
            sortable: true,
            value: 'projName',
          },
          { text: 'Client', align: 'center', value: 'client' },
          { text: 'Practice', align: 'center', value: 'practice' },
          { text: 'Status', align: 'center', value: 'status' },
          { text: 'Actions', value: 'actions', sortable: false, align: 'center' },
        ],
      }
    },
    methods: {
      getColor (status) {
        if (status == 'Completed') return 'green'
        else if (status == 'Active') return 'blue'
        else if (status == 'On-Hold') return 'red'
        else return 'yellow'
      },
      addProject() {
          this.$router.push('add-project')
      },
      getProjects() {
        this.$store.dispatch('getProjects').then((response) => {
                this.result = response.data
                this.loading = false
            }).catch((error) => {
                console.warn('Not ola man :(');
                this.error = true;
                this.showResult = true;
        })
      },
      deleteProject(id) {
            this.$store.dispatch('deleteProject', id ).then((response) => {
                 this.getProjects()
            }).catch((error) => {
                this.error = true;
                this.showResult = true;

            })
      }
    },
    created () {
      this.getProjects()
    }

  }
</script>

<style>
table {
  /* border-left: 1px solid springgreen; */
  /* border-right: 1px solid springgreen; */
  /* border-top: 1px solid springgreen; */
}
th {
  border-bottom: 1px solid springgreen;
  /* background-color: #000000 */
}
.v-data-footer {
  /* border-bottom: 1px solid springgreen; */
  /* border-left: 1px solid springgreen; */
  /* border-right: 1px solid springgreen; */
  /* background-color: #000000 */


}
tbody {
  background-color: #000000
  /* background-color: transparent; */
}
</style>