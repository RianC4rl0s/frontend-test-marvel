<script setup>
import Navbar from '../components/Navbar.vue'
import EventCard from '../components/EventCard.vue'
import Breadcrumb from "../components/Breadcrumb.vue"
</script>

<template>
  <main>
    <Navbar activate="Events" />

    <div class="container">
      <Breadcrumb start="Events" :pages="[]" />
      <!-- Content here -->
      <div class="d-flex flex-row flex-wrap gap-3" v-if="events.length">
        <div  v-for="event in events" :key="event.id">
          <EventCard :id=event.id :title="event.title" :picture="`${event.thumbnail.path}.${event.thumbnail.extension}`" :description="event.description" :date="event.start" />

        </div>
      </div>

    </div>
  </main>
</template>
<script>
import { BASE_URL } from "../api"
import { api_key } from "../api"
import EventCard from '../components/EventCard.vue'
export default {
  name: "events",
  data() {
    return {
      events: [],
    };
  },
  methods: {
    getEvents() {
      fetch(BASE_URL + `/v1/public/events?ts=1&apikey=931f70690b1d536bb5dfc89e30720430&hash=33f7dac4c177167e76f1ccf28cfe91be`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json.data)
          this.events = json.data.results;
        });
    },
  },
  created() {
    this.getEvents();
  },
};
</script>