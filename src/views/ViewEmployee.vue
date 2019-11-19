<template>
    <v-container>
        <v-row class="ml-0 mb-5" style="border: 1px solid gray; padding: 15px; width:100%;background:green;">
            Employee Detail
        </v-row>
        <v-row class="ml-12 mr-0" style="width:80%;border: 1px solid #ccc" align="center">
            <v-col cols="6">First Name :</v-col>
            <v-col cols="6">{{firstName}}</v-col>
            <v-col cols="6">Last Name :</v-col>
            <v-col cols="6">{{lastName}}</v-col>
            <v-col cols="6">Email :</v-col>
            <v-col cols="6">{{email}}</v-col>
            <v-col cols="6">User Name :</v-col>
            <v-col cols="6">{{userName}}</v-col>

        </v-row>
    </v-container>
</template>


<script>
export default {
    data() {
        return {
            userName: 'vishal',
            email: '',
            firstName: '',
            lastName: '',
        }
    },
    methods: {

        getEmployeeInfo() {
            console.log(this.$route.params.id)
            this.$store.dispatch('getEmployeeInfo', this.$route.params.id).then((response) => {
                this.result = response.data
                this.firstName = response.data[0].fname
                this.lastName = response.data[0].lname
                this.userName = response.data[0].username
                this.email = response.data[0].email
            }).catch((error) => {
                console.warn('Not ola man :(');
                this.error = true;
                this.showResult = true;
            })

        }

    },
    created() {

        this.getEmployeeInfo()

    }
}
</script>