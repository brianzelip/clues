<template>
  <th scope="row">
    <span @click="update()" :class="_state">{{ item }}</span>
    <label :for="`my-card-${item}`">
      <input type="checkbox" :id="`my-card-${item}`" />
    </label>
  </th>
</template>

<style scoped>
th {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
span {
  display: inline-block;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  /* bigger padding on bigger viewport */
  border: 2px solid transparent;
  border-radius: 50%;
}
label {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 0.5rem;
  font-size: 0.875rem;
  font-weight: 400;
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
