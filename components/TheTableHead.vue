<template>
  <thead>
    <tr>
      <CardColHeader
        :nPlayers="nPlayers"
        v-on:add-player="addPlayer"
      ></CardColHeader>
      <PlayerColHeader
        :nPlayers="nPlayers"
        v-for="(p, i) in players"
        :player="p"
        :index="i"
        :key="i"
        v-on:add-player="addPlayer"
        v-on:remove-player="removePlayer"
        v-on:update-player="updatePlayer"
      ></PlayerColHeader>
    </tr>
  </thead>
</template>

<script>
import CardColHeader from "./CardColHeader.vue";
import PlayerColHeader from "./PlayerColHeader.vue";

export default {
  props: ["players", "nPlayers"],
  components: { CardColHeader, PlayerColHeader },
  methods: {
    addPlayer() {
      this.$emit("add-player");
    },
    updatePlayer(playerObj) {
      this.$emit("update-player", playerObj);
    },
    removePlayer(index) {
      this.$emit("remove-player", index);
    },
  },
};
</script>
