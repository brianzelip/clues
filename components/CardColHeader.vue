<template>
  <th scope="col" class="v-middle">
    <section class="card-wrapper">
      <h2 class="m0 mr-auto h5 regular">Card</h2>
      <span class="h5 regular" v-if="numPlayers > 0">mine</span>
      <AddPlayerBtn
        v-if="numPlayers == 0"
        v-on:add-player="addPlayer"
        :style="{ paddingTop: '10px', paddingBottom: '10px' }"
      ></AddPlayerBtn>
    </section>
  </th>
</template>

<style scoped>
.card-wrapper {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: calc(0.5rem + 2px);
  padding-left: calc(0.5rem + 2px);
  z-index: 10;
}

.card-wrapper {
  position: relative;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
}

span {
  appearance: none;
  color: inherit;
  background-color: inherit;
  border: none;
  text-align: center;
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
