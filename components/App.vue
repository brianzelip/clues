<template>
  <div class="container px2 pb2">
    <TheHeader></TheHeader>

    <main>
      <TheTable></TheTable>
    </main>

    <TheFooter></TheFooter>
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
};
</script>

<style>
main {
  position: relative;
  max-width: 100%;
}
</style>
