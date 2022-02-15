<template>
  <header>
    <div class="container d-flex align-items-center justify-content-between">
      <Logo />
      <Search @input-Search-Text="inputSearch" />
    </div>
  </header>
</template>

<script>
import Logo from "./Logo.vue";
import Search from "./Search.vue";
export default {
  name: "Header",
  components: { Logo, Search },
  methods: {
    inputSearch(term) {
      this.$emit("input-Search-Text", term);
    },
  },
};
</script>

<style>
</style>