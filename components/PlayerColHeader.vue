<template>
  <th scope="col" class="v-middle">
    <section>
      <input
        :class="{ 'ml-auto': index == nPlayers - 1 }"
        type="text"
        size="4"
        v-model="player"
        @input="updatePlayer"
      />
      <RemovePlayerBtn
        :player="player"
        :class="{ 'mr-auto': index == nPlayers - 1 }"
        v-on:remove-player="removePlayer"
      ></RemovePlayerBtn>
      <AddPlayerBtn
        v-if="index == nPlayers - 1"
        v-on:add-player="addPlayer"
      ></AddPlayerBtn>
    </section>
  </th>
</template>

<script>
import RemovePlayerBtn from "./RemovePlayerBtn.vue";
import AddPlayerBtn from "./AddPlayerBtn.vue";

export default {
  props: ["player", "nPlayers", "index"],
  components: { RemovePlayerBtn, AddPlayerBtn },
  methods: {
    addPlayer() {
      this.$emit("add-player");
    },
    updatePlayer() {
      this.$emit("update-player", {
        player: this.player,
        index: this.index,
      });
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
  height: auto;
  padding: 0;
  border: none;
  color: inherit;
  background-color: inherit;
  text-align: center;
  font-size: inherit;
}
</style>
