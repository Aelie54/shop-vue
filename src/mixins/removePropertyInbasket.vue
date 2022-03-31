<script lang="ts">
export default {
  methods: {
    removePropertyInbasket(article: { inbasket: boolean }) {
      delete article.inbasket;
    },
  },
};
</script>
