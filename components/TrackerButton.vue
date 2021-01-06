<template>
  <input class="tracker" @click="update" type="button" :value="_state" />
</template>

<script>
export default {
  props: ["card", "player"],
  data() {
    return {
      // 0 - don't know anything
      // 1 - maybe
      // 2 - maybe x2
      // 3 - maybe x3
      // 4 - confirm not has card
      // 5 - confirm has card
      state: 0,
    };
  },
  methods: {
    update() {
      if (this.state < 5) {
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
        ? "? x2"
        : this.state == 3
        ? "? x3"
        : this.state == 4
        ? "X"
        : this.state == 5
        ? "★"
        : " ";
    },
  },
};
</script>

<style scoped>
input.tracker {
  position: relative;
  width: 3rem;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  border: 1px solid;
  border-radius: 2px;
  line-height: 21px;
  font-size: inherit;
  color: inherit;
  appearance: none;
}
@media only screen and (min-width: 960px) {
  input.tracker {
    width: 4rem;
    line-height: 24px;
  }
}
input.tracker:active {
  top: 1px;
}
</style>
