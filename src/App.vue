<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
</script>

<template>
  <header >
    <div class="bg-dark fs-3 d-flex p-5 justify-content-center" >
      <nav class="d-flex gap-5  justify-content-center">
        <RouterLink to="/" class="text-light text-decoration-none">Croquettes</RouterLink>
        <RouterLink to="/basket" class="text-light text-decoration-none">Panier</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

</style>
