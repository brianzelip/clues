<template>
  <thead>
    <tr>
      <CardColHeader></CardColHeader>
      <PlayerColHeader
        v-for="(p, i) in players"
        :player="p"
        :index="i"
        :key="i"
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
