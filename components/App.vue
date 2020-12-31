<template>
  <div class="container px2 pb2">
    <TheHeader></TheHeader>

    <TheTable></TheTable>

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
