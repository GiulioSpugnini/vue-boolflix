<template>
  <div>
      <li v-for="(movie,index) in moviesSelected" :key="movie.id || index">
       <h2>{{movie.title}}</h2>
       <h3>{{movie.original_title}}</h3>
       <div><p>Language:</p>{{movie.original_language}}<img :src="`../assets/img/${movie.original_language}.png`" alt=""></div>
       <h6>Rating: {{movie.vote_average}}</h6>
      </li>
  </div>
</template>

<script>
export default {
name:"Card",
props:["moviesSelected"],

}
</script>

<style>

</style>