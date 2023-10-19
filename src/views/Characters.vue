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
      <Breadcrumb start="Characteres" :pages="[]" />
      <!-- Content here -->
      <div class="d-flex flex-row flex-wrap gap-3" v-if="characters.length">
        <div  v-for="character in characters" :key="character.id">
          <CharacterCard :id=character.id :name="character.name" :picture="`${character.thumbnail.path}.${character.thumbnail.extension}`" />

        </div>
      </div>

    </div>
  </main>
</template>
<script>
import { BASE_URL } from "../api"
import { api_key } from "../api"
export default {
  name: "characters",
  data() {
    return {
      characters: [],
    };
  },
  methods: {
    getCharacters() {
      fetch(BASE_URL + `/v1/public/characters?ts=1&apikey=931f70690b1d536bb5dfc89e30720430&hash=33f7dac4c177167e76f1ccf28cfe91be`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json.data)
          this.characters = json.data.results;
        });
    },
  },
  created() {
    this.getCharacters();
  },
};

</script>
<style>
</style>