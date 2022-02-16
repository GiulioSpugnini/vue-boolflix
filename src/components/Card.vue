<template>
  <figure
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    v-bind:style="{ backgroundImage: 'url(' + postSrc + ')' }"
  >
    <div class="w-100 h-100" v-if="isHover" :class="{ hovering: isHover }">
      <ul class="container col-12 text-light h-100">
        <li
          class="
            d-flex
            flex-column flex-wrap
            text-start
            h-100
            justify-content-center
          "
        >
          <h4 class="col-4 w-100">Titolo: {{ item.title || item.name }}</h4>
          <h4 class="col-4 w-100">
            Titolo originale: {{ item.original_title || item.original_name }}
          </h4>
          <div class="col-4 w-100 h6 fs-5">
            Lingua: <img v-if="hasFlag" :src="flagSrc" alt="" />
            <p v-else>{{ item.original_language }}</p>
          </div>
          <h4 class="col-4 w-100">
            Voto:
            <i
              v-for="(vote, index) in 5"
              :key="index"
              class="fa-star"
              :class="index < setStar ? 'fa-solid' : 'fa-regular'"
            ></i>
          </h4>
          <h5>Overview: {{ item.overview }}</h5>
        </li>
      </ul>
    </div>
  </figure>
</template>

<script>
export default {
  name: "Card",
  props: ["item"],
  data() {
    return {
      flags: ["it", "en"],
      isHover: false,
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
      if (!this.item.poster_path)
        return `https://www.altavod.com/assets/images/poster-placeholder.png`;
      return `http://image.tmdb.org/t/p/w342/${this.item.poster_path}`;
    },
    setStar() {
      return Math.ceil(this.item.vote_average / 2);
    },
  },
};
</script>

<style>
</style>