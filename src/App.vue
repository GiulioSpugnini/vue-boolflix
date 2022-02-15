<template>
  <ul>
    <Search :query="query" @input-Search-Text="setSelectedQuery" />
    <Card :moviesSelected="moviesSelected" />
  </ul>
</template>

<script>
import Search from "./components/Search.vue";
import Card from "./components/Card.vue";
import axios from "axios";
export default {
  components: { Search, Card },
  name: "App",
  data() {
    return {
      moviesSelected: [],
      api_key: "dfe0b56363d3d8cf312014e87a1dc974",
      query: "",
    };
  },
  computed: {
    searchFiltered() {
      return this.search();
    },
  },
  methods: {
    search() {
      const config = {
        params: {
          api_key: this.api_key,
          query: this.query,
        },
      };

      axios
        .get(`https://api.themoviedb.org/3/search/multi`, config)
        .then((res) => {
          this.moviesSelected = res.data.results;
        });
    },
    setSelectedQuery(query) {
      this.query = query;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
