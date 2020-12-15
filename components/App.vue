<template>
  <div class="container px2 pb2">
    <header class="py3">
      <h1 class="mt0 mb2">Clue clues 🔎</h1>
      <p class="m0">
        Click player card buttons to cycle through 3 states: unknown (<span
          class="italic"
          >empty</span
        >), maybe (?), confirm (★).
      </p>
      <p class="m0">Click item name to cross it off.</p>
    </header>

    <main>
      <table
        class="relative table-light overflow-hidden bg-white border rounded"
      >
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col" v-for="(p, i) in players" :key="i">{{ p }}</th>
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
    <footer class="py2 center">
      <a href="https://github.com/brianzelip/clues.git">source</a>
    </footer>
  </div>
</template>

<script>
import Item from "./Item.vue";
import Button from "./Button.vue";

export default {
  components: { Item, Button },
  data() {
    return {
      players: ["Abbie", "Colleen", "Molly", "Paul", "Bryan", "Claire"],
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
    strike() {},
  },
};
</script>

<style>
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
