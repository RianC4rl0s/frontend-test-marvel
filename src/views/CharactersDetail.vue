<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import Navbar from '../components/Navbar.vue'
import CharacterCard from '../components/CharacterCart.vue'
import Breadcrumb from "../components/Breadcrumb.vue"
</script>

<template>
  <main>
    <Navbar activate="Characters" />

    <div class="container">
      <Breadcrumb start="Characteres" :pages="[this.character.name]" />
      <!-- Content here -->
      <!-- <div>User {{ $route.params.id }}</div> -->
      <div v-if="character">
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <img class="character-img" :src="`${character.thumbnail.path}.${character.thumbnail.extension}`">
          </div>
          <div class="col-lg-8 col-sm-12 details">
            <h3 v-if="character.name" class="character-title">
              {{ character.name }}
            </h3>
            <p>
              {{ character.description }}
            </p>

            <h3 class="character-title">
              Comics
            </h3>
            <div class="d-flex flex-row flex-wrap gap-3" v-if="characteresComimics.length">
              <div v-for="comic in characteresComimics" :key="comic.id">
                <ComicCard :id=comic.id :name="comic.title"
                  :picture="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" :pages="comic.pageCount" />

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </main>
</template>
<script>
import { BASE_URL } from "../api"
import { api_key } from "../api"
import ComicCard from '../components/ComicCard.vue'
export default {
  name: "characters",
  data() {
    return {
      charId: 1017100,
      character: null,
      characteresComimics: [],
    };
  },
  methods: {
    getCharacters() {
      fetch(BASE_URL + `/v1/public/characters/${this.$route.params.id}?ts=1&apikey=931f70690b1d536bb5dfc89e30720430&hash=33f7dac4c177167e76f1ccf28cfe91be`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json.data)
          this.character = json.data.results[0];
        });
    },
    getCharactersComics() {
      fetch(BASE_URL + `/v1/public/characters/${this.$route.params.id}/comics?ts=1&apikey=931f70690b1d536bb5dfc89e30720430&hash=33f7dac4c177167e76f1ccf28cfe91be`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json.data)
          this.characteresComimics = json.data.results;
        });
    },
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.charId = toParams.id;
      }
    )
    this.getCharacters();
    this.getCharactersComics();
  },
};
</script>
<style>
.character-img {
  width: 330px;
}

.character-title {
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 24px;
}
.details{
  margin: 0px;
  padding: 0px 24px 0px 24px;
}
</style>