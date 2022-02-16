<template>
  <figure v-bind:style="{ backgroundImage: 'url(' + postSrc + ')' }">
    <ul class="container text-light">
      <li>
        <h2>{{ item.title || item.name }}</h2>

        <h3>{{ item.original_title || item.original_name }}</h3>
        <div>
          <img v-if="hasFlag" :src="flagSrc" alt="" />
          <p v-else>{{ item.original_language }}</p>
        </div>
        <h6>
          Rating: {{setStar}}
          <i v-for="(vote,index) in 5" :key="index" class="fa-star" :class="index<setStar? 'fa-solid':'fa-regular'"></i>
        </h6>
      </li>
    </ul>
  </figure>
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
    hasFlag() {
      return this.flags.includes(this.item.original_language);
    },
    postSrc() {
      return `http://image.tmdb.org/t/p/w342/${this.item.poster_path}`;
    },
    setStar() {
      return Math.ceil(this.item.vote_average/2);
    },
  },
};
</script>

<style>
</style>