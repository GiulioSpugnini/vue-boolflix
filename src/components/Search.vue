<template>
  <div class="col-3">
    <input
      @keyup.enter="inputSearch"
      v-model.trim="term"
      type="text"
      placeholder="Cerca.."
    />
    <button @click="inputSearch">Cerca</button>
  </div>
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
<style scoped lang='scss'>
</style>
