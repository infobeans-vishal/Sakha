<template>
	<v-container>
		<v-card-title>
      Employee

			<div class="flex-grow-1"></div>
			<v-text-field
                    v-model="search"
                    label="Search Employee"
                    hide-details
                    outlined
                    rounded
                    append-icon="mdi-account-search"
                ></v-text-field>
            <v-btn class="ml-5" outlined small @click="$router.push({name: 'add-employee'})" color="green">Add Employee</v-btn>
		</v-card-title>
		<v-data-table
            :headers="headers"
            :items="result"
            :search="search"
            :loading="loading"
            loading-text="Loading... Please wait"
        >
            <template v-slot:item.name="{ item }">
				 {{ item.fname}} {{item.lname}}
			</template>

            <template v-slot:item.actions="{ item }">

                <v-tooltip  bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                    <v-icon color="green lighten-1" @click="$router.push({ name: 'view-employee', params: { id: item.id } })"> mdi-eye-outline</v-icon>
                    </v-btn>
                </template>
                <span>View</span>
                </v-tooltip>

                <v-tooltip  bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                    <v-icon color="green lighten-1" @click="$router.push({ name: 'edit-employee', params: { id: item.id } })"> mdi-pencil</v-icon>
                    </v-btn>
                </template>
                <span>Edit Client</span>
                </v-tooltip>

                <v-tooltip  bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" @click="deleteEmployee(item.id)">
                    <v-icon color="green lighten-1">mdi-delete-outline</v-icon>
                    </v-btn>
                </template>
                <span>Delete Resource</span>
                </v-tooltip>
            </template>

            <template v-slot:item.dateOfJoin="{ item }">
				<v-icon small color="blue">mdi-calendar-plus</v-icon> {{ Date() | formatDate}}
			</template>
			<template v-slot:item.calories="{ item }">
				<v-chip :color="getColor(item.calories)" dark>{{ item.fname }}</v-chip>
			</template>
		</v-data-table>
	</v-container>
</template>


<script>
export default {
     data () {
      return {
        result:[],
        search: '',
        loading: true,
        headers: [
          {
            text: 'Name',
            align: 'center',
            sortable: true,
            value: 'name',
          },
          { text: 'Email', value: 'email', align: 'center' },
          { text: 'User Name', value: 'username', align: 'center' },
          { text: 'Status', value: 'dateOfJoin', align: 'center' },
          { text: 'Actions', value: 'actions', sortable: false, align: 'center' },
        ],
      }
    },
    created() {
        this.getEmployee()
    },
    methods: {

        getEmployee() {
            this.$store.dispatch('getEmployee').then((response) => {
                this.result = response.data
                this.loading = false
            }).catch((error) => {
                console.warn('Not ola man :(');
                this.error = true;
                this.showResult = true;
            })
        },
        deleteEmployee(id) {
            console.log(id)
            console.log('function calling....')
             this.$store.dispatch('deleteEmployee', id ).then((response) => {
                 this.getEmployee()
            }).catch((error) => {
                this.error = true;
                this.showResult = true;
            })
        }

    }
}
</script>