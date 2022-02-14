<template>
  <ul>
    <Search :movies="movies" :query="query"  @input-Search-Text="setSelectedQuery"/>
  </ul>
</template>

<script>
import Search from './components/Search.vue';
import axios from 'axios';
export default {
  components: { Search },
  name: 'App',
  data() {
    return{
      movies:[],
      api_key:"dfe0b56363d3d8cf312014e87a1dc974",
      query: "",
    }
  },
  methods:{
    searchMovie(){
      const config={
        params:{
          api_key: this.api_key,
          query: this.query,
          language: 'it-IT',
        },
      }

      axios.get(`https://api.themoviedb.org/3/search/movie`, config).then((res)=>{
        this.movies=res.data.results;
      });
    },
    setSelectedQuery(query){
      this.query=query;
    },
  }
  
}
</script>

<style lang="scss">

</style>
