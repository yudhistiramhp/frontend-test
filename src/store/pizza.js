import pizzaData from "@/json/pizza-list.json";
import sizeData from "@/json/size-list.json";
import toppingData from "@/json/topping-list.json";

export default {
  namespaced: true,
  state() {
    return {
      pizzas: pizzaData.data || [],
      sizes: sizeData.data || [],
      toppings: toppingData.data || [],
      selectedPizza: null,
      selectedSize: null,
      selectedToppings: [],
      availableToppings: []
    };
  },
  mutations: {
    setPizzaData(state, payload) {
      state.pizzas = payload;
    },
    setSizeData(state, payload) {
      state.sizes = payload;
    },
    setToppingData(state, payload) {
      state.toppings = payload;
    },
    setSelectedPizza(state, pizzaId) {
      const pizza = state.pizzas.find((pizza) => pizza.id === pizzaId);
      state.selectedPizza = pizza || null;
      state.availableToppings = pizza ? pizza.toppings : [];
      state.selectedSize = null;
      state.selectedToppings = [];
    },
    setSelectedSize(state, size) {
      state.selectedSize = size;
    },
    toggleToppingSelection(state, toppingId) {
      const index = state.selectedToppings.findIndex((id) => id === toppingId);
      if (index > -1) {
        state.selectedToppings.splice(index, 1);
      } else {
        state.selectedToppings.push(toppingId);
      }
    },
    resetSelections(state) {
      state.selectedPizza = null;
      state.selectedSize = { id: 1, name: 'Small', extra_price: 0 };
      state.selectedToppings = [];
      state.availableToppings = [];
    }
  },
  actions: {
    selectPizza({ commit }, pizza) {
      commit('setSelectedPizza', pizza);
    },
    selectSize({ commit }, size) {
      commit('setSelectedSize', size);
    },
    toggleTopping({ commit }, topping) {
      commit('toggleToppingSelection', topping);
    },

  }
};
