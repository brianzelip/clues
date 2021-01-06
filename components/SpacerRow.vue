<template>
  <tr class="spacer">
    <th scope="row"></th>
    <td v-for="n in nPlayers" :key="n"></td>
  </tr>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["nPlayers"]),
  },
};
</script>
