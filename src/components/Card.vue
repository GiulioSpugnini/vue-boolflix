<template>
  <div>
      <li v-for="(movie,index) in moviesSelected" :key="movie.id || index">
       {{movie.title}}
       {{movie.original_title}}
       {{movie.original_language}}
       {{movie.vote_average}}
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