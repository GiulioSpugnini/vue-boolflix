<template>
  <div>
    <li v-for="(movie, index) in moviesSelected" :key="movie.id || index">
      <h2>{{ movie.title || movie.name }}</h2>
      <figure>
        <img :src="`http://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="">
      </figure>
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
      <h6>Rating: {{ Math.ceil(movie.vote_average)/2 }}</h6>
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