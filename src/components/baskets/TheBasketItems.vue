<script lang="ts">
import { mapWritableState } from "pinia";
import { useBasketStore } from "@/stores/basket";
import removeToBasketMixin from "../../mixins/removeToBasket.vue";
import removePropertyInbasketMixin from "../../mixins/removePropertyInbasket.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  mixins: [removeToBasketMixin, removePropertyInbasketMixin],
  computed: {
    ...mapWritableState(useBasketStore, {
      basket_articles: "getInBasket",
      total: "getTotalPrice",
    }),
  },
  methods: {
    //Force la quantité à ne pas être un chiffre decimal
    //Arrondi à l'unité supérieur
    forceQuantityToInt(article: { quantity: number }) {
      article.quantity = Math.round(article.quantity);
    },
  },
};
</script>

<template>
  <table class="table table-dark table-hover">
    <caption>
      Mon panier
    </caption>
    <tr>
      <th>Id</th>
      <th>Title</th>
      <th>Quantity</th>
      <th>Unit price</th>
      <th>Price</th>
      <th v-if="basket_articles.length > 0">
        <i class="fa-solid fa-trash-can"></i>
      </th>
    </tr>
    <tr v-for="b_a in basket_articles" :key="b_a.id">
      <td>{{ b_a.id }}</td>
      <td>{{ b_a.title }}</td>
      <td>
        <input
          @change="forceQuantityToInt(b_a)"
          class="text-light"
          type="number"
          v-model="b_a.quantity"
          name="quantity" 
          min="1"
          max="100"
          id="quantity"
        />
      </td>
      <td>{{ b_a.price }} {{ b_a.currency }}</td>
      <td>{{ b_a.price * b_a.quantity }} {{ b_a.currency }}</td>
      <td>
        <span @click="removeToBasket(b_a.id), removePropertyInbasket(b_a)">
          <button class="btn btn-danger">-</button>
        </span>
      </td>
    </tr>
    <tr>
      <span> Total = {{ total }} € </span>
    </tr>
  </table>
</template>
