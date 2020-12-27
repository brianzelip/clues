<template>
  <header class="py3">
    <section class="flex mb2">
      <h1 class="m0">Clue clues 🔎</h1>
      <button @click="toggleColor" title="Dark/light mode">
        <svg viewBox="0 0 32 32" fill="currentcolor">
          <circle
            cx="16"
            cy="16"
            r="14"
            fill="none"
            stroke="currentcolor"
            stroke-width="4"
          ></circle>
          <path
            d="
          M 16 0
          A 16 16 0 0 0 16 32
          z
        "
          ></path>
        </svg>
      </button>
    </section>
    <TheHelpDetails></TheHelpDetails>
  </header>
</template>

<script>
import TheHelpDetails from "./TheHelpDetails.vue";

export default {
  components: { TheHelpDetails },
  data() {
    return {
      dark: false,
    };
  },
  methods: {
    toggleColor() {
      this.$emit("toggle-color", this.dark);
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  display: flex;
  margin: 0px;
  padding: 4px;
  width: 2rem;
  height: 2rem;
  border: 0px none;
  border-radius: 9999px;
  appearance: none;
  background-color: transparent;
  color: inherit;
}
button:hover {
  box-shadow: 0px 0px 0px 3px;
}
svg {
  display: block;
  width: 2rem;
}
</style>
