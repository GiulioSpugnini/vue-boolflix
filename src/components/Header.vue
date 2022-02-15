<template>
  <header class="d-flex align-items-center">
    <Search @input-Search-Text="$emit(inputSearch)" />
  </header>
</template>

<script>
import Search from "./Search.vue";
export default {
  name: "Header",
  components: { Search },
  methods: {
    inputSearch() {
      this.$emit("input-Search-Text", this.term);
    },
  },
};
</script>

<style>
</style>