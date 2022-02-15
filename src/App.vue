<template>
  <ul>
    <Search @input-Search-Text="search" />
    <h2>MOVIES</h2>
    <Card
      v-for="(movie, index) in movies"
      :key="movie.id || index"
      :item="movie"
    />
    <h2>SERIES</h2>
    <Card
      v-for="(serie, index) in series"
      :key="serie.id || index"
      :item="serie"
    />
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
      movies: [],
      series: [],
      baseUri: "https://api.themoviedb.org/3",
      api_key: "dfe0b56363d3d8cf312014e87a1dc974",
      query: "",
    };
  },

  methods: {
    search(term) {
      if (!term) {
        this.movies = [];
        this.series = [];
        return;
      }
      const config = {
        params: {
          api_key: this.api_key,
          query: term,
        },
      };
      this.fetchApi("search/movie", config, "movies");
      this.fetchApi("search/tv", config, "series");
    },
    fetchApi(endpoint, config, target) {
      axios.get(`${this.baseUri}/${endpoint}`, config).then((res) => {
        this[target] = res.data.results;
      });
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
