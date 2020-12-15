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
      // 2 - has card
      state: 0,
    };
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
  computed: {
    _state() {
      return this.state == 0
        ? " "
        : this.state == 1
        ? "?"
        : this.state == 2
        ? "★"
        : " ";
    },
    _class() {
      return this.person != undefined
        ? `bg-${this.person.split(" ")[1].toLowerCase()}`
        : this.weapon != undefined
        ? this.weapon.toLowerCase()
        : this.room != undefined
        ? this.room.split(" ")[0].toLowerCase()
        : "";
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid var(--black);
  border-radius: 2px;
  line-height: 24px;
  appearance: none;
}
</style>
