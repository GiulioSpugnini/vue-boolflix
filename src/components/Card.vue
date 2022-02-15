<template>
  <div>
    <li>
      <h2>{{ item.title || item.name }}</h2>
      <figure>
        <img :src="postSrc" alt="" />
      </figure>
      <h3>{{ item.original_title || item.original_name }}</h3>
      <div>
        
        <img
          v-if="hasFlag"
          :src="flagSrc"
          alt=""
        />
        <p v-else>Language:</p>
        {{ item.original_language
        }}
      </div>
      <h6>Rating: {{ Math.ceil(item.vote_average) / 2 }}</h6>
    </li>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["item"],
  data() {
    return {
      flags: ["it", "en"],
    };
  },
  computed: {
    flagSrc() {
      return require(`../assets/img/${this.item.original_language}.png`);
    },
    hasFlag(){
      return this.flags.includes(this.item.original_language);
    },
    postSrc() {
      return `http://image.tmdb.org/t/p/w342/${this.item.poster_path}`;
    },
  },
};
</script>

<style>
</style>