<script setup lang="ts">

function engagementLeft() {
    const scrollContainer = document.querySelector('.engagement-scroll');
    scrollToLeft(scrollContainer);
}

function engagementRight() {
    const scrollContainer = document.querySelector('.engagement-scroll');
    scrollToRight(scrollContainer);
}

function taiwanLeft() {
    const scrollContainer = document.querySelector('.taiwan-scroll');
    scrollToLeft(scrollContainer);
}

function taiwanRight() {
    const scrollContainer = document.querySelector('.taiwan-scroll');
    scrollToRight(scrollContainer);
}

function momentsLeft() {
    const scrollContainer = document.querySelector('.moments-scroll');
    scrollToLeft(scrollContainer);
}

function momentsRight() {
    const scrollContainer = document.querySelector('.moments-scroll');
    scrollToRight(scrollContainer);
}

function scrollToLeft(scrollContainer: any) {
    if (scrollContainer) {
        scrollContainer.scrollBy({
            left: -scrollContainer.clientWidth,
            behavior: 'smooth'
        });
    }
}

function scrollToRight(scrollContainer: any) {
    if (scrollContainer) {
        scrollContainer.scrollBy({
            left: scrollContainer.clientWidth,
            behavior: 'smooth'
        });
    }
}

</script>

<template>
    <div class="p-4">
        <div class="w-full text-center text-6xl">She said yes!</div>
        <div class="relative w-full">
            <div class="engagement-scroll overflow-x-scroll overflow-hidden mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-6xl xl:max-w-6xl">
                <div class="flex flex-nowrap w-full justify-between gap-4 mb-4">
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/engagement/image6.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/engagement/image7.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/engagement/image8.JPG" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/engagement/image9.JPG" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                </div>
            </div> 
            <div class="absolute top-40 left-[-20px]">
                <button class="bg-amber-600 text-white rounded-full p-4" @click="engagementLeft()">
                    <img src="../assets/svgs/chevron_left_24dp_E3E3E3.svg" alt="Left Arrow" class="w-6 h-6" />
                </button>
            </div>
            <div class="absolute top-40 right-[-20px]">
                <button class="bg-amber-600 text-white rounded-full p-4" @click="engagementRight()">
                    <img src="../assets/svgs/chevron_right_24dp_E3E3E3.svg" alt="Left Arrow" class="w-6 h-6" />
                </button>
            </div>
        </div>
        <div class="w-full text-center text-6xl mt-12">Taiwan</div>
        <div class="relative w-full">
            <div class="taiwan-scroll overflow-x-scroll overflow-hidden mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-6xl xl:max-w-6xl">
                <div class="flex flex-nowrap w-full justify-between gap-4 mb-4">
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/taiwan/image1.jpeg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/taiwan/image2.jpeg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/taiwan/image3.jpeg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/taiwan/image4.jpeg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/taiwan/image5.jpeg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/taiwan/image6.jpeg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/taiwan/image7.jpeg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/taiwan/image8.jpeg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/engagement/image9.JPG" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                </div>
            </div>
            <div class="absolute top-40 left-[-20px]">
                <button class="bg-amber-600 text-white rounded-full p-4" @click="taiwanLeft()">
                    <img src="../assets/svgs/chevron_left_24dp_E3E3E3.svg" alt="Left Arrow" class="w-6 h-6" />
                </button>
            </div>
            <div class="absolute top-40 right-[-20px]">
                <button class="bg-amber-600 text-white rounded-full p-4" @click="taiwanRight()">
                    <img src="../assets/svgs/chevron_right_24dp_E3E3E3.svg" alt="Left Arrow" class="w-6 h-6" />
                </button>
            </div>
        </div>
        <div class="w-full text-center text-6xl mt-12">Special Moments</div>
        <div class="relative w-full">
            <div class="moments-scroll overflow-x-scroll overflow-hidden mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-6xl xl:max-w-6xl">
                <div class="flex flex-nowrap w-full justify-between gap-4 mb-4">
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/image2.jpeg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/image3.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/image4.jpeg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/image5.jpeg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/image6.jpeg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/image7.jpeg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/image8.jpeg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/image9.jpeg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/image10.jpeg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/image11.jpeg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/image12.jpeg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/image13.jpeg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-amber-50 shrink-0">
                        <img src="../assets/gallery/image14.jpeg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-amber-50" />
                    </div>
                </div>
            </div>
            <div class="absolute top-40 left-[-20px]">
                <button class="bg-amber-600 text-white rounded-full p-4" @click="momentsLeft()">
                    <img src="../assets/svgs/chevron_left_24dp_E3E3E3.svg" alt="Left Arrow" class="w-6 h-6" />
                </button>
            </div>
            <div class="absolute top-40 right-[-20px]">
                <button class="bg-amber-600 text-white rounded-full p-4" @click="momentsRight()">
                    <img src="../assets/svgs/chevron_right_24dp_E3E3E3.svg" alt="Left Arrow" class="w-6 h-6" />
                </button>
            </div>
        </div>
    </div>
</template>