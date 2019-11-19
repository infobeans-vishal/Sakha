<template>
  <div>

    <v-stepper
      v-model="e1"
      :vertical="vertical"
      :alt-labels="altLabels"
    >
      <template v-if="vertical">
        <template v-for="n in steps">
          <v-stepper-step
            :key="`${n}-step`"
            :complete="e1 > n"
            :step="n"
            :editable="editable"
          >
            Step {{ n }}
          </v-stepper-step>

          <v-stepper-content
            :key="`${n}-content`"
            :step="n"
          >
            <v-card
              class="mb-12"
              color="green lighten-1"
              height="200px"
            ></v-card>

            <v-btn
              color="primary"
              @click="nextStep(n)"
            >
              Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>
        </template>
      </template>
      <template v-else>
        <v-stepper-header>
          <template >
            <v-stepper-step
              :key="1-step"
              :complete="e1 > 1"
              :step="1"
              :editable="editable"
            >
              Step {{ n }}
            </v-stepper-step>

            <v-divider
              v-if="1 !== steps"
              :key="1"
            ></v-divider>
          </template>
          <template >
            <v-stepper-step
              :key="2-step"
              :complete="e1 > 2"
              :step="2"
              :editable="editable"
            >
              Step 2
            </v-stepper-step>
          </template>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content
            key="1"
            step="1"
          >
            <v-card
              class="mb-12"
              color="red lighten-1"
              height="200px"
            ></v-card>

            <v-btn
              color="primary"
              @click="nextStep(n)"
              small
              outlined
            >
              Continue
            </v-btn>

            <v-btn small outlined class="ml-2" color="primary">Cancel</v-btn>
          </v-stepper-content>
          <v-stepper-content
            key="2"
            step="2"
          >
            <v-card
              class="mb-12"
              color="green lighten-1"
              height="200px"
            ></v-card>

            <v-btn
              @click="nextStep(n)"
              small outlined class="ml-2" color="primary"
            >
              Continue
            </v-btn>

            <v-btn small outlined class="ml-2" color="primary">Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </template>
    </v-stepper>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        e1: 1,
        steps: 2,
        vertical: false,
        altLabels: false,
        editable: true,
      }
    },

    watch: {
      steps (val) {
        if (this.e1 > val) {
          this.e1 = val
        }
      },
      vertical () {
        this.e1 = 2
        requestAnimationFrame(() => this.e1 = 1) // Workarounds
      },
    },

    methods: {
      onInput (val) {
        this.steps = parseInt(val)
      },
      nextStep (n) {
        if (n === this.steps) {
          this.e1 = 1
        } else {
          this.e1 = n + 1
        }
      },
    },
  }
</script>