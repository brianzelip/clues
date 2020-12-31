<template>
  <tr>
    <CardRowHeader
      :cardSliceIndex="cardSliceIndex"
      :card="card"
      :nPlayers="nPlayers"
      v-on:toggle-mine="toggleMine"
    ></CardRowHeader>
    <td v-for="n in nPlayers" :key="`${card}-${n}`">
      <div class="flex flex-center">
        <TrackerButton></TrackerButton>
        <SeenToggleSwitch
          v-if="mine"
          :card="card"
          :playerNum="n"
          class="mx-auto"
        ></SeenToggleSwitch>
      </div>
    </td>
  </tr>
</template>

<script>
import CardRowHeader from "./CardRowHeader.vue";
import TrackerButton from "./TrackerButton.vue";
import SeenToggleSwitch from "./SeenToggleSwitch.vue";

export default {
  props: ["card", "nPlayers", "cardSliceIndex"],
  components: {
    CardRowHeader,
    TrackerButton,
    SeenToggleSwitch,
  },
  data() {
    return {
      mine: false,
    };
  },
  methods: {
    toggleMine() {
      this.mine = !this.mine;
    },
  },
};
</script>
