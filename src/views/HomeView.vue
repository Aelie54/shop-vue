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
    <ArticleItems />
  </main>
</template>
