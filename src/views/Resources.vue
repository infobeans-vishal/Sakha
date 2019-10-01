<template>
	<v-container>
		<v-card-title>
      Resources

			<div class="flex-grow-1"></div>
			<v-text-field
                    v-model="search"
                    label="Search Resource"
                    hide-details
                    outlined
                    rounded
                    append-icon="mdi-account-search"
                ></v-text-field>
            <v-btn class="ml-5" outlined small @click="" color="green">Add New Resource</v-btn>
		</v-card-title>
		<v-data-table
            :headers="headers"
            :items="result"
            :search="search"
            :loading="loading"
            loading-text="Loading... Please wait"
        >
            <template v-slot:item.actions="{ item }">

                <v-tooltip  bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                    <v-icon color="green lighten-1"> mdi-office</v-icon>
                    </v-btn>
                </template>
                <span>Manage Department</span>
                </v-tooltip>

                <v-tooltip  bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                    <v-icon color="green lighten-1"> mdi-truck-delivery</v-icon>
                    </v-btn>
                </template>
                <span>Purchase Order</span>
                </v-tooltip>

                <v-tooltip  bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                    <v-icon color="green lighten-1"> mdi-pencil</v-icon>
                    </v-btn>
                </template>
                <span>Edit Client</span>
                </v-tooltip>

                <v-tooltip  bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" @click="deleteResource(item.id)">
                    <v-icon color="green lighten-1">mdi-delete-outline</v-icon>
                    </v-btn>
                </template>
                <span>Delete Resource</span>
                </v-tooltip>
            </template>

            <template v-slot:item.dateOfJoin="{ item }">
				<v-icon small color="blue">mdi-calendar-plus</v-icon> {{ item.dateOfJoin | formatDate}}
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
        result:[],
        search: '',
        loading: true,
        headers: [
            {
            text: 'Profile',
            align: 'center',
            sortable: false,
            value: 'profile_image',
          },
          {
            text: 'Name',
            align: 'center',
            sortable: true,
            value: 'name',
          },
          { text: 'Practice', value: 'practiceName' },
          { text: 'Designation', value: 'role' },
          { text: 'Member Since', value: 'dateOfJoin' },
          { text: 'Actions', value: 'actions', sortable: false, align: 'center' },
        ],
      }
    },
    created() {
        this.getResources()
    },
    methods: {

        getResources() {
            this.$store.dispatch('getResource').then((response) => {
                this.result = response.data
                this.loading = false
            }).catch((error) => {
                console.warn('Not ola man :(');
                this.error = true;
                this.showResult = true;

            })
        },
        deleteResource(id) {
             this.$store.dispatch('deleteResource', id ).then((response) => {
                 this.getResources()
            }).catch((error) => {
                this.error = true;
                this.showResult = true;

            })
        }

    }
}
</script>