<template>
<v-container>

    <v-row class="ml-0 mb-5" style="border: 1px solid gray; padding: 15px; width:100%;background:green">
        Add Employee
    </v-row>

    <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
    >
       <v-text-field
        v-model="first_name"
        :counter="20"
        :rules="nameRules"
        label="First Name"
        required
        outlined
      ></v-text-field>

      <v-text-field
        v-model="last_name"
        :counter="20"
        :rules="nameRules"
        label="Last Name"
        required
        outlined
      ></v-text-field>

       <v-text-field
        v-model="username"
        :counter="20"
        :rules="nameRules"
        label="User Name"
        required
        outlined
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        outlined
        required
      ></v-text-field>

      <!-- <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        outlined
        required
      ></v-select> -->

      <!-- <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox> -->

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

      <!-- <v-btn
        color="warning"
        @click="resetValidation"
      >
        Reset Validation
      </v-btn> -->
    </v-form>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
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
      validate () {
        if (this.$refs.form.validate()) {
             var payload = {
                fname : this.first_name,
                lname : this.last_name,
                email : this.email,
                username : this.username,
                status: 1
            }
            this.$store.dispatch('createEmployee', payload ).then((response) => {
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
  }
</script>