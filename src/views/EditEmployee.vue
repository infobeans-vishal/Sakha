<template>
<v-container fluid>

    <v-row class="ml-0 mb-5" style="border: 1px solid gray; padding: 15px; width:100%;background:green;">
        Edit Employee
    </v-row>
    <!-- {{result[0]}} -->
    <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
    >
       <v-text-field
        v-model.trim="first_name"
        :counter="20"
        :rules="nameRules"
        required
        outlined
      ></v-text-field>

      <v-text-field
        v-model.trim="last_name"
        :counter="20"
        :rules="nameRules"
        label="Last Name"
        required
        outlined
      ></v-text-field>

       <v-text-field
        v-model.trim="username"
        :counter="20"
        :rules="nameRules"
        label="User Name"
        required
        outlined
      ></v-text-field>

      <v-text-field
        v-model.trim="email"
        :rules="emailRules"
        label="E-mail"
        outlined
        required
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
        outlined
        small
      >
        Submit
      </v-btn>

      <v-btn
        color="success"
        class="mr-4"
        outlined
        small
        @click="reset"
      >
        Clear
      </v-btn>

    </v-form>
  </v-container>
</template>


<script>
export default {
    data: () => ({
        result: [],
        valid: true,
        name: '',
        first_name: '',
        last_name: '',
        username: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 20) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ],
        checkbox: false,
        lazy: false,

    }),
    methods: {
        editEmployee() {
            this.$store.dispatch('getEmployeeInfo', this.$route.params.id).then((response) => {
                this.result = response.data
                this.first_name = response.data[0].fname
                this.last_name = response.data[0].lname
                this.username = response.data[0].username
                this.email = response.data[0].email
            }).catch((error) => {
                console.warn('Not ola man :(');
                this.error = true;
                this.showResult = true;
            })
        },
        validate () {
        if (this.$refs.form.validate()) {
             var payload = {
                fname : this.first_name,
                lname : this.last_name,
                email : this.email,
                username : this.username,
                status: 1,
                id: this.$route.params.id
            }
            this.$store.dispatch('editEmployee', payload ).then((response) => {
                this.$router.push('/employee')
            }).catch((error) => {
                this.error = true;
                this.showResult = true;

            })

          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
    created() {
        this.editEmployee()
    }

}
</script>