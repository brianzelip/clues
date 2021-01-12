<template>
  <table>
    <TheTableHead></TheTableHead>

    <tbody>
      <CardRow
        v-for="(card, i) in CARDS.people"
        :key="`${card}-${i}`"
        :card="card"
      ></CardRow>

      <SpacerRow :nPlayers="nPlayers"></SpacerRow>

      <CardRow
        v-for="(card, i) in CARDS.rooms"
        :key="`${card}-${i}`"
        :card="card"
      ></CardRow>

      <SpacerRow :nPlayers="nPlayers"></SpacerRow>

      <CardRow
        v-for="(card, i) in CARDS.weapons"
        :key="`${card}-${i}`"
        :card="card"
      ></CardRow>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import TheTableHead from "./TheTableHead.vue";
import CardRow from "./CardRow.vue";
import SpacerRow from "./SpacerRow.vue";

export default {
  components: { TheTableHead, CardRow, SpacerRow },
  computed: {
    ...mapState(["CARDS"]),
    ...mapGetters(["nPlayers"]),
  },
};
</script>

<style>
table {
  position: relative;
  border-radius: 3px;
  border-bottom: 0;
  border-collapse: separate;
  border-spacing: 0;
  font-size: inherit;
}

thead {
  height: 3rem;
  z-index: 1;
  transition: 0.15s;
}
@media only screen and (min-width: 960px) {
  thead {
    height: 3.5rem;
  }
}

thead th {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
}
thead th:first-child {
  left: 0;
  z-index: 3;
}

tbody th {
  position: -webkit-sticky;
  position: sticky;
  left: 0;
  z-index: 2;
}

th,
td {
  padding: 0.25rem;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  height: 100%;
}
@media only screen and (min-width: 960px) {
  th,
  td {
    padding: 0.5rem;
  }
}

td {
  border-left-width: 1px;
  border-left-style: solid;
}

.spacer {
  height: 24px;
}
</style>
