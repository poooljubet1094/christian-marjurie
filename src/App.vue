<script setup lang="ts">
import HomePage from './components/HomePage.vue'
import NavMenu from './components/NavMenu.vue'
</script>

<template>
  <NavMenu />
  <div class="w-full max-w-7xl flex flex-col justify-center items-center mx-auto py-16">
    <HomePage />
  </div>
  <div class="w-full flex justify-center items-center">
    <audio controls autoplay>
      <source src="./assets/background-sound.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<style lang="css" scoped>
</style>
