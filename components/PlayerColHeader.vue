<template>
  <th scope="col" class="v-middle">
    <section>
      <input
        :class="{ 'ml-auto': index == nPlayers - 1 }"
        type="text"
        size="4"
        :value="player"
        @input="update"
      />
      <RemovePlayerBtn
        :index="index"
        :player="player"
        :class="{ 'mr-auto': index == nPlayers - 1 }"
      ></RemovePlayerBtn>
      <AddPlayerBtn v-if="index == nPlayers - 1"></AddPlayerBtn>
    </section>
  </th>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

import RemovePlayerBtn from "./RemovePlayerBtn.vue";
import AddPlayerBtn from "./AddPlayerBtn.vue";

export default {
  props: ["index"],
  components: { RemovePlayerBtn, AddPlayerBtn },
  computed: {
    ...mapState({
      player(state) {
        return state.players[this.index].player;
      },
    }),
    ...mapGetters(["nPlayers"]),
  },
  methods: {
    ...mapActions(["updatePlayer"]),
    update(e) {
      this.updatePlayer({ index: this.index, player: e.target.value });
    },
  },
};
</script>

<style scoped>
section {
  position: relative;
  display: flex;
  justify-content: center;
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
