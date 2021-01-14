<template>
  <details>
    <summary>Help</summary>
    <ol class="list-reset pt2 pl2 primary">
      <li v-if="!hasStorage">
        ⚠️ Your browser doesn't support
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"
          >local storage</a
        >, so clues will reset if you navigate away or refresh this page.
      </li>
      <li>Click player name to edit.</li>
      <li>Click + to add player.</li>
      <li>Click x to remove player.</li>
      <li>Check the mine box for your cards to track who's seen them.</li>
      <li>Click card names to cross them off (not it) or circle them (it).</li>
      <li>
        Click player card buttons to cycle through 6 states:
        <ol class="mb0 pt1 pl3 secondary">
          <li class="mb0">unknown (<span class="italic">empty</span>)</li>
          <li class="mb0">maybe (?)</li>
          <li class="mb0">maybe x2 (? x2)</li>
          <li class="mb0">maybe x3 (? x3)</li>
          <li class="mb0">does not have card (X)</li>
          <li class="mb0">has card (★)</li>
        </ol>
      </li>
      <li v-if="hasStorage">
        Click <span class="h2">↺</span> to reset clues.
        <i>Data is stored in the browser, not on the server</i>.
      </li>
    </ol>
  </details>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["hasStorage"]),
  },
};
</script>

<style scoped>
.primary > li {
  margin-bottom: 1rem;
}
.primary > li:last-of-type {
  margin-bottom: 0;
}
</style>
