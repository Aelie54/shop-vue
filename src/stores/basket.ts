import { defineStore } from "pinia";
import myArticle from "./inventory.json";

export const useBasketStore = defineStore({
  id: "basket",
  state: () => ({
    articles: myArticle["articles"],
    inBasket: [],
  }),
  getters: {
    getInBasket: (state) => state.inBasket,
    getArticles: (state) => state.articles,

    getTotalPrice: (state) => {
      let total = 0;
      state.inBasket.map( (item : {price: number, quantity: number}) => {
        total+= (item.price * item.quantity)
      })
      return total
    },



    getBasketSize: (state) => state.inBasket.length
  },
  actions: {},
});
