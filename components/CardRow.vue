<template>
  <tr>
    <CardRowHeader :card="card"></CardRowHeader>
    <td v-for="(player, i) in players" :key="`${card}-${i}`" class="v-middle">
      <div class="flex flex-center">
        <TrackerButton
          :card="card"
          :player="player"
          v-if="!mine"
        ></TrackerButton>
        <SeenToggleSwitch
          v-if="mine"
          :card="card"
          :player="player"
          :playerNum="i + 1"
          class="mx-auto"
        ></SeenToggleSwitch>
      </div>
    </td>
  </tr>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import CardRowHeader from "./CardRowHeader.vue";
import TrackerButton from "./TrackerButton.vue";
import SeenToggleSwitch from "./SeenToggleSwitch.vue";

export default {
  props: ["card"],
  components: {
    CardRowHeader,
    TrackerButton,
    SeenToggleSwitch,
  },
  computed: {
    ...mapState(["cards", "players"]),
    ...mapGetters(["nPlayers"]),
    mine() {
      return this.cards[this.card].mine;
    },
  },
  methods: {
    toggleMine() {
      this.mine = !this.mine;
    },
  },
};
</script>
