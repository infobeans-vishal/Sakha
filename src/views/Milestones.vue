<template>
	<v-container>
		<v-card-title>
      MILESTONES

			<div class="flex-grow-1"></div>
			<v-text-field
                    v-model="search"
                    label="Search Project"
                    hide-details
                    outlined
                ></v-text-field>
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
                    <v-icon color="gray lighten-1"> mdi-pencil</v-icon>
                    </v-btn>
                </template>
                <span>Edit SOW  & Milestone</span>
                </v-tooltip>
            </template>

			<template v-slot:item.sow="{ item }">
				<v-chip :color="getColor(item.sow)" dark>{{ item.sow }}</v-chip>
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
            text: 'Title',
            align: 'left',
            sortable: true,
            value: 'title',
          },
          { text: 'SOW Number', value: 'sow' },
          { text: 'Invoice Date', value: 'invoice' },
          { text: 'Planned Efforts', value: 'efforts' },
          { text: 'Amount', value: 'amount' },
          { text: 'Status', value: 'status' },
          { text: 'Actions', value: 'actions', sortable: false, align: 'center' },
        ],
        desserts: [
          {
            title: '31-October-2019',
            sow: 'NOSOW',
            invoice: '31-October-2019',
            status: 'Active',
            protein: 4.0,
            iron: '1%',
            efforts: 0,
            amount: '4,704.00 / USD',
          },
          {
            title: 'Ice cream sandwich',
            sow: 237,
            invoice: 9.0,
            status: 'Completed',
            protein: 4.3,
            iron: '1%',
            efforts: 0,
            amount: '4,704.00 / USD',
          },
          {
            title: 'Eclair',
            sow: 262,
            invoice: 16.0,
            status: 23,
            protein: 6.0,
            iron: '7%',
            efforts: 0,
            amount: '4,704.00 / USD',
          },
          {
            title: 'Cupcake',
            sow: 305,
            invoice: 3.7,
            status: 67,
            protein: 4.3,
            iron: '8%',
            efforts: 0,
            amount: '4,704.00 / USD',
          },
          {
            title: 'Gingerbread',
            sow: 356,
            invoice: 16.0,
            status: 49,
            protein: 3.9,
            iron: '16%',
            efforts: 0,
            amount: '4,704.00 / USD',
          },
          {
            title: 'Jelly bean',
            sow: 375,
            invoice: 0.0,
            status: 94,
            protein: 0.0,
            iron: '0%',
            efforts: 0,
            amount: '4,704.00 / USD',
          },
          {
            title: 'Lollipop',
            sow: 392,
            invoice: 0.2,
            status: 98,
            protein: 0,
            iron: '2%',
            efforts: 0,
            amount: '4,704.00 / USD',
          },
          {
            title: 'Honeycomb',
            sow: 408,
            invoice: 3.2,
            status: 87,
            protein: 6.5,
            iron: '45%',
            efforts: 0,
            amount: '4,704.00 / USD',
          },
          {
            title: 'Donut',
            sow: 452,
            invoice: 25.0,
            status: 51,
            protein: 4.9,
            iron: '22%',
            efforts: 0,
            amount: '4,704.00 / USD',
          },
          {
            title: 'KitKat',
            sow: 518,
            invoice: 26.0,
            status: 65,
            protein: 7,
            iron: '6%',
            efforts: 0,
            amount: '4,704.00 / USD',
          },
        ],
      }
    },
    methods: {
      getColor (sow) {
        if (sow > 400) return 'red'
        else if (sow > 200) return 'orange'
        else return 'green'
      },
      addProject() {
          this.$router.push('add-project')
      }
    },

  }
</script>