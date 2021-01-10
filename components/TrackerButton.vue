<template>
  <input class="tracker" @click="update" type="button" :value="state" />
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["card", "index"],
  computed: {
    ...mapState(["players"]),
    state() {
      const state = this.players[this.index].cards[this.card].trackerBtn;
      return state == 0 // don't know anything
        ? " "
        : state == 1 // maybe
        ? "?"
        : state == 2 // maybe x2
        ? "? x2"
        : state == 3 // maybe x3
        ? "? x3"
        : state == 4 // confirm not has card
        ? "X"
        : state == 5 // confirm has card
        ? "★"
        : " ";
    },
  },
  methods: {
    ...mapActions(["updatePlayerCardBtn"]),
    update() {
      this.updatePlayerCardBtn({
        index: this.index,
        card: this.card,
      });
    },
  },
};
</script>

<style scoped>
input.tracker {
  position: relative;
  width: 3rem;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  border: 1px solid;
  border-radius: 2px;
  line-height: 21px;
  font-size: inherit;
  color: inherit;
  appearance: none;
}
@media only screen and (min-width: 960px) {
  input.tracker {
    width: 4rem;
    line-height: 24px;
  }
}
input.tracker:active {
  top: 1px;
}
</style>
