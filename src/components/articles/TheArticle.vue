<script lang="ts">
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  props: {
    article: Object,
  },
};
</script>

<template>
  <div>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <span class="btn btn-primary">{{ article.price }} {{ article.currency }} </span>
   
    <span @click="$emit('add-to-basket', article.id)">
      <button class="btn btn-secondary">+</button> 
    </span>
    <span @click="$emit('remove-to-basket', article.id)">
      <button class="btn btn-danger">-</button> 
    </span>
  </div>
</template>

<style scoped>

</style>
