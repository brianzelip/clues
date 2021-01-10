<template>
  <section>
    <input
      :value="seen"
      @input="toggleSeen"
      :id="`${card}-seen-player-${index + 1}`"
      :name="`${card}-seen-player-${index + 1}`"
      type="checkbox"
      class="hidden"
    />
    <label class="flex flex-center" :for="`${card}-seen-player-${index + 1}`">
      <Unseen class="unseen" v-show="!seen"></Unseen>
      <Seen v-show="seen" class="seen"></Seen>
    </label>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Seen from "./Seen.vue";
import Unseen from "./Unseen.vue";

export default {
  props: ["card", "index"],
  components: { Seen, Unseen },
  computed: {
    ...mapState(["cards", "players"]),
    seen() {
      return this.players[this.index].cards[this.card].seenMine;
    },
  },
  methods: {
    ...mapActions(["togglePlayerCardSeen"]),
    toggleSeen() {
      this.togglePlayerCardSeen({ card: this.card, index: this.index });
    },
  },
};
</script>

<style scoped>
input.hidden {
  position: absolute;
  top: -9999px;
  left: -9999px;
  visibility: hidden;
  opacity: 0;
}

svg {
  width: 25px;
  height: 20px;
}
</style>
