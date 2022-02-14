<template>
  <li>
    <input
      @keyup="inputSearch"
      v-model="query"
      type="text"
      placeholder="Cerca.."
    />
    <button>Cerca</button>
  </li>
</template>

<script>
export default {
  name: "Search",
  props: ["movies", "query"],
  methods: {
    inputSearch() {
      this.$emit("input-Search-Text", this.query);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
