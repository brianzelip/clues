<template>
  <th @click="update()" :class="_state" scope="row">
    {{ item }}
  </th>
</template>

<style scoped>
th {
  padding-left: 1rem;
}
</style>

<script>
export default {
  props: ["item"],
  data() {
    return {
      state: 0,
    };
  },
  computed: {
    _state() {
      return this.state == 0
        ? ""
        : this.state == 1
        ? "strike"
        : this.state == 2
        ? "circle"
        : "";
    },
  },
  methods: {
    update() {
      if (this.state < 2) {
        this.state++;
      } else {
        this.state = 0;
      }
    },
  },
};
</script>
