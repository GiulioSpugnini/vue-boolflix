<template>
  <li>
    <input v-model="newQuery" type="text" placeholder="Cerca.." />
    <button @click="inputSearch">Cerca</button>
  </li>
</template>

<script>
export default {
  name: "Search",
  props: ["query"],
  data() {
    return {
      newQuery: "",
    };
  },
  methods: {
    inputSearch() {
      this.$emit("input-Search-Text", this.newQuery);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
