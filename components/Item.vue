<template>
  <th @click="strike = !strike" :class="{ strike }" scope="row">
    {{ item }}
  </th>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      strike: false,
    };
  },
};
</script>
