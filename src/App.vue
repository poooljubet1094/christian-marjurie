<script setup lang="ts">
import NavMenu from './components/NavMenu.vue'
import { ref, onMounted } from 'vue'

const audioPlayer = ref<HTMLAudioElement | null>(null)

console.log(audioPlayer.value);

const playAudio = () => {
  if (audioPlayer.value) {
    audioPlayer.value.play()
  }
}

onMounted(() => {
  if (audioPlayer.value) {
    audioPlayer.value.loop = true // Loop the audio
    playAudio()
  }
})

</script>

<template>
  <NavMenu />
  <div class="w-full max-w-7xl flex flex-col justify-center items-center mx-auto py-8" style="color: #a74d0f">
    <router-view></router-view>
  </div>
  <div class="w-full flex justify-center items-center mb-8">
    <audio ref="audioPlayer" controls autoplay>
      <source src="./assets/background-sound.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<style lang="css" scoped>
</style>
