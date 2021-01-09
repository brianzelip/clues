<template>
  <th scope="row" class="regular">
    <section>
      <span
        @click="_updateCardWhodunnitState"
        :class="whodunnitClass"
        :data-card="cardDisplayName"
        >{{ cardDisplayName }}</span
      >
      <label v-show="nPlayers > 0" :for="`my-card-${cardDisplayName}`">
        <input
          :value="mine"
          @input="_toggleCardMine"
          type="checkbox"
          :id="`my-card-${cardDisplayName}`"
        />
      </label>
    </section>
  </th>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  props: ["card"],
  computed: {
    ...mapState(["cards"]),
    ...mapGetters(["nPlayers"]),
    cardDisplayName() {
      return this.cards[this.card].displayName;
    },
    mine() {
      return this.cards[this.card].mine;
    },
    whodunnitClass() {
      let wcs = this.cards[this.card].whodunnitCardState;

      return wcs == 0 ? "" : wcs == 1 ? "strike" : wcs == 2 ? "circle" : "";
    },
  },
  methods: {
    ...mapActions(["updateCardWhodunnitState", "toggleCardMine"]),
    _updateCardWhodunnitState() {
      this.updateCardWhodunnitState(this.card);
    },
    _toggleCardMine() {
      this.toggleCardMine(this.card);
    },
  },
};
</script>

<style scoped>
section {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 0;
}
span {
  display: inline-block;
  margin-left: -4px;
  margin-right: -4px;
  padding-right: 4px;
  padding-left: 4px;
  border: 2px solid transparent;
  border-radius: 50%;
}

label {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 400;
}
</style>
