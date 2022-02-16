<template>
  <figure
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    v-bind:style="{ backgroundImage: 'url(' + postSrc + ')' }"
  >
    <div class="w-100 h-100" v-if="isHover" :class="{ hovering: isHover }">
      <ul class="container text-light">
        <li class="text-left">
          <h6>Titolo:{{ item.title || item.name }}</h6>
          <h6>
            Titolo originale:{{ item.original_title || item.original_name }}
          </h6>
          <div>
            Lingua:<img v-if="hasFlag" :src="flagSrc" alt="" />
            <p v-else>{{ item.original_language }}</p>
          </div>
          <h6>
            Voto:
            <i
              v-for="(vote, index) in 5"
              :key="index"
              class="fa-star"
              :class="index < setStar ? 'fa-solid' : 'fa-regular'"
            ></i>
          </h6>
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