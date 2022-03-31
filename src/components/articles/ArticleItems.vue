<script>
import { mapWritableState } from "pinia";
import { useBasketStore } from "../../stores/basket";
import Article from "./TheArticle.vue";
import removeToBasketMixin from "../../mixins/removeToBasket.vue";
export default {
  mixins: [removeToBasketMixin],
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
      let item_to_add = this.list.find(
        (e) => String(e.id) === String(selectedItemId)
      );

      // lui ajoute une clé quantity
      item_to_add.quantity = 1;
      item_to_add.inbasket = true;

      //l 'ajoute dans le tableau panier du store
      this.inBasket.push(item_to_add);
    },
  },
};
</script>

<template>
  <div class="p-5 d-flex flex-wrap justify-content-center">
    <div v-for="item in list" :key="item">
      <Article
        :article="item"
        @add-to-basket="addToBasket"
        @remove-to-basket="removeToBasket"
      />
    </div>
  </div>
</template>

<style scoped></style>
