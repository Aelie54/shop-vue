<script lang="ts">
import ArticleItems from "@/components/articles/ArticleItems.vue";
import { useBasketStore } from "../stores/basket";
import { mapState } from "pinia";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  components: {
    ArticleItems,
  },
  computed: {
    ...mapState(useBasketStore, ["getBasketSize"]),
  },
};
</script>

<template>
  <main>
    <div class="d-flex flex-end">
      <button type="button" class="btn btn-primary position-relative">
        Panier
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
          {{ getBasketSize }}
        </span>
      </button>
    </div>
    
    <ArticleItems />
  </main>
</template>
