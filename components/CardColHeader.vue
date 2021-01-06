<template>
  <th scope="col" class="z2 v-middle">
    <section class="card-wrapper">
      <span>Card</span>
      <span v-if="nPlayers > 0">mine</span>
      <AddPlayerBtn v-if="nPlayers == 0"></AddPlayerBtn>
    </section>
  </th>
</template>

<script>
import { mapGetters } from "vuex";

import AddPlayerBtn from "./AddPlayerBtn.vue";

export default {
  components: { AddPlayerBtn },
  computed: {
    ...mapGetters(["nPlayers"]),
  },
};
</script>

<style scoped>
.card-wrapper {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

span {
  font-size: inherit;
  font-weight: 400;
  color: inherit;
  background-color: inherit;
}
</style>
