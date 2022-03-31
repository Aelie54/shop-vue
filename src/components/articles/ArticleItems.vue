<script>
import { mapWritableState } from "pinia";
import { useBasketStore } from "../../stores/basket";
import Article from "./TheArticle.vue";

export default {
  computed: {
    ...mapWritableState(useBasketStore, {
      list: "getArticles",
      inBasket: "inBasket",
    }),
  },
  components: {
    Article,
  },
  methods: {
    addToBasket(selectedItemId) {
      let itemAlreadyInBasket = this.inBasket.find(
        (e) => String(e.id) === String(selectedItemId)
      );
      
      if (itemAlreadyInBasket) {
        return;
      }

      //Selectionne larticle dans la liste
      let item_to_add = this.list.find((e) => String(e.id) === String(selectedItemId));

      // lui ajoute une clé quantity
      item_to_add.quantity = 1;
      //l 'ajoute dans le tableau panier du store

      this.inBasket.push(item_to_add);
    },

    removeToBasket(selectedItemId) {
      //Selectionne larticle dans la liste
      let filteredBasket = this.inBasket.filter(
        (e) => String(e.id) !== String(selectedItemId)
      );

      this.inBasket = filteredBasket instanceof Array ? filteredBasket : [];
    },
  },
};
</script>

<template>
  <div v-for="item in list" :key="item">
    <Article
      :article="item"
      @add-to-basket="addToBasket"
      @remove-to-basket="removeToBasket"
    />
  </div>
</template>

<style scoped></style>
