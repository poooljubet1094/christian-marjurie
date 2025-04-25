<script setup lang="ts">
import NavMenu from './components/NavMenu.vue'
import { ref, onMounted } from 'vue'
import { useHead } from '@unhead/vue'

const audioPlayer = ref<HTMLAudioElement | null>(null)

const playAudio = () => {
  if (audioPlayer.value) {
    audioPlayer.value.play()
  }
}

onMounted(() => {
  setInterval(() => playAudio(), 3000);
})

useHead({
  title: 'Christian & Marjurie',
  meta: [
    {
      name: 'ogTitle',
      content: 'Christian & Marjurie Wedding Website',
      property: 'og:title'
    },
    {
      name: 'ogDescription',
      content: 'We invite you to share with us a celebration of friendship, love, and commitment in the sacrament of holy matrimony.',
      property: 'og:description'
    },
    {
      name: 'ogImage',
      content: 'https://christian-marjurie.com/assets/image3-D2xRjI_o.jpeg',
      property: 'og:image'
    },
    {
      name: 'ogUrl',
      content: 'https://christian-marjurie.com/',
      property: 'og:url'
    },
    {
      name: 'ogType',
      content: 'website',
      property: 'og:type'
    },
    {
      name: 'ogAuthor',
      content: 'PJ Calibuso',
      property: 'og:author'
    }
  ]
})

</script>

<template>
  <div @scroll.passive="playAudio()">
    <div>
      <NavMenu />
    </div>
    <div class="w-full max-w-7xl flex flex-col justify-center items-center mx-auto py-8" style="color: #a74d0f">
      <router-view></router-view>
    </div>
    <div class="w-full flex justify-center items-center mb-8">
      <audio ref="audioPlayer" controls autoplay loop>
        <source src="./assets/background-sound.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div>
  </div>
</template>

<style lang="css" scoped>
</style>
