<script lang="ts">
import { RouterLink, RouterView } from "vue-router";

import { mapState } from "pinia";
import { useBasketStore } from "./stores/basket";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  computed: {
    ...mapState(useBasketStore, ["getBasketSize"]),
  },
  components: {
    RouterLink,
    RouterView,
  },
};
</script>

<template>
  <header>
    <div class="bg-dark fs-3 d-flex p-5 justify-content-center">
      <nav class="d-flex gap-5 justify-content-center">
        <RouterLink to="/" class="text-light text-decoration-none">
          Croquettes
        </RouterLink>

        <RouterLink to="/basket" class="text-light text-decoration-none">
          Panier
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info"
          >
            {{ getBasketSize }}
          </span>
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
