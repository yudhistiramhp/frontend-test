<template>
  <div class="main-card">
    <h2 style="color: rgb(255, 132, 0); font-weight: bold;">Custom Pizza</h2>
    <div>
      <div style="margin-bottom: 20px;">
        <h3 style="font-size: 18px; font-weight: bold;">Size</h3>
        <label v-for="size in sizes" :key="size.id" style="margin-right: 10px;">
          <input 
            style="margin-right: 5px;" 
            type="radio" 
            name="size" 
            v-model="selectedSize" 
            :value="size"
            :disabled="!selectedPizza"
            class="radio-btn"
          >
          {{ size.name }}
          <span v-if="size.extra_price > 0" style="color: lightslategray;">
            (+${{ size.extra_price.toFixed(2) }} )
          </span>
        </label>
      </div>
      
      <div>
        <h3 style="font-size: 18px; font-weight: bold;">Toppings</h3>
        <div class="grid-container">
          <label 
            v-for="topping in toppings" 
            :key="topping.id"
            :class="['btn', {
              selected: isToppingSelected(topping),
              disabled: !isToppingAvailable(topping)
            }]"
          >
            <input 
              type="checkbox" 
              v-model="topping.selected" 
              :value="topping.id"
              :disabled="!isToppingAvailable(topping)"
              @change="toggleToppingSelection(topping)"
              class="visual-hidden"
            />
            {{ topping.name }}
          </label>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const sizes = store.state.pizza.sizes;
const toppings = store.state.pizza.toppings;

const selectedPizza = computed(() => store.state.pizza.selectedPizza);

const selectedSize = computed({
  get() {
    return store.state.pizza.selectedSize || sizes.find(size => size.name === 'Small');
  },
  set(pizzaSize) {
    store.dispatch('pizza/selectSize', pizzaSize); 
  }
});

const isToppingAvailable = (topping) => {
  return store.state.pizza.availableToppings.includes(topping.id);
};

const isToppingSelected = (currentTopping) => {
  return store.state.pizza.selectedToppings.some(topping => topping.id === currentTopping.id);
};

const toggleToppingSelection = (topping) => {
  if (isToppingAvailable(topping)) {
    store.commit('pizza/toggleToppingSelection', topping);
  }
};
</script>

<style>
.main-card {
  padding: 20px 100px; 
}

label.selected {
  background-color: #E77E23; 
  border-color: #E77E23;
  color: white;
}

.btn {
  border: 1px solid black;
  border-radius: 40px;
  padding: 10px 40px;
  margin: 5px;
  font-size: 14px;
  font-weight: bold;
}

.btn.disabled {
  background-color: rgb(211, 211, 211);
  cursor: not-allowed;
}

.btn:hover {
  border-color: #E77E23;
  color: #E77E23;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
}
</style>
