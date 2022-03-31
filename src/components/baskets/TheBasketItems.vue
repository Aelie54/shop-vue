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
      let round = Math.round(article.quantity);
      article.quantity = round === 0 ? 1 : round;
    },
    handleDelete(article: { id: number }) {
      if (!confirm("🥺 owh non, est-ce vrai ?")) {
        return;
      }
      this.removePropertyInbasket(article);
      this.removeToBasket(article.id);
    },
  },
};
</script>

<template>
  <div v-if="basket_articles.length > 0">
    <div class="table-responsive">
      <table class="table table-dark table-hover text-center p-2">
        <caption>
          Mon panier
        </caption>
        <tr class="align-center">
          <th>Id</th>
          <th>Title</th>
          <th>Quantity</th>
          <th>Unit price</th>
          <th>Price</th>
          <th>
            <i
              class="fa-solid fa-2x text-center text-danger fa-trash-can border-danger"
            ></i>
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
            <span @click="handleDelete(b_a)">
              <button class="btn btn-dark border border-danger">-</button>
            </span>
          </td>
        </tr>
      </table>
    </div>
    <div class="d-flex justify-content-between align-items-end">
      <span class="fs-3" role="button"> 🛒 </span>
      <span class="btn btn-primary"
        ><i class="fa-solid fa-credit-card"></i> Payer
      </span>
      <span class="fs-2"> {{ total }} € </span>
    </div>
  </div>

  <div v-else class="d-flex align-items-center flex-column">
    <div class="fs-1">😶‍🌫️</div>
    <div>Vous n'avez pas de croquette dans votre panier</div>
  </div>
</template>
