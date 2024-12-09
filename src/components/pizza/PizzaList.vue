<template>
  <div class="main-card">
    <h2 class="chooze">Choose Your Pizza</h2>
    <div class="pizza-container">
      <label
        v-for="(pizza, index) in pizzas"
        :key="pizza.id"
        class="pizza-card"
        :class="{ active: selectedPizza?.id === pizza.id }" 
        :for="pizza.name"
      >
        <div class="pizza-img">
          <img :src="pizzaImages[index]" alt="Pizza Image" />
        </div>
        <div class="pizza-price">
          <h3>{{ pizza.name || "-" }}</h3>
          <div class="price-info">
            <span v-if="pizza.discount?.is_active" class="price">
              ${{ (pizza.discount.final_price || 0).toFixed(2) }}
            </span>
            <span v-else class="price">
              ${{ (pizza.price || 0).toFixed(2) }}
            </span>
            <span v-if="pizza.discount?.is_active" class="old-price">
              ${{ (pizza.price || 0).toFixed(2) }}
            </span>
          </div>
        </div>
        <div v-if="pizza.discount?.is_active" class="ribbon-banner">
          <img src="@/assets/img/ribbon.svg" alt="Offer Badge" />
        </div>
        <input
          :id="pizza.name"
          type="radio"
          name="pizza"
          class="visual-hidden"
          :checked="selectedPizza?.id === pizza.id"
          @input="handlePizzaSelection(pizza.id)"
        />
      </label>
    </div>
  </div>
</template>



<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const pizzas = store.state.pizza.pizzas;

const selectedPizza = computed(() => store.state.pizza.selectedPizza);

import cheesePizza from '@/assets/img/pizza/Cheese Pizza.png';
import veggiePizza from '@/assets/img/pizza/Veggie Pizza.png';
import classicalPizza from '@/assets/img/pizza/Classical Pizza.png';

const pizzaImages = [
  cheesePizza,
  veggiePizza,
  classicalPizza
];

const handlePizzaSelection = (pizza) => {
  store.dispatch('pizza/selectPizza', pizza); 
};
</script>


<style>
.chooze {
  color: #E77E23;
  font-weight: bold;
  padding: 20px 0px;
}
.visual-hidden {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.pizza-card {
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f8f8f6;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  margin-right: 70px;
  width: 300px;
}

.pizza-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #e77e234d;
  border-color: #E77E23;
}

.pizza-card.active {
  background-color: #E77E23;
  color: #fff;
}

.pizza-img img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.3s;
}

.pizza-card:hover .pizza-img img {
  transform: rotate(20deg);
}

.pizza-price {
  margin-left: 0.5rem;
}

.pizza-price h3 {
  font-size: 1rem;
  font-weight: bold;
}

.price-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.price {
  font-size: 1rem;
}

.old-price {
  font-size: 0.9rem;
  color: #aaa;
  text-decoration: line-through;
}

.ribbon-banner {
  position: absolute;
  top: 0;
  right: 0;
}

.ribbon-banner img {
  height: 100px;
}

.pizza-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
