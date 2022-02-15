<template>
  <li>
    <input v-model.trim="term" type="text" placeholder="Cerca.." />
    <button @click="inputSearch">Cerca</button>
  </li>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      term: "",
    };
  },
  methods: {
    inputSearch() {
      this.$emit("input-Search-Text", this.term);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
