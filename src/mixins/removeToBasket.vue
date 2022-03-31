<script>
import { mapWritableState } from "pinia";
import { useBasketStore } from "../stores/basket";
export default {
  computed: {
    ...mapWritableState(useBasketStore, {
      inBasket: "inBasket",
    }),
  },
  methods: {
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
