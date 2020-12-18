<template>
  <div class="container px2 pb2">
    <TheHeader></TheHeader>

    <main>
      <table
        class="relative table-light overflow-hidden bg-white border rounded"
      >
        <thead>
          <tr>
            <th scope="col">
              <AddPlayerBtn
                v-if="numPlayers == 0"
                v-on:add-player="addPlayer"
                :style="{ paddingTop: '10px', paddingBottom: '10px' }"
              ></AddPlayerBtn>
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
          <tr v-for="(p, i) in people" :key="`${p}-${i}`">
            <Item :item="p"></Item>
            <td v-for="n in numPlayers" :key="`${p}-${n}`">
              <Button :person="p"></Button>
            </td>
          </tr>

          <tr class="spacer">
            <td :colspan="players.length + 1"></td>
          </tr>

          <tr v-for="(r, i) in rooms" :key="`${r}-${i}`">
            <Item :item="r"></Item>
            <td v-for="n in numPlayers" :key="`${r}-${n}`">
              <Button :room="r"></Button>
            </td>
          </tr>

          <tr class="spacer">
            <td :colspan="players.length + 1"></td>
          </tr>

          <tr v-for="(w, i) in weapons" :key="`${w}-${i}`">
            <Item :item="w"></Item>
            <td v-for="n in numPlayers" :key="`${w}-${n}`">
              <Button :weapon="w"></Button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>

    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import Item from "./Item.vue";
import AddPlayerBtn from "./AddPlayerBtn.vue";
import PlayerColHeader from "./PlayerColHeader.vue";
import Button from "./Button.vue";
import TheFooter from "./TheFooter.vue";

export default {
  components: {
    TheHeader,
    Item,
    AddPlayerBtn,
    PlayerColHeader,
    Button,
    TheFooter,
  },
  data() {
    return {
      players: ["You"],
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
    updatePlayer(obj) {
      this.players[obj.index] = obj.player;
    },
    addPlayer() {
      this.players.push("New");
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
thead {
  position: relative;
  z-index: 1;
}
thead th {
  position: sticky;
  top: 0;
  background-color: #ddd;
  text-align: center;
}
tr:not(.spacer):hover {
  background-color: rgba(0, 0, 0, 0.0625);
}

th,
td {
  padding: 0.5rem;
}

.spacer {
  height: 24px;
}
th[scope="row"] {
  width: auto;
  max-width: 100px;
}
</style>
