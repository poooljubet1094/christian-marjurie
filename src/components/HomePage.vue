<script setup lang="ts">
function scrollToLeft() {
    const scrollContainer = document.querySelector('.home-scroll');
    if (scrollContainer) {
        scrollContainer.scrollBy({
            left: -scrollContainer.clientWidth,
            behavior: 'smooth'
        });
    }
}

function scrollToRight() {
    const scrollContainer = document.querySelector('.home-scroll');
    if (scrollContainer) {
        scrollContainer.scrollBy({
            left: scrollContainer.clientWidth,
            behavior: 'smooth'
        });
    }
}
</script>

<template>
    <div class="text-center mx-6 tracking-widest w-full max-w-4xl px-6 font-josefin-san">
        <div class="w-full flex justify-center">
            <div class="text-xl uppercase max-w-lg">We invite you to share with us a celebration of friendship, love, and commitment in the sacrament of holy matrimony.</div>
        </div>
        <div class="relative w-full">
            <div class="home-scroll overflow-x-scroll overflow-hidden mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-6xl xl:max-w-6xl">
                <div class="my-8 flex justify-between w-full flex-nowrap gap-4">
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/image2.jpeg" alt="Hero Image" class="w-auto h-52 rounded-2xl" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/taiwan/image3.jpeg" alt="Hero Image" class="w-auto h-52 rounded-2xl" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/taiwan/image2.jpeg" alt="Hero Image" class="w-auto h-52 rounded-2xl" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/taiwan/image4.jpeg" alt="Hero Image" class="w-auto h-52 rounded-2xl" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/taiwan/image7.jpeg" alt="Hero Image" class="w-auto h-52 rounded-2xl" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/taiwan/image8.jpeg" alt="Hero Image" class="w-auto h-52 rounded-2xl" />
                    </div>
                </div>
            </div>
            <div class="absolute top-32 left-[-20px]">
                <button class="bg-amber-600 text-white rounded-full p-2" @click="scrollToLeft()">
                    <img src="../assets/svgs/chevron_left_24dp_E3E3E3.svg" alt="Left Arrow" class="w-6 h-6" />
                </button>
            </div>
            <div class="absolute top-32 right-[-20px]">
                <button class="bg-amber-600 text-white rounded-full p-2" @click="scrollToRight()">
                    <img src="../assets/svgs/chevron_right_24dp_E3E3E3.svg" alt="Left Arrow" class="w-6 h-6" />
                </button>
            </div>
        </div>
        <div class="uppercase text-2xl mt-8 w-full py-8 border-t border-b flex flex-wrap flex-col lg:flex-row items-center justify-center my-auto" style="border-color: #a74d0f;">
            <div class="">June 04, 2025</div>
            <div class="mt-3 lg:mt-0 lg:ml-2 text-xl lg:text-2xl">Wednesday</div>
            <div class="mt-2 lg:mt-0 lg:ml-2">2:00 PM</div>
        </div>
        <div class="uppercase text-2xl py-8 border-b flex flex-wrap flex-col items-center justify-center my-auto" style="border-color: #a74d0f;">
            <div class="">Diocese of Imus Parish of </div>
            <div class="mt-3 lg:mt-0 lg:ml-2">the Holy Family</div>
            <div class="mt-3 lg:mt-0 lg:ml-2 text-sm">Lancaster New City, Imus</div>
        </div>
        <div class="text-2xl py-8 border-b flex flex-wrap flex-col items-center justify-center my-auto" style="border-color: #a74d0f;">
            <div class="font-pinyon">Reception to follow at</div>
            <div class="uppercase mt-3 lg:mt-0 lg:ml-2">Jardin De La Vida</div>
            <div class="uppercase mt-3 lg:mt-0 lg:ml-2 text-sm">466 Epsa Diversion Road, Magdalo, Kawit, Cavite</div>
        </div>
    </div>
    
</template>