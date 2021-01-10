<template>
  <tr>
    <CardRowHeader :card="card"></CardRowHeader>
    <td v-for="(n, i) in nPlayers" :key="`${card}-${i}`" class="v-middle">
      <div class="flex flex-center">
        <TrackerButton :card="card" :index="i" v-if="!mine"></TrackerButton>
        <SeenToggleSwitch
          :card="card"
          :index="i"
          v-if="mine"
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
    ...mapState(["cards"]),
    ...mapGetters(["nPlayers"]),
    mine() {
      return this.cards[this.card].mine;
    },
  },
};
</script>
