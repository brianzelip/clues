<template>
  <div class="page" :class="{ dark: darkMode, light: !darkMode }">
    <div class="container px2 pb2">
      <TheHeader v-on:toggle-color="toggleColor"></TheHeader>

      <main>
        <table>
          <thead>
            <tr>
              <th scope="col" class="v-middle">
                <section class="mine">
                  <span class="h5 regular" v-if="numPlayers > 0">mine</span>
                  <AddPlayerBtn
                    v-if="numPlayers == 0"
                    v-on:add-player="addPlayer"
                    :style="{ paddingTop: '10px', paddingBottom: '10px' }"
                  ></AddPlayerBtn>
                </section>
              </th>
              <th scope="col" v-for="(p, i) in players" :key="i">
                <PlayerColHeader
                  :player="p"
                  :numPlayers="players.length"
                  :index="i"
                  v-on:add-player="addPlayer"
                  v-on:remove-player="removePlayer"
                  v-on:update-player="updatePlayer"
                ></PlayerColHeader>
              </th>
            </tr>
          </thead>

          <tbody>
            <CardRow
              v-for="(p, i) in people"
              :key="`${p}-${i}`"
              :card="p"
              :numPlayers="numPlayers"
            ></CardRow>

            <SpacerRow :num="numPlayers"></SpacerRow>

            <CardRow
              v-for="(r, i) in rooms"
              :key="`${r}-${i}`"
              :card="r"
              :numPlayers="numPlayers"
            ></CardRow>

            <SpacerRow :num="numPlayers"></SpacerRow>

            <CardRow
              v-for="(w, i) in weapons"
              :key="`${w}-${i}`"
              :card="w"
              :numPlayers="numPlayers"
            ></CardRow>
          </tbody>
        </table>
      </main>

      <TheFooter></TheFooter>
    </div>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import CardRow from "./CardRow.vue";
import AddPlayerBtn from "./AddPlayerBtn.vue";
import PlayerColHeader from "./PlayerColHeader.vue";
import TrackerButton from "./TrackerButton.vue";
import SpacerRow from "./SpacerRow.vue";
import TheFooter from "./TheFooter.vue";

export default {
  components: {
    TheHeader,
    CardRow,
    AddPlayerBtn,
    PlayerColHeader,
    TrackerButton,
    SpacerRow,
    TheFooter,
  },
  data() {
    return {
      darkMode: false,
      players: ["Player 1"],
      people: [
        "Colonel Mustard",
        "Miss Scarlet",
        "Professor Plum",
        "Mr. Green",
        "Mrs. White",
        "Mrs. Peacock",
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
    numPlayers() {
      return this.players.length;
    },
  },
  methods: {
    toggleColor() {
      this.darkMode = !this.darkMode;
    },
    updatePlayer(obj) {
      this.players[obj.index] = obj.player;
    },
    addPlayer() {
      this.players.push(`Player ${this.players.length + 1}`);
    },
    removePlayer(i) {
      const l = this.players.length;
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
}

thead th {
  position: sticky;
  top: 0;
  text-align: center;
  z-index: 1;
}

th,
td {
  padding: 0.5rem;
  border-bottom-width: 1px;
  border-bottom-style: solid;
}

td {
  border-left-width: 1px;
  border-left-style: solid;
}

.spacer {
  height: 24px;
}

section.mine {
  position: relative;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
}

section.mine {
  position: relative;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
}

section.mine span {
  appearance: none;
  color: inherit;
  background-color: inherit;
  border: none;
  text-align: center;
}
</style>
