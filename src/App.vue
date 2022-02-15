<template>
  <div>
    <Header @input-Search-Text="search" />
    <main class="text-center d-flex flex-wrap">
      <h2 class="col-12">MOVIES</h2>

      <Card
        class="col-4"
        v-for="(movie, index) in movies"
        :key="movie.id || index"
        :item="movie"
      />

      <h2 class="col-12">SERIES</h2>
      <Card
        class="col-4"
        v-for="(serie, index) in series"
        :key="serie.id || index"
        :item="serie"
      />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import axios from "axios";
export default {
  name: "App",
  components: { Header, Card },
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
// .card{
//   background-image: url('`http://image.tmdb.org/t/p/w342/${this.item.poster_path}`');
// }
</style>
