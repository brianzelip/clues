<template>
  <div class="page" :class="{ dark: darkMode, light: !darkMode }">
    <div class="container px2 pb2">
      <TheHeader v-on:toggle-color="toggleColor"></TheHeader>

      <main>
        <TheTable></TheTable>
      </main>

      <TheFooter></TheFooter>
    </div>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheTable from "./TheTable.vue";
import TheFooter from "./TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheTable,
    TheFooter,
  },
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleColor() {
      this.darkMode = !this.darkMode;
    },
  },
};
</script>
