<script setup>
import Navbar from '../components/Navbar.vue'
import ComicCard from '../components/ComicCard.vue'
import Breadcrumb from "../components/Breadcrumb.vue"
</script>

<template>
  <main>
    <Navbar activate="Comics" />

    <div class="container">
      <Breadcrumb start="Comics" :pages="[]" />
      <!-- Content here -->
      <div class="d-flex flex-row flex-wrap gap-3" v-if="comics.length">
        <div  v-for="comic in comics" :key="comic.id">
          <ComicCard :id=comic.id :name="comic.title" :picture="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" :pages="comic.pageCount" />

        </div>
      </div>

    </div>
  </main>
</template>
<script>
import { BASE_URL } from "../api"
import { api_key } from "../api"
export default {
  name: "comics",
  data() {
    return {
      comics: [],
    };
  },
  methods: {
    getComics() {
      fetch(BASE_URL + `/v1/public/comics?ts=1&apikey=931f70690b1d536bb5dfc89e30720430&hash=33f7dac4c177167e76f1ccf28cfe91be`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json.data)
          this.comics = json.data.results;
        });
    },
  },
  created() {
    this.getComics();
  },
};
</script>