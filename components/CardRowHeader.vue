<template>
  <th scope="row" class="regular">
    <section>
      <span @click="update()" :class="_spanState">{{ card }}</span>
      <label v-show="nPlayers > 0" :for="`my-card-${slicedCard}`">
        <input
          @input="toggleMine"
          type="checkbox"
          :id="`my-card-${slicedCard}`"
        />
      </label>
    </section>
  </th>
</template>

<script>
export default {
  props: ["card", "nPlayers", "cardSliceIndex"],
  data() {
    return {
      spanState: 0,
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
    slicedCard() {
      return this.card.split(" ").slice()[Number(this.cardSliceIndex)];
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
    toggleMine() {
      this.$emit("toggle-mine");
    },
  },
};
</script>

<style scoped>
section {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 0;
}
span {
  display: inline-block;
  margin-left: -4px;
  margin-right: -4px;
  padding-right: 4px;
  padding-left: 4px;
  border: 2px solid transparent;
  border-radius: 50%;
}

label {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 400;
}
</style>
