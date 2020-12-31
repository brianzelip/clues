<template>
  <section>
    <input
      class="hidden"
      v-model="seen"
      type="checkbox"
      :id="`${card}-seen-player-${playerNum}`"
      :name="`${card}-seen-player-${playerNum}`"
    />
    <label class="flex flex-center" :for="`${card}-seen-player-${playerNum}`">
      <Unseen class="unseen" v-show="!seen"></Unseen>
      <Seen v-show="seen" class="seen"></Seen>
    </label>
  </section>
</template>

<script>
import Seen from "./Seen.vue";
import Unseen from "./Unseen.vue";

export default {
  props: ["card", "playerNum"],
  components: { Seen, Unseen },
  data() {
    return { seen: false };
  },
};
</script>

<style scoped>
input.hidden {
  position: absolute;
  top: -9999px;
  left: -9999px;
  visibility: hidden;
  opacity: 0;
}

svg {
  width: 25px;
  height: 20px;
}
</style>
