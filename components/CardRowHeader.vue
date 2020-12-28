<template>
  <th scope="row">
    <span @click="update()" :class="_spanState">{{
      isPerson ? lastName(card) : card
    }}</span>
    <label v-show="numPlayers > 0" :for="`my-card-${card}`">
      <input @input="toggleMine" type="checkbox" :id="`my-card-${card}`" />
    </label>
  </th>
</template>

<script>
export default {
  props: ["card", "numPlayers"],
  data() {
    return {
      spanState: 0,
      people: [
        "Mr. Green",
        "Colonel Mustard",
        "Mrs. Peacock",
        "Professor Plum",
        "Miss Scarlet",
        "Mrs. White",
      ],
    };
  },
  computed: {
    _spanState() {
      return this.spanState == 0
        ? ""
        : this.spanState == 1
        ? "strike"
        : this.spanState == 2
        ? "circle"
        : "";
    },
    isPerson() {
      return this.people.includes(this.card);
    },
  },
  methods: {
    update() {
      if (this.spanState < 2) {
        this.spanState++;
      } else {
        this.spanState = 0;
      }
    },
    firstName(name) {
      return name.split(" ")[0];
    },
    lastName(name) {
      return name.split(" ")[1];
    },
    toggleMine() {
      this.$emit("toggle-mine");
    },
  },
};
</script>

<style scoped>
th[scope="row"] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 0;
}
span {
  display: inline-block;
  border: 2px solid transparent;
  padding-left: calc(0.25rem - 2px);
  padding-right: calc(0.25rem - 2px);
  border-radius: 50%;
}
@media only screen and (min-width: 960px) {
  span {
    padding-left: calc(0.5rem - 2px);
    padding-right: calc(0.5rem - 2px);
  }
}
label {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 400;
}
</style>
