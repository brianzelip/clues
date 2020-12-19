<template>
  <section>
    <input
      :class="{ mlauto: index == numPlayers - 1 }"
      type="text"
      size="4"
      v-model="player"
      @input="updatePlayer()"
    />
    <RemovePlayerBtn
      :player="player"
      v-on:remove-player="removePlayer()"
    ></RemovePlayerBtn>
    <AddPlayerBtn
      v-if="index == numPlayers - 1"
      v-on:add-player="addPlayer"
    ></AddPlayerBtn>
  </section>
</template>

<script>
import RemovePlayerBtn from "./RemovePlayerBtn.vue";
import AddPlayerBtn from "./AddPlayerBtn.vue";

export default {
  props: ["player", "numPlayers", "index"],
  components: { RemovePlayerBtn, AddPlayerBtn },
  methods: {
    updatePlayer() {
      this.$emit("update-player", {
        player: this.player,
        index: this.index,
      });
    },
    addPlayer() {
      this.$emit("add-player");
    },
    removePlayer() {
      this.$emit("remove-player", this.index);
    },
  },
};
</script>

<style scoped>
section {
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 10;
}

input {
  appearance: none;
  color: inherit;
  background-color: inherit;
  border: none;
  text-align: center;
}
</style>
