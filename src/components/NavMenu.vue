<script setup lang="ts">
</script>

<template>
    <div style="background-color: #a74d0f;" class="h-auto w-full px-8 lg:px-32 py-4 lg:py-8 shadow-2xl flex justify-center items-center">
        <div class="max-w-7xl flex flex-wrap justify-center lg:justify-between w-full items-center">
            <div class="text-gray-200 text-4xl lg:text-5xl text-center tracking-wider">Christian & Marjurie</div>
            <div class="flex flex-wrap gap-x-4 gap-y-2 lg:space-y-0 justify-between text-gray-200 text-sm lg:text-md underline mt-6 lg:mt-0 tracking-wider font-josefin-san uppercase">
                <router-link to="/" class="py-2">Home</router-link>
                <router-link to="/venue" class="py-2">Venue</router-link>
                <router-link to="/programme" class="py-2">Programme</router-link>
                <router-link to="/entourage" class="py-2">Entourage</router-link>
                <router-link to="/our-story" class="py-2">Our Story</router-link>
                <router-link to="/photos" class="py-2">Photos</router-link>
                <router-link to="/rsvp" class="px-4 bg-amber-900 rounded-2xl py-2">RSVP</router-link>
            </div>
        </div>
        
    </div>
</template>