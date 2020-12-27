<template>
  <th scope="row">
    <span @click="update()" :class="_spanState">{{
      isPerson ? lastName(card) : card
    }}</span>
    <label :for="`my-card-${card}`">
      <input @input="toggleMine" type="checkbox" :id="`my-card-${card}`" />
    </label>
  </th>
</template>

<script>
export default {
  props: ["card"],
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
