<template>
  <tr class="spacer">
    <th></th>
    <td v-for="n in nPlayers" :key="n"></td>
  </tr>
</template>

<script>
export default {
  props: ["nPlayers"],
};
</script>
