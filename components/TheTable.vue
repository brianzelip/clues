<template>
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
        v-for="(p, i) in people"
        :key="`${p}-${i}`"
        :card="p"
        :nPlayers="nPlayers"
      ></CardRow>

      <SpacerRow :nPlayers="nPlayers"></SpacerRow>

      <CardRow
        v-for="(r, i) in rooms"
        :key="`${r}-${i}`"
        :card="r"
        :nPlayers="nPlayers"
      ></CardRow>

      <SpacerRow :nPlayers="nPlayers"></SpacerRow>

      <CardRow
        v-for="(w, i) in weapons"
        :key="`${w}-${i}`"
        :card="w"
        :nPlayers="nPlayers"
      ></CardRow>
    </tbody>
  </table>
</template>

<script>
import TheTableHead from "./TheTableHead.vue";
import CardRow from "./CardRow.vue";
import SpacerRow from "./SpacerRow.vue";

export default {
  components: { TheTableHead, CardRow, SpacerRow },
  data() {
    return {
      players: ["Player 1"],
      people: [
        "Mr. Green",
        "Colonel Mustard",
        "Mrs. Peacock",
        "Professor Plum",
        "Miss Scarlet",
        "Mrs. White",
      ],
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
      weapons: [
        "Candlestick",
        "Knife",
        "Lead pipe",
        "Pistol",
        "Rope",
        "Wrench",
      ],
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
      this.players.push(`Player ${this.players.length + 1}`);
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
table {
  position: relative;
  border-radius: 3px;
  border-bottom: 0;
  font-size: inherit;
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
