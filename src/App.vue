<script setup lang="ts">
import HomePage from './components/HomePage.vue'
</script>

<template>
  <div class="main-container">
    <HomePage />
  </div>
  
</template>

<style lang="css" scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("./assets/home-page-background.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
