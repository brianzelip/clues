<template>
  <tr class="spacer">
    <th></th>
    <td v-for="n in num" :key="n"></td>
  </tr>
</template>

<script>
export default {
  props: ["num"],
};
</script>
