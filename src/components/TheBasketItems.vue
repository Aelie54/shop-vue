<script lang="ts">
import { mapWritableState } from "pinia";
import { useBasketStore } from "@/stores/basket";
import { RouterLink, RouterView } from "vue-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  computed: {
    ...mapWritableState(useBasketStore, {
      basket_articles: "getInBasket",
      total: "getTotalPrice",
    }),
  },
};
</script>

<template>
  <table class="table table-dark table-hover">
    <tr>
      <caption>
        Mon panier
      </caption>
    </tr>
    <tr>
      <th>Id</th>
      <th>Title</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
    <tr v-for="b_a in basket_articles" :key="b_a.id">
      <td>{{ b_a.id }}</td>
      <td>{{ b_a.title }}</td>
      <td>
        <input
        class="text-light"
          type="number"
          v-model="b_a.quantity"
          name="quantity"
          id="quantity"
        />
      </td>
      <td>{{ b_a.price }} {{ b_a.currency }}</td>
    </tr>
    <tr>
      <span> Total = {{ total }} € </span>
    </tr>
  </table>
</template>
