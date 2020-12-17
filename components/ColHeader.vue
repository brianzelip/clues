<template>
  <section>
    <input type="text" maxlength="3" size="3" v-model="player" />
    <button
      v-if="numPlayers > 1 && playersIndex == numPlayers - 1"
      class="remove"
      @click="removePlayer()"
      type="button"
      title="Remove player"
    >
      <svg class="rotate" viewBox="0 0 384 512">
        <path
          d="M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"
        />
      </svg>
    </button>
    <button
      v-if="playersIndex == numPlayers - 1"
      class="add"
      @click="addPlayer()"
      type="button"
      title="Add player"
    >
      <svg viewBox="0 0 384 512">
        <path
          d="M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"
        />
      </svg>
    </button>
  </section>
</template>

<script>
export default {
  props: ["player", "numPlayers", "playersIndex"],
  methods: {
    addPlayer() {
      this.$emit("add-player");
    },
    removePlayer() {
      this.$emit("remove-player", this.player);
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
  background-color: inherit;
  border: none;
  text-align: center;
}
button {
  position: relative;
  display: flex;
  align-items: center;
  appearance: none;
  background-color: inherit;
  font-size: 1.25rem;
  color: var(--black);
  border: none;
}
button:active {
  top: 1px;
}
button.add {
  flex-grow: 1;
  display: flex;
  justify-content: right;
}
svg {
  width: 0.75rem;
}
svg.rotate {
  transform: rotate(45deg);
}
</style>
