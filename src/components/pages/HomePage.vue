<template>
  <div class="d-flex">
    <div class="pizza-container">
      <pizza-list v-model="formData.pizza"></pizza-list>
      <custom-pizza></custom-pizza>
    </div>
    <div class="payment-summary-container">
      <payment-summary></payment-summary>
    </div>
  </div>
</template>

<script setup>
import PizzaList from '../pizza/PizzaList.vue';
import CustomPizza from '../pizza/CustomPizza.vue';
import PaymentSummary from '../payment/PaymentSummary.vue';

import { reactive } from 'vue';

const formData = reactive({
  pizza: null
});
</script>

<style scoped>
.d-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.pizza-container, .payment-summary-container {
  flex: 1;
  min-width: 200px;
  padding: 10px;
}

.pizza-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.pizza-list, .custom-pizza {
  width: 100%;
  margin-bottom: 15px; 
}

.payment-summary-container {
  max-width: 400px;
}

</style>
