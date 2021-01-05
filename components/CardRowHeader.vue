<template>
  <th scope="row" class="regular">
    <section>
      <span
        @click="_updateCardSpanState"
        :class="whodunnitClass"
        :data-card="dataCardAttr"
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
    ...mapState(["clues"]),
    ...mapGetters(["nPlayers"]),
    cardDisplayName() {
      return this.clues[this.card].displayName;
    },
    whodunnitClass() {
      let sS = this.clues[this.card].whodunnitCardState;

      return sS == 0 ? "" : sS == 1 ? "strike" : sS == 2 ? "circle" : "";
    },
    dataCardAttr() {
      return this.clues[this.card].dataCardAttr;
    },
    mine() {
      return this.clues[this.card].mine;
    },
  },
  methods: {
    ...mapActions(["updateCardWhodunnitState", "toggleCardMine"]),
    _updateCardSpanState() {
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
