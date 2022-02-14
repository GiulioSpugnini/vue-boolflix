<template>
  <div>
    <li v-for="(movie, index) in moviesSelected" :key="movie.id || index">
      <h2>{{ movie.title || movie.name }}</h2>
      <h3>{{ movie.original_title || movie.original_name }}</h3>
      <div>
        <p>Language:</p>
        {{ movie.original_language
        }}<img
          v-if="
            movie.original_language == 'it' || movie.original_language == 'en'
          "
          :src="require(`../assets/img/${movie.original_language}.png`)"
          alt=""
        />
      </div>
      <h6>Rating: {{ movie.vote_average }}</h6>
    </li>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["moviesSelected"],
};
</script>

<style>
</style>