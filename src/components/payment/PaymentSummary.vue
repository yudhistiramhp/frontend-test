<template>
  <div class="payment-summary">
    <h4 class="summary-title">Payment Summary</h4>
    <div v-if="!selectedPizza?.id" class="no-orders">
      <p>No orders yet</p>
    </div>
    <ul v-else class="item-list">
      <li v-if="selectedPizza?.id">
        <span>{{ selectedPizza.name }}</span>
        <span>
          ${{ selectedPizza.discount?.is_active 
            ? formatPrice(selectedPizza.discount.final_price) 
            : formatPrice(selectedPizza.price) 
          }}
        </span>
      </li>
      <li v-if="selectedPizza?.id && selectedSize?.id">
        <span>{{ selectedSize.name }}</span>
        <span>${{ formatPrice(selectedSize.extra_price) }}</span>
      </li>
      <li v-for="topping in selectedToppings" :key="topping.id">
        <span>{{ topping.name }}</span>
        <span>${{ formatPrice(topping.price) }}</span>
      </li>
    </ul>
    <hr />
    <div class="total">
      <span>Total Price</span>
      <span class="total-price">${{ formatPrice(totalPrice) }}</span>
    </div>

    <button 
      class="order-btn" 
      @click="handleOrder" 
      :disabled="!hasOrders"
    >
      Order Now
    </button>

  </div>

  <!-- Modal -->
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-content">
      <img src="../../assets/img/success.png" style="height: 100px; width: 100px; margin-left: 78px; margin-bottom: 10px;" alt="">
      <h2>Order Success</h2>
      <p>Thank you, we have received your order successfully.</p>
      <button class="close-btn" @click="closeModal">Close</button>
    </div>
  </div>
</template>

  
<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const selectedPizza = computed(() => store.state.pizza.selectedPizza || { price: 0 });
const selectedSize = computed(() => store.state.pizza.selectedSize || { id: 1, name: 'Small', extra_price: 0 });
const selectedToppings = computed(() => store.state.pizza.selectedToppings || []);

const formatPrice = (price) => {
  return price === 0 ? price : price.toFixed(2);
};

const totalPrice = computed(() => {
  let total = 0;

  if (selectedPizza.value && selectedPizza.value.discount?.is_active) {
    total += selectedPizza.value.discount.final_price;
  } else if (selectedPizza.value) {
    total += selectedPizza.value.price;
  }

  if (selectedSize.value) total += selectedSize.value.extra_price;
  selectedToppings.value.forEach(topping => total += topping.price);

  return total;
});

const hasOrders = computed(() => store.state.pizza.selectedPizza);

const showModal = ref(false);

const resetSelections = () => {
  store.commit('pizza/resetSelections'); 
};

const handleOrder = () => {
  showModal.value = true;
};

const closeModal = () => {
  resetSelections(); 
  showModal.value = false;
};
</script>

<style>
  .payment-summary {
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    font-size: 14px;
    color: #333;
    margin-top: 50px;
  }
  
  .summary-title {
    color: #E77E23;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .item-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .item-list li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 14px;
    color: #555;
  }
  
  hr {
    margin: 20px 0;
    border: none;
    border-top: 1px solid #ddd;
  }
  
  .total {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .total-price {
    color: #E77E23;
  }
  
  .order-btn {
    width: 100%;
    padding: 10px;
    background-color: #E77E23;
    border: none;
    border-radius: 20px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .order-btn:hover {
    background-color: #E77E23;
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .no-orders {
  color: #999;
  font-size: 14px;
  margin: 20px 0;
}
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .close-btn {
    padding: 10px 20px;
    background-color: #E77E23;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
  
  .close-btn:hover {
    background-color: #E77E23;
  }

  button:disabled {
    background-color: darkgray;
    cursor: not-allowed;
  }

  button:disabled:hover {
    background-color: darkgray
  }
  </style>
  