<template>
  <header class="py3">
    <h1 class="mt0 mb2">Clue clues 🔎</h1>
    <details open>
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

<style scoped>
li {
  margin-bottom: 1rem;
}
li:last-of-type {
  margin-bottom: 0;
}
</style>
