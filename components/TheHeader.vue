<template>
  <header class="py3">
    <section class="header-top">
      <div>
        <h1 class="m0">Clue clues 🔎</h1>
        <p class="m0">Figure out whodunnit</p>
      </div>
      <button class="theme" @click="toggleColor" title="Dark/light mode">
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
    <section class="header-bottom">
      <TheHelpDetails></TheHelpDetails>
      <button
        v-if="defaultStateHasChanged"
        class="reset"
        @click="resetClues"
        type="button"
        title="Reset clues"
      >
        <TheResetSVG></TheResetSVG>
      </button>
    </section>
  </header>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

import TheHelpDetails from "./TheHelpDetails.vue";
import TheResetSVG from "./TheResetSVG.vue";

export default {
  components: { TheHelpDetails, TheResetSVG },
  data() {
    return {
      dark: undefined,
    };
  },
  computed: {
    colorMode() {
      return this.dark ? "dark" : "light";
    },
    ...mapState(["storage"]),
    ...mapGetters(["defaultStateHasChanged"]),
  },
  methods: {
    ...mapActions(["resetCardsAndPlayers"]),
    toggleColor() {
      this.dark = !this.dark;
      document.querySelector("body").className = this.colorMode;
    },
    resetClues() {
      this.resetCardsAndPlayers();
    },
  },
  created() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.querySelector("body").className = "dark";
      this.dark = true;
    } else {
      document.querySelector("body").className = "light";
      this.dark = false;
    }
  },
};
</script>

<style scoped>
.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
button.theme {
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
button.theme:hover {
  box-shadow: 0px 0px 0px 3px;
}
button.theme svg {
  display: block;
  width: 2rem;
}

.header-bottom {
  display: flex;
  align-items: flex-start;
}

button.reset {
  position: relative;
  display: flex;
  align-items: center;
  width: 2.25rem;
  margin-left: auto;
  appearance: none;
  background-color: inherit;
  font-size: 1.25rem;
  border: none;
}
</style>
