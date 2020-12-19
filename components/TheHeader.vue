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
    <details>
      <summary>Help</summary>
      <ol class="list-reset pt2 pl2">
        <li>Click player name to edit.</li>
        <li>Click + to add player.</li>
        <li>Click x to remove player.</li>
        <li>
          Click player card buttons to cycle through 4 states: unknown (<span
            class="italic"
            >empty</span
          >), maybe (?), does not have card (X), has card (★).
        </li>
        <li>
          Click item names to cross them off (not it) or circle them (it).
        </li>
      </ol>
      <p class="m0 mb2"></p>
      <p class="m0"></p>
    </details>
  </header>
</template>

<script>
export default {
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
  color: green;
  box-shadow: 0px 0px 0px 3px;
  outline: currentcolor none medium;
}
svg {
  display: block;
  width: 2rem;
}
li {
  margin-bottom: 1rem;
}
li:last-of-type {
  margin-bottom: 0;
}
</style>
