<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import removeToBasketMixin from "../../mixins/removeToBasket.vue";
import removePropertyInbasketMixin from "../../mixins/removePropertyInbasket.vue";

export default {
  props: {
    article: Object,
  },
  mixins: [removePropertyInbasketMixin, removeToBasketMixin],
  methods: {
    notify() {
      this.$notify({
        group: "foo",
        title: "Important message",
        text: "L'article à bien été ajouté au panier",
      });
    },
  },
};
</script>

<template>
  <div class="card text-white bg-dark border-light m-2" style="width: 18rem">
    <img
      src="https://place-hold.it/300"
      class="card-img-top"
      alt="https://place-hold.it/300"
    />
    <div class="card-body">
      <h5 class="card-title">{{ article.title }}</h5>
      <p class="card-text text-truncate">{{ article.description }}</p>
      <div class="d-flex justify-content-between">
        <span
          @click="
            $emit('add-to-basket', article.id);
            notify;
          "
        >
          <button class="btn btn-secondary">+</button>
        </span>
        <span
          v-if="article.inbasket"
          @click="
            $emit('remove-to-basket', article.id),
              removePropertyInbasket(article)
          "
        >
          <button class="btn btn-danger">-</button>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
