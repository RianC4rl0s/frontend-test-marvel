<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import Navbar from '../components/Navbar.vue'
import CharacterCard from '../components/CharacterCart.vue'
import Breadcrumb from "../components/Breadcrumb.vue"
</script>

<template>
  <main style="height: 100%;">
    <Navbar activate="Home" />

    <div class="container" style="height: 70%">
      <Breadcrumb start="Home" :pages="[]" />
      <!-- Content here -->
      <div class="center-container">
        <img src="../assets/img/Logo - gray.svg">
        <p class="home-title">Welcome to Marvel's directory</p>
      </div>
    </div>
  </main>
</template>
<style>
.center-container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.home-title{
  text-align: center;
  font-size: 32px;
  margin-top: 24px;
  font-weight: 700;
}
</style>
