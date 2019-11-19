<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1" color="green" :editable="editable">
      Client Details
      <small>Summarize if needed</small>
    </v-stepper-step>

    <v-stepper-content step="1" editable>
      <v-card class="mb-12" min-height="200px" color="gray lighten-5">
          <v-container>
          <v-row>
              <v-col class="d-flex" cols="12" sm="6">
                  <v-text-field
                  label="Name *"
                  v-model="name"
                  outlined
                  dense
                  shaped
                  >

                  </v-text-field>
              </v-col>

               <v-col class="d-flex" cols="12" sm="6">
                  <v-text-field outlined shaped
                  label="Short Name *"
                  v-model="short_name"
                  ></v-text-field>
              </v-col>

              <v-col md="6">
                  <v-text-field outlined shaped
                  label="Website Url"
                  v-model="website_url"
                  ></v-text-field>
              </v-col>

              <v-col md="6">
                  <v-text-field outlined shaped
                  label="Domain Tags"
                  v-model="domain_tags"
                  ></v-text-field>
              </v-col>

              <v-col md="6">
                   <v-select
                    :items="status_list"
                    label="Status"
                    item-text="name"
                    outlined
                    shaped
                    v-model="status"
                    dense
                    ></v-select>
                        </v-col>


                <v-col class="d-flex" cols="12" sm="6">
                   <v-select
                    :items="options"
                    item-text="name"
                    label="MSA *"
                    outlined
                    v-model="msa"
                    shaped
                    dense
                    ></v-select>
                        </v-col>
                <v-col md="6">
                            <v-select
                    :items="options"
                    label="NDA *"
                    outlined
                    v-model="nda"
                    shaped
                    item-text="name"
                    dense
                    ></v-select>

                </v-col>
                 <v-col md="6">
                            <v-textarea
                            shaped
                            outlined
                            v-model="description"
                            label="Description"
                    ></v-textarea>
                </v-col>
          </v-row>
        </v-container>
      </v-card>
      <v-btn color="green" @click="e6 = 2" outlined small>Continue</v-btn>
      <v-btn class="ml-2" outlined color="green" small>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2" color="green">Point Of Contact (s)</v-stepper-step>

    <v-stepper-content step="2">
      <v-card class="mb-12" min-height="200px">
           <v-container>
          <v-row>
              <v-col md="6">
                  <v-text-field outlined
                  label="First Name *"
                  shaped
                  v-model="first_name"
                  >

                  </v-text-field>
              </v-col>
              <v-col md="6">
                  <v-text-field outlined
                  label="Last Name *"
                  shaped
                  v-model="last_name"
                  >
                  </v-text-field>
              </v-col>
              <v-col md="6">
                  <v-text-field outlined
                  label="Email *"
                  shaped
                  v-model="email"
                  >
                  </v-text-field>
              </v-col>
              <v-col md="6">
                  <v-text-field outlined
                  label="Phone *"
                  shaped
                  v-model="phone"
                  >
                  </v-text-field>
              </v-col>
          </v-row>
           </v-container>


      </v-card>
      <v-btn color="green" @click="createClient" outlined small>Save</v-btn>
      <v-btn small outlined color="green" class="ml-2">Cancel</v-btn>
    </v-stepper-content>
    </v-stepper-content>
  </v-stepper>
</template>


<script>
  export default {
    data () {
      return {
        name: '',
        short_name: '',
        website_url: '',
        domain_tags: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: null,
        status: '',
        e6: 1,
        status_list: [{ name: 'Active', value: 0 }, { name: 'Inactive', value: 1 }, {name: 'Prospect', value: 2 }],
        options: [{name: 'Yes', value: 0 },{name: 'No', value: 1}],
        msa: '',
        nda: '',
        editable: true,
        description: ''

      }
    },
    methods: {
      createClient() {

        var payload = {
          name : this.name,
          short_name : this.short_name,
          website_url : this.website_url,
          domain_tags : this.domain_tags,
          first_name : this.first_name,
          last_name : this.last_name,
          email : this.email,
          phone : this.phone,
          status : this.status,
          msa : this.msa,
          nda : this.nda,
          description : this.description
        }
        this.$store.dispatch('createClient', payload ).then((response) => {
                //  this.getProjects()
            }).catch((error) => {
                this.error = true;
                this.showResult = true;

            })
      }
    }
  }
</script>