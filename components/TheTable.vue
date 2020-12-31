<template>
  <main>
    <table>
      <TheTableHead
        :players="players"
        :nPlayers="nPlayers"
        v-on:add-player="addPlayer"
        v-on:remove-player="removePlayer"
        v-on:update-player="updatePlayer"
      ></TheTableHead>

      <tbody>
        <CardRow
          :cardSliceIndex="peopleSliceIndex"
          v-for="(p, i) in people"
          :key="`${p}-${i}`"
          :card="p"
          :nPlayers="nPlayers"
        ></CardRow>

        <SpacerRow :nPlayers="nPlayers"></SpacerRow>

        <CardRow
          :cardSliceIndex="roomsSliceIndex"
          v-for="(r, i) in rooms"
          :key="`${r}-${i}`"
          :card="r"
          :nPlayers="nPlayers"
        ></CardRow>

        <SpacerRow :nPlayers="nPlayers"></SpacerRow>

        <CardRow
          :cardSliceIndex="weaponsSliceIndex"
          v-for="(w, i) in weapons"
          :key="`${w}-${i}`"
          :card="w"
          :nPlayers="nPlayers"
        ></CardRow>
      </tbody>
    </table>
  </main>
</template>

<script>
import TheTableHead from "./TheTableHead.vue";
import CardRow from "./CardRow.vue";
import SpacerRow from "./SpacerRow.vue";

export default {
  components: { TheTableHead, CardRow, SpacerRow },
  data() {
    return {
      players: ["Player1"],
      people: [
        "Mr. Green",
        "Col. Mustard",
        "Mrs. Peacock",
        "Prof. Plum",
        "Ms. Scarlet",
        "Mrs. White",
      ],
      peopleSliceIndex: 1,
      rooms: [
        "Ballroom",
        "Billiard room",
        "Conservatory",
        "Dining room",
        "Hall",
        "Kitchen",
        "Library",
        "Lounge",
        "Study",
      ],
      roomsSliceIndex: 0,
      weapons: [
        "Candlestick",
        "Knife",
        "Lead pipe",
        "Pistol",
        "Rope",
        "Wrench",
      ],
      weaponsSliceIndex: 0,
    };
  },
  computed: {
    nPlayers() {
      return this.players.length;
    },
  },
  methods: {
    updatePlayer(obj) {
      this.players[obj.index] = obj.player;
    },
    addPlayer() {
      this.players.push(`Player${this.players.length + 1}`);
    },
    removePlayer(i) {
      const l = this.nPlayers;
      let start = this.players.slice(0, i);
      let end = this.players.slice(i + 1);
      this.players = [...start, ...end];
    },
  },
};
</script>

<style>
main {
  position: relative;
  max-width: 100%;
  /* max-height: 100vh; */
  /* overflow: scroll; */
}
table {
  position: relative;
  border-radius: 3px;
  border-bottom: 0;
  border-collapse: separate;
  border-spacing: 0;
  font-size: inherit;
  /* overflow: scroll; */
}

thead {
  /* position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0; */
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
