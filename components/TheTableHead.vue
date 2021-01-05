<template>
  <thead>
    <tr>
      <CardColHeader></CardColHeader>
      <PlayerColHeader
        v-for="(player, i) in players"
        :index="i"
        :key="`player-${i}`"
      ></PlayerColHeader>
    </tr>
  </thead>
</template>

<script>
import { mapState } from "vuex";

import CardColHeader from "./CardColHeader.vue";
import PlayerColHeader from "./PlayerColHeader.vue";

export default {
  components: { CardColHeader, PlayerColHeader },
  computed: {
    ...mapState(["players"]),
  },
};
</script>
