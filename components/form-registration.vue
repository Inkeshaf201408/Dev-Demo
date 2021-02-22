<template>
  <div>
    <b-form-group label="Select your Payment Preference" v-slot="{ariaDescribedby}">
      <b-form-radio-group
        id=""
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="payment-options"
        plain
      ></b-form-radio-group>
    </b-form-group>
    <div class="sel-info">
      <b-alert  v-if="selected === 'credit_card'" show variant="info">Please provide your credit card details</b-alert>
      <b-alert  v-if="selected === 'credit_approval'" show variant="warning">Please provide your credit card details</b-alert>
      <b-alert  v-if="selected === 'ach_wire_check'" show variant="success">Please provide your ACH/Wire/Check details</b-alert>
    </div>
  </div>
</template>


<script>
  import { BFormGroup, BFormRadioGroup, BAlert} from 'bootstrap-vue';

  export default {
    data() {
      return {
        selected: '',
        options: [
          { text: 'Credit Card', value: 'credit_card' },
          { text: 'Payment terms pending credit approval', value: 'credit_approval' },
          { text: 'ACH / Wire / Check', value: 'ach_wire_check' }
        ]
      }
    },
    components: {
      BFormGroup, BFormRadioGroup, BAlert 
    }
  }
</script>

<style scoped>
  .test_class_credit_approval {
    font-weight: bold;
  }
</style>