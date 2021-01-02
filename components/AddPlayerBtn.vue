<template>
  <button class="add" @click="add" type="button" title="Add new player">
    <svg viewBox="0 0 384 512">
      <path
        d="M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"
      />
    </svg>
  </button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["nPlayers"]),
  },
  methods: {
    ...mapActions(["addNewPlayer"]),
    add() {
      this.addNewPlayer({
        name: `Player${this.nPlayers + 1}`,
        index: this.nPlayers,
      });
    },
  },
};
</script>
