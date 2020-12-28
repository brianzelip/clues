<template>
  <th scope="col" class="v-middle">
    <section class="card-wrapper">
      <span>Card</span>
      <span v-if="numPlayers > 0">mine</span>
      <AddPlayerBtn
        v-if="numPlayers == 0"
        v-on:add-player="addPlayer"
      ></AddPlayerBtn>
    </section>
  </th>
</template>

<style scoped>
.card-wrapper {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
}

span {
  font-size: inherit;
  font-weight: 400;
  color: inherit;
  background-color: inherit;
}
</style>

<script>
import AddPlayerBtn from "./AddPlayerBtn.vue";

export default {
  props: ["numPlayers"],
  components: { AddPlayerBtn },
  methods: {
    addPlayer() {
      this.$emit("add-player");
    },
  },
};
</script>
