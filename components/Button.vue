<template>
  <input @click="update" type="button" :value="_state" />
</template>

<script>
export default {
  props: ["person", "weapon", "room"],
  data() {
    return {
      // 0 - don't know anything
      // 1 - maybe
      // 2 - confirm not has card
      // 3 - confirm has card
      state: 0,
    };
  },
  methods: {
    update() {
      if (this.state < 3) {
        this.state++;
      } else {
        this.state = 0;
      }
    },
  },
  computed: {
    _state() {
      return this.state == 0
        ? " "
        : this.state == 1
        ? "?"
        : this.state == 2
        ? "X"
        : this.state == 3
        ? "★"
        : " ";
    },
  },
};
</script>

<style scoped>
input {
  position: relative;
  width: 3rem;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid;
  border-radius: 2px;
  line-height: 24px;
  appearance: none;
}
input:active {
  top: 1px;
}
.page.light input {
  color: var(--black);
  border-color: var(--black);
  background-color: #ddd;
}
.page.dark input {
  color: var(--white);
  border-color: var(--white);
  background-color: rgb(34, 34, 34);
}
</style>
